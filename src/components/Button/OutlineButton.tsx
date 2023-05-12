import * as Styled from './style'

interface Props {
  children: React.ReactChildren
}

export default function OutlineButton(props: Props) {
  const { children } = props
  return <Styled.OutlineButton {...props}>{children}</Styled.OutlineButton>
}
