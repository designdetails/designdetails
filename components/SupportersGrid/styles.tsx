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
`

export const AvatarContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`

export const DayOne = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background: #901EEA;
  align-self: flex-end;
  justify-self: flex-end;
  margin-left: -12px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 4px #FDE8E6;

  svg {
    fill: #fff;
  }
`