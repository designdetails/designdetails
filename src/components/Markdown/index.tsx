// @flow
import * as React from 'react';
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
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
  return <Notes rehypePlugins={[rehypeRaw, rehypeSanitize]} components={{ link: LinkRenderer }}>{children}</Notes>;
}

export default Markdown;
