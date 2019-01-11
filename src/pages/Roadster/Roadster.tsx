import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { fetchRoadsterRequest } from "../../store/roadster/actions";

import { ApplicationState, ConnectedReduxProps } from "../../store";

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading: boolean;
  data: any;
  errors?: string;
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  fetchRoadsterRequest: typeof fetchRoadsterRequest;
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps;

class RoadsterPage extends React.Component<AllProps> {
  public componentDidMount() {
    const { data } = this.props;

    if (data.length === 0) {
      this.props.fetchRoadsterRequest();
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

  private renderLaunchInfo = roadster => {
    if (roadster.name != null) {
      return <span>ROADSTER LOADED</span>;
    }
  };
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ roadster }: ApplicationState) => ({
  loading: roadster.loading,
  errors: roadster.errors,
  data: roadster.data
});

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRoadsterRequest: () => dispatch(fetchRoadsterRequest())
});

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoadsterPage);
