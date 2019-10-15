import styled, { keyframes, css } from 'styled-components';
import theme from '../../config/theme';
import { hexa } from '../utils';

const donutSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const animation = () =>
  css`
    ${donutSpin}
  `;

export default styled.div`
  animation: ${animation} 0.8s linear infinite;
  border: 4px solid ${hexa(theme.brand.primary, 0.2)};
  border-left-color: ${theme.brand.primary};
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;
