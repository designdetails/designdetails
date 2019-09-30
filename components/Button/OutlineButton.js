import * as Styled from './style';

export default function OutlineButton(props) {
  const { children } = props;
  return <Styled.OutlineButton {...props}>{children}</Styled.OutlineButton>;
}
