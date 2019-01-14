import styled from "styled-components";

const PlaceholderText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  margin: 0;
  max-width: 275px;

  h1,
  h3 {
    display: inline-block;

    line-height: 1;
    margin-top: 0;

    padding: 8px 10px 11px;
    /* background-color: white; */

    :first-child,
    :last-child {
      margin-bottom: 0;
    }
  }

  a {
    text-decoration: none;
  }
`;

export default PlaceholderText;
