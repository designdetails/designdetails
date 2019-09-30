import styled from 'styled-components'
import { hexa, tint } from '../utils'
import theme from '../../config/theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: 100%;
`

export const Option = styled.a`
  padding: 12px;
  color: ${tint(theme.brand.primary, -10)};
  font-weight: 600;
  width: 100%;
  display: flex;
  border-radius: 8px;
  align-items: center;

  svg {
    fill: ${theme.brand.primary};
    margin-right: 12px;
  }

  &:hover {
    background: ${hexa(theme.brand.primary, 0.20)};
  }

  &:last-of-type {
    border-bottom: 0;
    margin-bottom: 0;
  }
`