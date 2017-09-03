import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import './fonts';

injectGlobal`
  ${normalize()}
  :root {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
    font-size: 16px;
    line-height: 24px;
  }

  #root {
    flex: 1;
  }

  @media screen and (min-aspect-ratio: 2/3) {
    overflow: hidden;
  }
`;
