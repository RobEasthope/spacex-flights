import styled from "styled-components";

const Container = styled("div")`
  margin: 0 auto;
  width: 100%;
  max-width: 720px;

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export default Container;
