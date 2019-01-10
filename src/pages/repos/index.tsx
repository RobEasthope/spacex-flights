import moment from "moment";
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";
import LoadingOverlay from "../../components/data/LoadingOverlay";
import LoadingOverlayInner from "../../components/data/LoadingOverlayInner";
import Container from "../../components/layout/Container";
import Page from "../../components/layout/Page";

import { Dispatch } from "redux";
import { ApplicationState, ConnectedReduxProps } from "../../store";
import { fetchRequest } from "../../store/repos/actions";
import { Repo } from "../../store/repos/types";

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading: boolean;
  data: Repo[];
  errors?: string;
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps;

class ReposIndexPage extends React.Component<AllProps> {
  public componentDidMount() {
    const { data } = this.props;

    if (data.length === 0) {
      this.props.fetchRequest();
    }
  }

  public render() {
    const { loading } = this.props;

    return (
      <Page>
        <Container>
          {loading && (
            <LoadingOverlay>
              <LoadingOverlayInner>LOADING</LoadingOverlayInner>
            </LoadingOverlay>
          )}

          {this.renderRepoInfo(this.props.data)}
        </Container>
      </Page>
    );
  }

  private renderRepoInfo = repo => {
    if (repo.full_name) {
      return (
        <div>
          <div>
            Name: <a href={repo.html_url}>{repo.full_name}</a>
          </div>
          <div>Description: {repo.description}</div>
          <div>
            Owner:
            <a href={repo.organization.html_url}>{repo.organization.login}</a>
          </div>
          <div>
            Homepage: <a href={repo.homepage}>{repo.homepage}</a>
          </div>
          <div>Stars: {repo.stargazers_count}</div>
          <div>Watchers: {repo.watchers}</div>
          <div>Open issues: {repo.open_issues}</div>
          <div>License: {repo.license.name}</div>
        </div>
      );
    }
  };
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ repos }: ApplicationState) => ({
  loading: repos.loading,
  errors: repos.errors,
  data: repos.data
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
)(ReposIndexPage);
