import * as Styled from './style';

export default function Button(props) {
  const { children } = props;
  return <Styled.Button {...props}>{children}</Styled.Button>;
}
