import styled from 'styled-components'
import { hexa, tint } from '../utils'
import theme from '../../config/theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 16px;
  width: 100%;
`

export const Option = styled.a`
  padding: 12px 12px;
  border-radius: 8px;
  color: ${tint(theme.brand.primary, -10)};
  font-weight: 600;
  background: ${hexa(theme.brand.primary, 0.12)};
  width: 100%;
  display: flex;

  &:hover {
    background: ${hexa(theme.brand.primary, 0.20)};
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`