import styled from 'styled-components'
import PageWrapper from '../../components/PageWrapper';
import EpisodeContent from '../../components/EpisodeContent';
import EpisodesSidebar from '../../components/EpisodesSidebar'
import { EpisodesPageGrid } from '../../components/PageWrapper/styles';

const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-gap: 24px;
  grid-auto-rows: min-content;
`

function Episode({ id }) {
  return (
    <PageWrapper>
      <EpisodesPageGrid>
        <EpisodesSidebar />

        <Content>
          <EpisodeContent id={id} />
        </Content>
      </EpisodesPageGrid>
    </PageWrapper>
  );
}

export async function getServerSideProps({ params }) {
  return { props: { id: params.id } }
}

export default Episode;
