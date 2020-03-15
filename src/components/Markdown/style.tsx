import styled, { css } from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { tint } from '../utils';

const Content = css`
  h1 {
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.theme.text.primary};
    margin-top: 28px;
    margin-bottom: 4px;
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: ${props => props.theme.text.primary};
    margin-top: 26px;
    margin-bottom: 4px;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.text.primary};
    margin-top: 24px;
    margin-bottom: 4px;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.text.primary};
    margin-top: 16px;
    margin-bottom: 4px;
  }

  h5 {
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.text.primary};
    margin-top: 16px;
    margin-bottom: 4px;
  }

  h6 {
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.text.primary};
    margin-top: 16px;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    color: ${props => props.theme.text.secondary};
    margin-top: 16px;
  }

  a {
    color: ${props => tint(props.theme.brand.primary, -20)};
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }

  a:hover button {
    text-decoration: none !important;
  }

  ul,
  ol {
    margin-left: 12px;
    margin-top: 12px;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    color: ${props => props.theme.text.secondary};
  }

  li {
    line-height: 1.6;
    padding: 4px 0;
  }

  strong {
    font-weight: 600;
  }

  hr {
    display: none;
  }
`;

export const Notes = styled(ReactMarkdown)`
  ${Content}
  max-width: 100%;
  word-break: break-word;
`