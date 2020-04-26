import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * ,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    min-width: 320px;
    overflow-x: hidden;
    &.locked {
      overflow-y: hidden;
    }
  }

  body {
    margin: 0 auto;
    padding: 0;
  }

  ul, ol {
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
  }
`;
