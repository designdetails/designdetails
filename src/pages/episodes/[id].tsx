import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
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

function Episode({ id, episode }) {
  return (
    <PageWrapper>
      <EpisodesPageGrid>
        <EpisodesSidebar />

        <Content>
          <EpisodeContent id={id} episode={episode} />
        </Content>
      </EpisodesPageGrid>
    </PageWrapper>
  );
}

async function getData(url) {
  return await fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.error(err);
    });
}

Episode.getInitialProps = async ({ query, res }) => {
  if (res) {
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  }

  const episode = await getData(`https://spec.fm/api/podcasts/1034/episodes/${query.id}`);
  return { id: query.id, episode }
}

export default Episode;
