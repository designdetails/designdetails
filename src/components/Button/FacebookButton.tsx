import * as Styled from './style'
import { Facebook } from '../Icons'

interface Props {
  children: React.ReactChildren
}

export default function FacebookButton(props: Props) {
  const { children } = props
  return (
    <Styled.FacebookButton {...props}>
      <Facebook />
      {children}
    </Styled.FacebookButton>
  )
}
