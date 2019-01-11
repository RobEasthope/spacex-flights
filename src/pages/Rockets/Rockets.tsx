import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { ApplicationState, ConnectedReduxProps } from "../../store";
import { fetchRocketsRequest } from "../../store/rockets/actions";

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading: boolean;
  data: any;
  errors?: string;
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  fetchRocketsRequest: typeof fetchRocketsRequest;
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps;

class RocketsPage extends React.Component<AllProps> {
  public componentDidMount() {
    const { data } = this.props;

    if (data.length === 0) {
      this.props.fetchRocketsRequest();
    }
  }

  public render() {
    const { loading } = this.props;

    return (
      <div>
        {loading && <span>LOADING</span>}

        {this.renderLaunchInfo(this.props.data)}
      </div>
    );
  }

  private renderLaunchInfo = rockets => {
    if (rockets[0] != null) {
      return <span>ROCKETS LOADED</span>;
    }
  };
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ rockets }: ApplicationState) => ({
  loading: rockets.loading,
  errors: rockets.errors,
  data: rockets.data
});

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRocketsRequest: () => dispatch(fetchRocketsRequest())
});

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RocketsPage);
