import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import theme from '../../config/theme'

export default createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    line-height: 1.5;
    background-color: ${theme.ui.wash};
    color: ${theme.text.primary};
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  
  p {
    margin: 0;
  }

  a, button {
    text-decoration: none;
    cursor: pointer;
  }

  code {
    background: ${theme.ui.wash};
    border-radius: 2px;
    border: 1px solid ${theme.ui.border};
    padding: 2px 4px;
  }

  .ReactModalPortal {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ReactModalPortal > * {
    opacity: 0;
  }
  .ReactModal__Overlay {
    transition: opacity 200ms ease-in;
    background: rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;

    .ReactModal__Content {
      transition: transform 200ms ease-out;
      transform: translateY(80px);

      &--after-open {
        transform: translateY(0px);
      }

      &--before-close {
        transform: translateY(80px);
      }
    }
    
    &--after-open {
      opacity: 1;
    }

    &--before-close {
      opacity: 0;
    }
  }

  .markdown {
    p {
      margin-top: 8px;
    }

    p:first-of-type {
      margin-top: 0;
    }

    p:not(:last-of-type):not(:first-of-type) {
      margin-top: 12px;
    }

    a {
      color: ${theme.brand.primary};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
