import * as Styled from './style';
import { Twitter } from '../Icons'

export default function TwitterButton(props) {
  const { children } = props;
  return (
    <Styled.TwitterButton {...props}>
      <Twitter />
      {children}
    </Styled.TwitterButton>
  );
}
