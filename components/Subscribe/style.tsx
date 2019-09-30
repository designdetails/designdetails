import styled from 'styled-components'
import theme from '../../config/theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 16px;
  align-items: center;
  width: 100%;
  margin-top: 8px;
`

export const Option = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  grid-template-rows: auto;
  grid-gap: 4px;
  padding: 8px;
  border-radius: 8px;
  margin: 0 -8px;
  width: calc(100% + 16px);

  &:hover {
    background: rgba(0,0,0,0.04);
  }

  &:active {
    background: ${theme.ui.border};
    transform: translateY(1px);
  }
`

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background-color: ${theme.ui.default};
`

export const Label = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.text.secondary};
  align-items: center;
  display: flex;
`

export const Arrow = styled.span``