import styled from 'styled-components';
import { hexa, tint } from '../utils';
import theme from '../../config/theme';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: 100%;

  a {
    padding: 12px;
    display: block;
    color: ${tint(theme.brand.primary, -30)};
    font-weight: 600;
    width: 100%;
    display: flex;
    border-radius: 8px;
    align-items: center;

    svg {
      fill: ${theme.brand.primary};
      margin-right: 12px;
      min-width: 6px;
      min-height: 9px;
    }

    &:hover {
      background: ${hexa(theme.brand.primary, 0.2)};
    }

    &:last-of-type {
      border-bottom: 0;
      margin-bottom: 0;
    }

    @media (max-width: 512px) {
      padding: 12px 0;
      align-items: flex-start;

      svg {
        margin-top: 8px;
      }

      &:hover {
        background: transparent;
      }
    }
  }
`;