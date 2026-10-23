import * as Styled from './style'

interface Props {
  children: React.ReactNode
}

export default function Button(props: Props) {
  const { children } = props
  return <Styled.Button {...props}>{children}</Styled.Button>
}
