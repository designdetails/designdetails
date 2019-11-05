import styled from 'styled-components';
import theme from '../../config/theme';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 128px 0;
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${theme.text.tertiary};
  margin-bottom: 4px;

  a {
    color: ${theme.text.primary};
  }
`;
