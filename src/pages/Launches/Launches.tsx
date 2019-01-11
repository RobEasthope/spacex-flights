import React from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { Dispatch } from "redux";
import LoadingOverlay from "../../components/loading/LoadingOverlay";
import LoadingOverlayInner from "../../components/loading/LoadingOverlayInner";

import { fetchRequest } from "../../store/launches/actions";
import { Launch } from "../../store/launches/types";

import { ApplicationState, ConnectedReduxProps } from "../../store";

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading: boolean;
  data: Launch[];
  errors?: string;
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState &
  PropsFromDispatch &
  // RouteComponentProps<{}> &
  ConnectedReduxProps;

class LaunchesPage extends React.Component<AllProps> {
  public componentDidMount() {
    const { data } = this.props;

    if (data.length === 0) {
      this.props.fetchRequest();
    }
  }

  public render() {
    const { loading } = this.props;

    return (
      <div>
        {loading && (
          <LoadingOverlay>
            <LoadingOverlayInner>LOADING</LoadingOverlayInner>
          </LoadingOverlay>
        )}

        {this.renderLaunchInfo(this.props.data)}
      </div>
    );
  }

  private renderLaunchInfo = launch => {
    if (launch.full_name) {
      return (
        <div>
          <div>
            Name: <a href={launch.html_url}>{launch.full_name}</a>
          </div>
          <div>Description: {launch.description}</div>
          <div>
            Owner:
            <a href={launch.organization.html_url}>
              {launch.organization.login}
            </a>
          </div>
          <div>
            Homepage: <a href={launch.homepage}>{launch.homepage}</a>
          </div>
          <div>Stars: {launch.stargazers_count}</div>
          <div>Watchers: {launch.watchers}</div>
          <div>Open issues: {launch.open_issues}</div>
          <div>License: {launch.license.name}</div>
        </div>
      );
    }
  };
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ launches }: ApplicationState) => ({
  loading: launches.loading,
  errors: launches.errors,
  data: launches.data
});

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest())
});

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchesPage);
