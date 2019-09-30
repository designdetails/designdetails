import * as Styled from './style';

export default function GhostButton(props) {
  const { children } = props;
  return <Styled.GhostButton {...props}>{children}</Styled.GhostButton>;
}
