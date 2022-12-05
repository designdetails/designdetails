import styled from 'styled-components';
import PageWrapper from '../../components/PageWrapper';
import EpisodeContent from '../../components/EpisodeContent';
import EpisodesSidebar from '../../components/EpisodesSidebar';
import { EpisodesPageGrid } from '../../components/PageWrapper/styles';
import { getEpisode } from '../../data';
import { Episode as EpisodeType } from '../../types';

const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-gap: 24px;
  grid-auto-rows: min-content;
`;

function Episode({ episode }: { episode: EpisodeType }) {
  return (
    <PageWrapper>
      <EpisodesPageGrid>
        <EpisodesSidebar />

        <Content>
          <EpisodeContent episode={episode} />
        </Content>
      </EpisodesPageGrid>
    </PageWrapper>
  );
}

export async function getServerSideProps({ params }) {
  const episode = await getEpisode(params.id);
  return {
    props: { episode, id: params.id },
  };
}

export default Episode;
