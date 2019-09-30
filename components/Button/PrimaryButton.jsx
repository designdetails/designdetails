import * as Styled from './style';

export default function PrimaryButton(props) {
  const { children } = props;
  return <Styled.PrimaryButton {...props}>{children}</Styled.PrimaryButton>;
}
