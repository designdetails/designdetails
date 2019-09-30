import { Container, Text } from './styles'
export default () => (
  <Container>
    <Text>Design Details © 2015 - {new Date().getFullYear()}</Text>
    <Text>A member of the <a href="https://spec.fm/" target="_blank" rel="noopener noreferrer">Spec Network</a></Text>
    <Text>This site is <a href="https://github.com/specfm/design-details" target="_blank" rel="noopener noreferrer">open source</a></Text>
  </Container>
)