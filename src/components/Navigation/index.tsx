import Link from 'next/link';
import { withRouter, Router } from 'next/router';
import { Container, NavItem } from './styles';
import { LinkExternal } from '../Icons';

interface Props {
  router: Router;
}

const Navigation = ({ router }: Props) => (
  <Container>
    <Link href={'/'}>
      <NavItem active={router.pathname === '/'}>Home</NavItem>
    </Link>

    <Link href={'/episodes'}>
      <NavItem active={router.pathname.includes('/episodes')}>Episodes</NavItem>
    </Link>

    <a
      href="https://patreon.com/designdetails"
      target="_blank"
      rel="noreferrer noopener"
    >
      <NavItem>
        Bonus episodes <LinkExternal />
      </NavItem>
    </a>
  </Container>
);

export default withRouter(Navigation);
