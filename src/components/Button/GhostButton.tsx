import * as Styled from './style'

interface Props {
  children: React.ReactChildren
}

export default function GhostButton(props: Props) {
  const { children } = props
  return <Styled.GhostButton {...props}>{children}</Styled.GhostButton>
}
