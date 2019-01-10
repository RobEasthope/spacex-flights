import * as React from "react";
import styled from "styled-components";

import brandColours from "../../styles/palette";

interface RootProps {
  className?: string;
}

const Root: React.SFC<RootProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default Root;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #ebebea;
  color: #2e2e2c;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial, sans-serif;
`;
