import { Container, Text } from './styles';
function Footer() {
	return (
		<Container>
			<Text>Design Details © 2015 - {new Date().getFullYear()}</Text>
			<Text>
				This site is{' '}
				<a
					href="https://github.com/specfm/design-details"
					target="_blank"
					rel="noopener noreferrer"
				>
					open source
				</a>
			</Text>
		</Container>
	);
}
export default Footer;
