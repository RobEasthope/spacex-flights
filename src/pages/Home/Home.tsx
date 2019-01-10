import * as React from "react";
import styled from "styled-components";
import Container from "../../components/layout/Container";
import Page from "../../components/layout/Page";
import palette from "../../styles/palette";

export default () => (
  <Page>
    <Container>
      <PageContent>
        <h1>Create-react-app-typescript-redux-sagas</h1>
        <p>This boilerplate example adds:</p>
        <ul>
          <li>Create React App boilerpate with Typscript</li>
          <li>React Redux</li>
          <li>Redux Sagas</li>
          <li>Styled Components</li>
          <li>React specific and Prettier friendly TSlint with a few tweaks</li>
        </ul>
      </PageContent>
    </Container>
  </Page>
);

const PageContent = styled.article`
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;

  a {
    color: ${palette.highlight};
  }
`;
