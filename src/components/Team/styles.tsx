import styled from 'styled-components'
import theme from '../../config/theme'
import { hexa } from '../utils'

export const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 512px) {
    grid-template-columns: 1fr;
  }
`

export const Person = styled.div`
  border-radius: 8px;
  background: ${hexa(theme.ui.default, 0.5)};
  text-align: center;
  padding: 24px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  margin-top: 8px;

  a,
  button {
    width: 100%;
  }
`

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin: 0 auto;
`

export const Name = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.text.primary};
  margin: 0;
  margin-top: 12px;
`

export const Role = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.text.secondary};
  margin: 0;
  margin-bottom: 16px;
`
