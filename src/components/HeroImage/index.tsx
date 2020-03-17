import styled from 'styled-components';
import theme from '../../config/theme';

export default styled.img`
  width: 100%;
  max-height: 314px;
  min-height: 314px;
  margin: 0;
  background: ${theme.brand.primary};

  @media (min-width: 1280px) {
    border-radius: 12px 12px 0 0;
  }

  @media (max-width: 1280px) {
    min-height: 1px;
  }
`;
