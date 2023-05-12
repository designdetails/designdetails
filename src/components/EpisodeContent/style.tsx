import styled from 'styled-components'
import theme from '../../config/theme'

export const Content = styled.div`
  audio {
    margin-bottom: 32px;
  }
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: ${theme.text.primary};
  letter-spacing: 0.8px;
  line-height: 1.2;
  margin-bottom: 32px;

  @media (max-width: 968px) {
    font-size: 32px;
    line-height: 1.1;
  }
`

export const Description = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: ${theme.text.tertiary};
  line-height: 1.4;
  margin-bottom: 4px;
  margin-top: 24px;

  @media (max-width: 968px) {
    font-size: 18px;
    margin-bottom: 16px;
  }

  a:hover {
    color: ${theme.text.primary};
  }
`

export const Divider = styled.div`
  position: relative;
  height: 1px;
  border-bottom: 1px solid ${theme.ui.border};
  width: 100%;
  margin-top: 48px;
`

export const Label = styled.span`
  position: relative;
  top: -13px;
  background: ${theme.ui.wash};
  padding: 2px 16px 2px 0;
  font-size: 16px;
  font-weight: 500;
  color: ${theme.text.secondary};
`
