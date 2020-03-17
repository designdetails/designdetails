import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { PlayCircle } from '../Icons';
import Module from '../Module';
import LoadingSpinner from '../LoadingSpinner';
import theme from '../../config/theme';
import { getEpisodes } from '../../data';

function EpisodesList({ episodes }) {
  const { data, error } = useSWR('episodes', getEpisodes, { initialData: episodes, revalidateOnFocus: false})

  if (error) {
    return (
      <Module tint={theme.brand.primary}>
        <Module.Title tint={theme.brand.primary}>
          <PlayCircle />
          Error loading episodes
        </Module.Title>
        <Module.Description style={{ marginBottom: 0 }} tint={theme.brand.primary}>
          We had trouble loading episodes. Try refreshing, or please come back later!
        </Module.Description>
      </Module>
    )
  }

  if (!data) {
    return (
      <Module tint={theme.brand.primary}>
        <Module.Title tint={theme.brand.primary}>
          <PlayCircle />
          Loading episodes...
        </Module.Title>
        <LoadingSpinner style={{ padding: '85px 0' }} />
      </Module>
    )
  }

  return data.map(episode => (
    <Link key={episode.id} href={`/episodes/[id]`} as={`/episodes/${episode.id}`}>
      <a>
        <Module tint={theme.brand.primary} isLink>
          <Module.Title tint={theme.brand.primary}>
            <PlayCircle />
            {episode.title}
          </Module.Title>

          <Module.Description tint={theme.brand.primary}>
            {episode.description}
          </Module.Description>

          <Module.Description style={{ marginBottom: 0 }} tint={theme.brand.primary}>
            <strong>Listen &rarr;</strong>
          </Module.Description>
        </Module>
      </a>
    </Link>
  ))
}

export default EpisodesList;
