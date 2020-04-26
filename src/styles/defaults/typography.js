import { createGlobalStyle } from "styled-components";

import { color } from "../variables/colors";
import { fontSize } from "../variables/font-sizes";
import { breakpoint } from "../variables/breakpoints";

export default createGlobalStyle`
  html {
    font-size: 62.5%;

  }

  body {
    font-size: 1em;
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    text-rendering: optimizeLegibility;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${color.background}
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  span,
  strong {
    color: ${color.text};
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${color.text};
    font-family: inherit;
  }

  h1 {
    font-size: ${fontSize.xxxl};

    @media (min-width: ${breakpoint.desktop}) {
      font-size: ${fontSize.xxxxl};
    }
  }

  h2 {
    font-size: ${fontSize.xxl};

    @media (min-width: ${breakpoint.desktop}) {
      font-size: ${fontSize.xxxl};
    }
  }

  h3 {
    font-size: ${fontSize.xl};

    @media (min-width: ${breakpoint.desktop}) {
      font-size: ${fontSize.xxl};
    }
  }

  h4 {
    font-size: ${fontSize.lg};
    font-weight: 900;

    @media (min-width: ${breakpoint.desktop}) {
      font-size: ${fontSize.xl};
    }
  }

  h5 {
    font-size: ${fontSize.md};
    @media (min-width: ${breakpoint.tablet}) {
      font-size: ${fontSize.lg};
    }
  }

  h6 {
    font-size: ${fontSize.sm};
    font-weight: 900;
    @media (min-width: ${breakpoint.tablet}) {
      font-size: ${fontSize.md};
    }
  }

  p, textarea, a, span {
    font-family: inherit
    font-size: ${fontSize.xs};
    @media (min-width: ${breakpoint.desktop}) {
      font-size: ${fontSize.sm};
    }
  }

  input {
    font-size: ${fontSize.xs};
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary}
    &:hover {
      color: ${({ theme }) => theme.color.primaryDark}
    }
  }

  button {
    font-family: inherit;
  }

`;
