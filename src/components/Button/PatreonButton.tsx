import * as Styled from './style'
import { Patreon } from '../Icons'

interface Props {
  children: React.ReactChildren | string
}

export default function PatreonButton(props: Props) {
  const { children } = props
  return (
    <a
      href="https://patreon.com/designdetails"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'inline-block' }}
    >
      <Styled.PatreonButton {...props}>
        <Patreon />
        {children}
      </Styled.PatreonButton>
    </a>
  )
}
