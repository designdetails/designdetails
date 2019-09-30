import Link from 'next/link'
import { withRouter } from 'next/router'
import { Container, NavItem } from './styles'
import { LinkExternal } from '../Icons'

const Navigation = ({ router }) => (
  <Container>
    <Link href={'/'}>
      <a><NavItem active={router.pathname === '/'}>Home</NavItem></a>
    </Link>

    {/* <Link href={'/about'}>
      <a><NavItem active={router.pathname === '/about'}>About</NavItem></a>
    </Link> */}

    <a href="https://spec.fm/podcasts/design-details" target="_blank" rel="noreferrer noopener">
      <NavItem>Episodes <LinkExternal /></NavItem>
    </a>

    <a href="https://patreon.com/designdetails" target="_blank" rel="noreferrer noopener">
      <NavItem>Support us <LinkExternal /></NavItem>
    </a>
  </Container>
)

export default withRouter(Navigation)