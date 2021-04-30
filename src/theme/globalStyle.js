import { createGlobalStyle } from 'styled-components'
import { reset } from "./reset"

export const GlobalStyle = createGlobalStyle`
  :root {
    --typescale: ${({ theme }) => theme.typescale[0]};
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      --typescale: ${({ theme }) => theme.typescale[1]};
    }
  }
  ${reset}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: ${({ theme }) => theme.basefont.mobile};
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.basefont.mobile};
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
      font-size: ${({ theme }) => theme.basefont.laptop};
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
      font-size: ${({ theme }) => theme.basefont.wide};
    }
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background-size: 100% 425px;
    background-color: ${({ theme }) => theme.colors.background};
    line-height: ${({ theme }) => theme.baseline};
    font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.body};
  }
  p,
  ul,
  ol,
  pre,
  table,
  blockquote,
  figcaption {
    font-size: 1rem;
    font-weight: 300;
    margin-top: 0;
    line-height: calc(${({ theme }) => theme.baseline} / 1);
    margin-bottom: calc(${({ theme }) => theme.baseline} / 1);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 1.45rem;
    padding: 0;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.heading};
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-size: calc(1rem * var(--typescale) * var(--typescale) * var(--typescale) * var(--typescale));
    line-height: calc(${({ theme }) => theme.baseline} * 2);
    margin-top: calc(${({ theme }) => theme.baseline} / 2);
    margin-bottom: ${({ theme }) => theme.baseline};
  }
  h2 {
    font-size: calc(1rem * var(--typescale) * var(--typescale) * var(--typescale));
    /* line-height: calc(${({ theme }) => theme.baseline} * 1.5); */
    margin-bottom: calc(${({ theme }) => theme.baseline} / 1);
  }
  h3 {
    font-size: calc(1rem * var(--typescale) * var(--typescale));
    /* line-height: calc(${({ theme }) => theme.baseline} * 1); */
    margin-bottom: calc(${({ theme }) => theme.baseline} / 2);
  }
  h4 {
    font-size: calc(1rem * var(--typescale));
    line-height: calc(${({ theme }) => theme.baseline} * 1);
    margin-top: calc(${({ theme }) => theme.baseline} * 1);
    margin-bottom: calc(${({ theme }) => theme.baseline} / 2);
  }
  h5 {
    font-size: 1rem;
    line-height: calc(${({ theme }) => theme.baseline} / 2);
    margin-top: calc(${({ theme }) => theme.baseline} / 2);
    margin-bottom: calc(${({ theme }) => theme.baseline} / 2);
  }
  h6 {
    font-size: calc(1rem / var(--typescale));
    line-height: 1.1;
    margin-bottom: calc(${({ theme }) => theme.baseline} / 2);
  }
  article {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
  label {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.body};
    display: block;
    margin-bottom: ${({ theme }) => theme.space[2]};
    cursor: pointer;
  }
  input[type="text"],
  input[type="password"],
  input[type="date"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="month"],
  input[type="week"],
  input[type="email"],
  input[type="number"],
  input[type="search"],
  input[type="tel"],
  input[type="time"],
  input[type="url"],
  textarea {
    background-color: ${({ theme }) => theme.colors.white};
    font-family: inherit;
    border: 1px solid #d8d8d8;
    border-radius: 2px;
    display: block;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: 0 0 ${({ theme }) => theme.space[4]} 0;
    padding: ${({ theme }) => theme.space[2]};
    transition: all 0.15s linear;
  }
  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
  }
`