import * as Styled from './style';
import { Twitter } from '../Icons';

interface Props {
  children: React.ReactChildren | string;
}

export default function TwitterButton(props: Props) {
  const { children } = props;
  return (
    <Styled.TwitterButton {...props}>
      <Twitter />
      {children}
    </Styled.TwitterButton>
  );
}
