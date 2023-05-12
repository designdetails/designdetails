import React from 'react'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import theme from '../../config/theme'
import Module from '../Module'
import Markdown from '../Markdown'
import { Episode } from '../../types'

const ModuleCustom = styled(Module)`
  @media (max-width: 768px) {
    background: none;
    padding: 0;
  }
`

export default function EpisodeContent({ episode }: { episode: Episode }) {
  if (!episode) {
    return (
      <Module tint={theme.brand.primary}>
        <Module.Title tint={theme.brand.primary}>
          Error loading episode
        </Module.Title>
      </Module>
    )
  }

  const date = new Date(episode.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <React.Fragment>
      <NextSeo
        title={episode.title}
        description={episode.description}
        openGraph={{
          url: `https://designdetails.fm/episodes/${episode.id}`,
          title: episode.title,
          description: episode.description,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <ModuleCustom tint={theme.brand.primary}>
        <iframe
          frameBorder="0"
          height="200px"
          scrolling="no"
          seamless
          src={`https://player.simplecast.com/${episode.id}?dark=false`}
          width="100%"
          data-cy="latest-episode"
          style={{ margin: '0 0 32px' }}
        />

        <Module.LargeTitle>{episode.title}</Module.LargeTitle>

        <Module.Date tint={theme.brand.primary}>{date}</Module.Date>

        <Markdown>{episode.long_description}</Markdown>
      </ModuleCustom>
    </React.Fragment>
  )
}
