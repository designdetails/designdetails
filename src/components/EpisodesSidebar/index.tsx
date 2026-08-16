import React from 'react'
import styled from 'styled-components'
import Module from '../../components/Module'
import Subscribe from '../../components/Subscribe'
import {
  PlusCircle,
  QuestionCircle,
  TwitterCircle,
} from '../../components/Icons'
import { GitHubButton, TwitterButton } from '../../components/Button'
import theme from '../../config/theme'

const Sidebar = styled.div`
  grid-area: sidebar;
  display: grid;
  grid-gap: 24px;
  grid-auto-rows: min-content;
`

const EpisodesSidebar = () => (
  <Sidebar>
    <Module>
      <Module.Title>
        <PlusCircle />
        Subscribe
      </Module.Title>
      <Subscribe />
    </Module>

    <Module data-cy="question-button">
      <Module.Title>
        <QuestionCircle />
        Have a question?
      </Module.Title>
      <Module.Description>
        We’d love to help. Head over to our repo and create an issue, and we’ll
        reply back when we discuss it on the show. DM us if you’d like to ask a
        question anonymously.
      </Module.Description>
      <GitHubButton>Ask us a question</GitHubButton>
    </Module>

    <Module data-cy="follow-button" tint={theme.social.twitter}>
      <Module.Title tint={theme.social.twitter}>
        <TwitterCircle />
        Follow along
      </Module.Title>
      <Module.Description tint={theme.social.twitter}>
        We’ll be tweeting new episodes, polls, questions, and show updates.
        Follow us and say hi!
      </Module.Description>
      <a
        style={{ display: 'flex', alignItems: 'flex-end' }}
        href="https://twitter.com/designdetailsfm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterButton>@designdetailsfm</TwitterButton>
      </a>
    </Module>
  </Sidebar>
)

export default EpisodesSidebar
