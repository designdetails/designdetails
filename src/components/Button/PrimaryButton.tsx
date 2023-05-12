import * as Styled from './style'

interface Props {
  children: React.ReactChildren
}

export default function PrimaryButton(props: Props) {
  const { children } = props
  return <Styled.PrimaryButton {...props}>{children}</Styled.PrimaryButton>
}
