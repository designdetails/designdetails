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
			<a>
				<NavItem active={router.pathname === '/'}>Home</NavItem>
			</a>
		</Link>

		<Link href={'/episodes'}>
			<a>
				<NavItem active={router.pathname.includes('/episodes')}>Episodes</NavItem>
			</a>
		</Link>

		<a href="https://patreon.com/designdetails" target="_blank" rel="noreferrer noopener">
			<NavItem>
				Bonus episodes <LinkExternal />
			</NavItem>
		</a>

		<Link href="/jobs">
			<a>
				<NavItem>
					Job Board <LinkExternal />
				</NavItem>
			</a>
		</Link>
	</Container>
);

export default withRouter(Navigation);
