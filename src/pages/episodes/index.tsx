import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import PageWrapper from '../../components/PageWrapper';
import Module from '../../components/Module';
import EpisodesList from '../../components/EpisodesList'
import Welcome from '../../components/Welcome';
import { SearchCircle } from '../../components/Icons';
import theme from '../../config/theme';
import { EpisodesPageGrid } from '../../components/PageWrapper/styles';
import EpisodesSidebar from '../../components/EpisodesSidebar';

const Content = styled.div`
  grid-area: content;
  display: grid;
  grid-gap: 24px;
  grid-auto-rows: min-content;
`

const Episodes = ({ episodes }) => (
  <PageWrapper>
    <NextSeo
      title={"App Dissection"}
      description={"A visual exploration of digital products"}
      openGraph={{
        title: 'Design Details',
        description: 'A weekly conversation about design process and culture',
        type: 'website',
        locale: 'en_US',
        url: 'https://designdetails.fm',
        site_name: 'Design Details',
        images: [
          {
            url: 'https://designdetails.fm/static/img/dd-wide.png',
            width: 1600,
            height: 400,
            alt: 'Design Details'
          }
        ]
      }}
    />

    <EpisodesPageGrid>
      <EpisodesSidebar />

      <Content>
        <Module tint={theme.brand.primary}>
          <Module.Title tint={theme.brand.primary}>
            <SearchCircle />
            Where to begin?
          </Module.Title>
          <Module.Description tint={theme.brand.primary}>
            In the last five years we’ve recorded more than 300 episodes. Here are a
            few of our favorites that will help make your start a little easier!
          </Module.Description>
          <Welcome />
        </Module>

        <EpisodesList episodes={episodes} />
      </Content>
    </EpisodesPageGrid>
  </PageWrapper>
);

async function getData(url) {
  return await fetch(url)
    .then(res => res.json())
    .then(res => res.filter(ep => !!ep.published))
    .catch(err => {
      console.error(err);
    });
}

Episodes.getInitialProps = async ({ res }) => {
  if (res) {
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  }

  const episodes = await getData(`https://spec.fm/api/podcasts/1034/episodes`);
  return { episodes }
}

export default Episodes;
