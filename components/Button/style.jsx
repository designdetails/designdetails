import styled, { css } from 'styled-components';
import { hexa, tint } from '../utils';
import theme from '../../config/theme';

const getPadding = (size) => {
  switch (size) {
    case 'small':
      return '8px 12px';
    case 'default':
      return '12px 16px';
    case 'large':
      return '16px 2px';
    default: {
      return '12px 16px';
    }
  }
};

const getFontSize = (size) => {
  switch (size) {
    case 'small':
      return '14px';
    case 'default':
      return '16px';
    case 'large':
      return '18px';
    default: {
      return '16px';
    }
  }
};

const base = css`
  -webkit-appearance: none;
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: ${props => getFontSize(props.size)};
  font-weight: 600;
  white-space: nowrap;
  word-break: keep-all;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  line-height: 1;
  position: relative;
  text-align: center;
  padding: ${props => getPadding(props.size)};
  opacity: ${props => (props.disabled ? '0.64' : '1')};
  box-shadow: ${props =>
    props.disabled ? 'none' : `0 1px 2px rgba(0,0,0,0.04)`};

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: ${props =>
      props.disabled ? 'none' : `${theme.shadows.button}`};
  }

  &:focus {
    outline: none;
  }

  svg {
    margin-right: 8px;
  }
`;

export const Button = styled.button`
  ${base}
  border: 1px solid ${theme.ui.border};
  color: ${theme.text.secondary};
  background-color: ${theme.ui.default};
  background-image: ${props =>
    `linear-gradient(to bottom, ${theme.ui.default}, ${
      theme.bg.wash
    })`};
  
  &:hover {
    color: ${theme.text.primary};
  }

  &:active {
    border: 1px solid ${theme.ui.border};
    background-image: ${props =>
      `linear-gradient(to top, ${theme.ui.default}, ${
        theme.bg.wash
      })`};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props => theme.ui.default}, 0 0 0 3px ${
  theme.ui.border
};
  }
`;

export const PrimaryButton = styled.button`
  ${base}
  border: 1px solid ${theme.brand.default};
  color: ${theme.ui.default};
  background-color: ${theme.brand.alt};
  background-image: ${props =>
    `linear-gradient(to bottom, ${theme.brand.alt}, ${
      theme.brand.default
    })`};

  &:hover {
    color: ${theme.ui.default};
    background-image: ${props =>
      `linear-gradient(to bottom, ${tint(theme.brand.alt, 16)}, ${tint(
        theme.brand.default,
        16
      )})`};
    box-shadow: ${props => (props.disabled ? 'none' : theme.shadows.button)};
  }

  &:active {
    border: 1px solid ${theme.brand.default};
    background-image: ${props =>
      `linear-gradient(to top, ${theme.brand.alt}, ${
        theme.brand.default
      })`};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props =>
      theme.ui.default}, 0 0 0 3px ${props =>
  hexa(theme.brand.alt, 0.16)};
  }
`;

export const GhostButton = styled.button`
  ${base} border: none;
  color: ${theme.text.secondary};
  box-shadow: none;
  background-color: transparent;
  background-image: none;

  &:hover {
    background: ${props => tint(theme.bg.wash, -3)};
    color: ${theme.text.primary};
    box-shadow: none;
  }

  &:focus {
    box-shadow: 0 0 0 1px ${theme.ui.default},
      0 0 0 3px ${props => hexa(theme.text.tertiary, 0.08)};
  }
`;

export const OutlineButton = styled.button`
  ${base}
  border: 1px solid ${theme.ui.border};
  color: ${theme.text.secondary};
  background-color: transparent;
  background-image: none;

  &:hover {
    color: ${theme.text.primary};
    border: 1px solid ${theme.ui.border};
    box-shadow: none;
  }

  &:active {
    border: 1px solid ${theme.text.placeholder};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props => theme.ui.default}, 0 0 0 3px ${
  theme.ui.border
};
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 968px) {
    flex-wrap: nowrap;

    button {
      margin-top: 8px;
    }
  }
`;

