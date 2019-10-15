import * as Styled from './style';

interface Props {
  children: React.ReactChildren;
}

export default function Button(props: Props) {
  const { children } = props;
  return <Styled.Button {...props}>{children}</Styled.Button>;
}
