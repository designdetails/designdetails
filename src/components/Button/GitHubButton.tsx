import * as Styled from './style';
import { GitHub } from '../Icons';

interface Props {
  children: React.ReactChildren | string;
}

export default function GitHubButton(props: Props) {
  const { children } = props;
  return (
    <a
      href="https://github.com/specfm/design-details/issues/new"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'inline-block' }}
    >
      <Styled.GitHubButton {...props}>
        <GitHub />
        {children}
      </Styled.GitHubButton>
    </a>
  );
}
