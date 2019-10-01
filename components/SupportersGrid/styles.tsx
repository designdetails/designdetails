import styled from 'styled-components'
import theme from '../../config/theme'
import { tint, hexa } from '../utils';

export const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  margin-top: 24px;

  @media(max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 512px) {
    grid-template-columns: 1fr;
  }
`

export const Supporter = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: ${tint(theme.social.patreon, -50)};
  
  a {
    text-decoration: none;
    font-weight: 900;
    color: ${tint(theme.social.patreon, -50)};
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-right: 8px;

  svg {
    fill: #901EEA;
    align-self: flex-end;
    justify-self: flex-end;
    position: relative;
    top: 2px;
    right: 14px;
    background: #FDE8E6;
    border-radius: 30px;
    border: 2px solid #FDE8E6;
  }
`

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`