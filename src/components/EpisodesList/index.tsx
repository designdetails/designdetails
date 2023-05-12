import React from 'react'
import Link from 'next/link'
import { PlayCircle } from '../Icons'
import Module from '../Module'
import LoadingSpinner from '../LoadingSpinner'
import theme from '../../config/theme'
import { Episode } from '../../types'

function EpisodesList({ episodes }: { episodes: Episode[] }) {
  if (!episodes || episodes.length === 0) {
    return (
      <Module tint={theme.brand.primary}>
        <Module.Title tint={theme.brand.primary}>
          <PlayCircle />
          Error loading episodes
        </Module.Title>
        <Module.Description
          style={{ marginBottom: 0 }}
          tint={theme.brand.primary}
        >
          We had trouble loading episodes. Try refreshing, or please come back
          later!
        </Module.Description>
      </Module>
    )
  }

  if (!episodes) {
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

  return (
    <>
      {episodes.map((episode, i) => {
        const date = new Date(episode.published_at).toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }
        )

        return (
          <Link
            key={episode.legacy_id || episode.token}
            href={`/episodes/[id]`}
            as={`/episodes/${episode.legacy_id || episode.token}`}
            data-cy="episode-list-item"
          >
            <Module tint={theme.brand.primary} isLink>
              <Module.Date tint={theme.brand.primary}>{date}</Module.Date>

              <Module.Title tint={theme.brand.primary}>
                <PlayCircle />
                {episode.title}
              </Module.Title>

              <Module.Description tint={theme.brand.primary}>
                {episode.description}
              </Module.Description>

              {i === 0 && (
                <iframe
                  frameBorder="0"
                  height="200px"
                  scrolling="no"
                  seamless
                  src={`https://player.simplecast.com/${episode.id}?dark=false`}
                  width="100%"
                  data-cy="latest-episode"
                  style={{ marginBottom: '16px' }}
                />
              )}

              <Module.Description
                style={{ marginBottom: 0 }}
                tint={theme.brand.primary}
              >
                <strong>{i === 0 ? 'Read show notes' : 'Listen'} &rarr;</strong>
              </Module.Description>
            </Module>
          </Link>
        )
      })}
    </>
  )
}

export default EpisodesList
