import Link from 'next/link'
import { withRouter, Router } from 'next/router'
import { Container, NavItem } from './styles'

interface Props {
  router: Router
}

const Navigation = ({ router }: Props) => (
  <Container>
    <Link href={'/'}>
      <NavItem active={router.pathname === '/'}>Home</NavItem>
    </Link>

    <Link href={'/episodes'}>
      <NavItem active={router.pathname.includes('/episodes')}>Episodes</NavItem>
    </Link>
  </Container>
)

export default withRouter(Navigation)
