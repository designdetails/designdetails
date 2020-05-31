// @flow
import * as React from 'react';
import { Notes } from './style';

function LinkRenderer(props: any) {
  const { children, href } = props;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Markdown({ children }) {
  return <Notes escapeHtml={false} renderers={{ link: LinkRenderer }}>{children}</Notes>;
}

export default Markdown;
