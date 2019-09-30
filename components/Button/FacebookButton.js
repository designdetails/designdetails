import * as Styled from './style';
import { Facebook } from '../Icons'

export default function FacebookButton(props) {
  const { children } = props;
  return (
    <Styled.FacebookButton {...props}>
      <Facebook />
      {children}
    </Styled.FacebookButton>
  );
}
