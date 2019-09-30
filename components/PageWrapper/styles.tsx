import styled from 'styled-components'
import theme from '../../config/theme'

export const Container = styled.div`
  background: ${theme.ui.wash};
  margin: 0 auto;
  max-width: 1256px;
  display: flex;
  flex-direction: column;

  @media(min-width: 1256px) {
    margin: 32px auto;
    border-radius: 12px;
  }
`
export const GridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 24px;
  margin-top: 24px;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`