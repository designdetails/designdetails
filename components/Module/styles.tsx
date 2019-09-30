import styled from 'styled-components'
import theme from '../../config/theme'
import { hexa, tint } from '../utils'

export const Container = styled.div`
  background: ${props => props.tint ? hexa(props.tint, 0.08) : theme.ui.borderLight};
  border-radius: 12px;
  padding: 24px;
  display: grid;
  grid-column: ${props => props.col};

  @media(max-width: 768px) {
    grid-column: span 1;
  }
`

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 800;
  color: ${props => props.tint ? tint(props.tint, -20) : theme.text.primary};
  margin: 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 8px;
    fill: currentColor;
  }
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 500;
  max-width: 768px;
  color: ${props => props.tint ? tint(props.tint, -30) : theme.text.secondary};
  margin: 0;
  margin-bottom: 16px;
  line-height: 1.4;
`