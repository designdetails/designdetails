import styled from 'styled-components'
import theme from '../../config/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.ui.default};
  border-bottom: 1px solid ${theme.ui.border};
  position: sticky;
  top: 0;
`
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-weight: 500;
  color: ${props => props.active ? theme.text.primary : theme.text.tertiary};
  border-bottom: 2px solid ${props => props.active ? theme.text.primary : 'transparent'};
  fill: blue;

  svg {
    position: relative;
    top: 1px;
    margin-left: 8px;
    fill: ${theme.icon.tertiary};
  }

  &:hover {
    color: ${props => props.active ? theme.text.primary : theme.text.secondary};
    border-bottom: 2px solid ${props => props.active ? theme.text.primary : theme.ui.border};

    svg {
      margin-left: 8px;
      fill: ${theme.icon.secondary};
    }
  }
`