export const ButtonSegmentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    z-index: 1;
  }

  button:active,
  button:focus {
    z-index: 2;
  }

  button:first-of-type:not(:last-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button:last-of-type:not(:first-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  button:not(:last-of-type):not(:first-of-type) {
    border-radius: 0;
    position: relative;
    margin: 0 -1px;
  }

  ${PrimaryButton} {
    &:focus {
      box-shadow: 0 0 0 1px ${theme.ui.default},
        0 0 0 3px ${props => hexa(theme.brand.alt, 0.16)};
    }
  }
`;

export const FacebookButton = styled.button`
  ${base}
  border: 1px solid ${theme.social.facebook};
  color: ${theme.ui.default};
  background-color: ${theme.social.facebook};
  background-image: ${props =>
    `linear-gradient(to bottom, ${theme.social.facebook}, ${
      theme.social.facebook
    })`};

  &:hover {
    color: ${theme.ui.default};
    background-image: ${props =>
      `linear-gradient(to bottom, ${tint(
        theme.social.facebook,
        16
      )}, ${tint(theme.social.facebook, 16)})`};
    box-shadow: ${props => (props.disabled ? 'none' : theme.shadows.button)};
  }

  &:active {
    border: 1px solid ${theme.social.facebook};
    background-image: ${props =>
      `linear-gradient(to top, ${theme.social.facebook}, ${
        theme.social.facebook
      })`};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props =>
      theme.ui.default}, 0 0 0 3px ${props =>
  hexa(theme.social.facebook, 0.16)};
  }
`;

export const TwitterButton = styled.button`
  ${base}
  border: 1px solid ${theme.social.twitter};
  color: ${theme.ui.default};
  background-color: ${theme.social.twitter};
  background-image: ${props =>
    `linear-gradient(to bottom, ${theme.social.twitter}, ${
      theme.social.twitter
    })`};

  &:hover {
    color: ${theme.ui.default};
    background-image: ${props =>
      `linear-gradient(to bottom, ${tint(
        theme.social.twitter,
        4
      )}, ${tint(theme.social.twitter, 4)})`};
    box-shadow: ${props => (props.disabled ? 'none' : theme.shadows.button)};
  }

  &:active {
    border: 1px solid ${theme.social.twitter};
    background-image: ${props =>
      `linear-gradient(to top, ${theme.social.twitter}, ${
        theme.social.twitter
      })`};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props =>
      theme.ui.default}, 0 0 0 3px ${props =>
  hexa(theme.social.twitter, 0.16)};
  }

  svg {
    fill: #FFF;
  }
`;

export const PatreonButton = styled.button`
  ${base}
  border: 1px solid ${theme.social.patreon};
  color: ${theme.ui.default};
  background-color: ${theme.social.patreon};
  background-image: ${props =>
    `linear-gradient(to bottom, ${theme.social.patreon}, ${
      theme.social.patreon
    })`};


  &:hover {
    color: ${theme.ui.default};
    background-image: ${props =>
      `linear-gradient(to bottom, ${tint(
        theme.social.patreon,
        4
      )}, ${tint(theme.social.patreon, 4)})`};
    box-shadow: ${props => (props.disabled ? 'none' : theme.shadows.button)};
  }

  &:active {
    border: 1px solid ${theme.social.patreon};
    background-image: ${props =>
      `linear-gradient(to top, ${theme.social.patreon}, ${
        theme.social.patreon
      })`};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props =>
      theme.ui.default}, 0 0 0 3px ${props =>
  hexa(theme.social.patreon, 0.16)};
  }
`;

export const GitHubButton = styled.button`
  ${base}
  border: 1px solid ${theme.social.github};
  color: ${theme.ui.default};
  background-color: ${theme.social.github};
  background-image: ${props =>
    `linear-gradient(to bottom, ${theme.social.github}, ${
      theme.social.github
    })`};


  &:hover {
    color: ${theme.ui.default};
    background-image: ${props =>
      `linear-gradient(to bottom, ${tint(
        theme.social.github,
        4
      )}, ${tint(theme.social.github, 4)})`};
    box-shadow: ${props => (props.disabled ? 'none' : theme.shadows.button)};
  }

  &:active {
    border: 1px solid ${theme.social.github};
    background-image: ${props =>
      `linear-gradient(to top, ${theme.social.github}, ${
        theme.social.github
      })`};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props =>
      theme.ui.default}, 0 0 0 3px ${props =>
  hexa(theme.social.github, 0.16)};
  }

  svg {
    fill: #fff;
  }
`;