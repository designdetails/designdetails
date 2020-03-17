import styled from 'styled-components'
import PageWrapper from '../../components/PageWrapper';
import EpisodeContent from '../../components/EpisodeContent';
import EpisodesSidebar from '../../components/EpisodesSidebar'
import { EpisodesPageGrid } from '../../components/PageWrapper/styles';
import { getEpisodes, getEpisode } from '../../data';

const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-gap: 24px;
  grid-auto-rows: min-content;
`

function Episode({ episode }) {
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

export async function getStaticPaths() {
  const episodes = await getEpisodes();
  const paths = episodes.map(({ id }) => ({
    // parameters must be strings
    params: { id: `${id}` }
  }))
  
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const episode = await getEpisode(params.id);
  return { props: { episode }}
}

export default Episode;
