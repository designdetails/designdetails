import * as Styled from './style'

interface Props {
  children: React.ReactNode
}

export default function OutlineButton(props: Props) {
  const { children } = props
  return <Styled.OutlineButton {...props}>{children}</Styled.OutlineButton>
}
