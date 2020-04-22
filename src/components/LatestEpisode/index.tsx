import React from 'react';
import useSWR from 'swr'
import Module from '../Module';
import { PlayCircle } from '../Icons';
import theme from '../../config/theme';
import LoadingSpinner from '../LoadingSpinner';

async function getData(url) {
  return await fetch(url)
    .then(res => res.json())
    .then(res => res.filter(ep => !!ep.published))
    .catch(err => {
      console.error(err);
    });
}

function LatestEpisode() {
  const { data, error } = useSWR(`https://spec.fm/api/podcasts/1034/episodes`, getData, { revalidateOnFocus: false })

  if (error) return null

  if (!data) {
    return (
      <Module tint={theme.brand.primary} col={'1 / span 6'}>
        <Module.Title tint={theme.brand.primary}>
          <PlayCircle />
          Latest Episode
        </Module.Title>
        <LoadingSpinner style={{ padding: '85px 0' }} />
      </Module>
    );
  }

  const { sharing_url } = data[0];
  const [, id] = sharing_url.split('s/');

  if (!id) return null;

  return (
    <Module tint={theme.brand.primary} col={'1 / span 6'}>
      <Module.Title tint={theme.brand.primary}>
        <PlayCircle />
        Latest Episode
      </Module.Title>
      <iframe
        frameBorder="0"
        height="200px"
        scrolling="no"
        seamless
        src={`https://embed.simplecast.com/${id}?color=f5f5f5`}
        width="100%"
        data-cy="latest-episode"
      />
    </Module>
  );
}

export default LatestEpisode;
