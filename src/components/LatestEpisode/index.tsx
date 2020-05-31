import React from 'react';
import Module from '../Module';
import { PlayCircle } from '../Icons';
import theme from '../../config/theme';
import LoadingSpinner from '../LoadingSpinner';

function LatestEpisode({ episode }) {
  if (!episode) {
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
        src={`https://player.simplecast.com/${episode.id}?dark=false`}
        width="100%"
        data-cy="latest-episode"
      />
    </Module>
  );
}

export default LatestEpisode;
