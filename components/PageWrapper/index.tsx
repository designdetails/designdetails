import HeroImage from '../HeroImage'
import Navigation from '../Navigation'
import { Container, GridWrapper } from './styles'

export default ({ children }) => (
  <Container>
    <HeroImage src="/static/img/dd-wide.png" />
    <Navigation />
    <GridWrapper>
      {children}
    </GridWrapper>
  </Container>
)