import styled from 'styled-components'
import theme from '../../config/theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 8px;
  align-items: center;
  width: 100%;
`

export const Option = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  grid-template-rows: auto;
  grid-gap: 16px;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.1s ease-in-out;
  margin: 0 -8px;
  width: calc(100% + 16px);

  &:hover {
    transition: all 0.1s ease-in-out;
    background: rgba(0,0,0,0.08);
  }

  &:active {
    background: ${theme.ui.border};
    transform: translateY(1px);
    transition: all 0.1s ease-in-out;
  }
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
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