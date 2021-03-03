import styled, { css } from 'styled-components';
import theme from '../../config/theme';
import { tint } from '../utils';

export const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  margin-top: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 512px) {
    grid-template-columns: 1fr;
  }
`;

export const GoldenGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  margin-top: 24px;
  border-bottom: 1px solid ${tint('#FDE8E6', -4)};
  padding-bottom: 24px;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 512px) {
    grid-template-columns: 1fr;
  }
`;

export const Microphone = styled.a`
  display: flex;
  flex: 1 0 33%;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;

  &:hover {
    background: ${tint('#FDE8E6', -4)};
  }
`;

export const MicAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

export const MicName = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${tint(theme.social.patreon, -50)};
  margin: 0;
  margin-top: 12px;
`;

export const MicTagline = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${tint(theme.social.patreon, -40)};
  margin: 0;
  margin-bottom: 16px;
`;

export const Supporter = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 0;
  border-radius: 8px;

  a {
    display: flex;
    width: 100%;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  svg {
    fill: #901eea;
    align-self: flex-end;
    justify-self: flex-end;
    position: relative;
    top: 2px;
    right: 14px;
    background: #fde8e6;
    border-radius: 30px;
    border: 2px solid #fde8e6;
  }
`;

export const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  min-width: 44px;
  min-height: 44px;
  background: url('${props => props.src}');
  background-size: cover;
  background-position: 50% 50%;

  ${props => props.inactive && css`
    filter: grayscale(1);
    opacity: 0.5;
  `}
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${tint(theme.social.patreon, -50)};
`;

export const Username = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${tint(theme.social.patreon, -40)};
`;
