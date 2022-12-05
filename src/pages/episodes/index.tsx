import styled from 'styled-components';
import PageWrapper from '../../components/PageWrapper';
import EpisodesList from '../../components/EpisodesList';
import { EpisodesPageGrid } from '../../components/PageWrapper/styles';
import EpisodesSidebar from '../../components/EpisodesSidebar';
import { getEpisodes } from '../../data';
import { Episode } from '../../types';

const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-gap: 24px;
  grid-auto-rows: min-content;
  grid-column: span 1;

  @media (max-width: 768px) {
    grid-gap: 12px;
  }
`;

function Episodes({ episodes }: { episodes: Episode[] }) {
  return (
    <PageWrapper>
      <EpisodesPageGrid>
        <EpisodesSidebar />

        <Content>
          <EpisodesList episodes={episodes} />
        </Content>
      </EpisodesPageGrid>
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const episodes = await getEpisodes({ limit: 1000, offset: 0 });
  return { props: { episodes } };
}

export default Episodes;
