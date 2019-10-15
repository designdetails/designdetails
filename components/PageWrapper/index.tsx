import HeroImage from '../HeroImage';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { Container, GridWrapper } from './styles';

interface Props {
  children?: any;
}

export default ({ children }: Props) => (
  <Container>
    <HeroImage alt="Design Details logo" src="/static/img/dd-wide.png" />
    <Navigation />
    <GridWrapper>{children}</GridWrapper>
    <Footer />
  </Container>
);
