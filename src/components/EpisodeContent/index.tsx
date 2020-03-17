import React from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import { NextSeo } from 'next-seo'
import { PlayCircle } from '../Icons';
import theme from '../../config/theme'
import Module from '../Module';
import LoadingSpinner from '../LoadingSpinner';
import Markdown from '../Markdown'
import { getEpisode } from '../../data';

const ModuleCustom = styled(Module)`
  @media (max-width: 768px) {
    background: none;
    padding: 0;
  }
`

export default function EpisodeContent({ episode }) {
  const { data, error } = useSWR(episode.id, getEpisode, { initialData: episode, revalidateOnFocus: false })

  if (error) {
    return (
      <Module tint={theme.brand.primary}>
        <Module.Title tint={theme.brand.primary}>
          Error loading episode
        </Module.Title>
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

  const { sharing_url } = data;
  const [, shareId] = sharing_url.split('s/');

  return (
    <React.Fragment>
      <NextSeo
        title={data.title}
        description={data.description}
        openGraph={{
          url: `https://designdetails.fm/episodes/${episode.id}`,
          title: data.title,
          description: data.description,
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
          src={`https://embed.simplecast.com/${shareId}?color=f5f5f5`}
          width="100%"
          data-cy="latest-episode"
          style={{ margin: "0 0 32px"}}
        />

        <Module.LargeTitle>
          {data.title}
        </Module.LargeTitle>
        
        <Markdown>{data.long_description}</Markdown>
      </ModuleCustom>
    </React.Fragment>
  )
}