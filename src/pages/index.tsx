import { NextPage } from 'next';
import PageWrapper from '../components/PageWrapper';
import Module from '../components/Module';
import Subscribe from '../components/Subscribe';
import Welcome from '../components/Welcome';
import SupportersGrid, { GoldenMicrophones } from '../components/SupportersGrid';
import Team from '../components/Team';
import LatestEpisode from '../components/LatestEpisode';
import {
  PlusCircle,
  HeartCircle,
  QuestionCircle,
  TwitterCircle,
  InfoCircle,
  SearchCircle
} from '../components/Icons';
import {
  PatreonButton,
  GitHubButton,
  TwitterButton
} from '../components/Button';
import theme from '../config/theme';

const Home: NextPage = () => (
  <PageWrapper>
    <LatestEpisode />

    <Module col={'1 / span 2'}>
      <Module.Title>
        <PlusCircle />
        Subscribe
      </Module.Title>
      <Subscribe />
    </Module>

    <Module
      data-cy="suggested-episodes"
      tint={theme.brand.primary}
      col={'3 / span 4'}
    >
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

    <Module tint={theme.social.patreon} col={'1 / span 6'}>
      <Module.Title tint={theme.social.patreon}>
        <HeartCircle />
        Listener supported
      </Module.Title>
      <Module.Description tint={theme.social.patreon}>
        This show is possible because of the generosity of our listeners. If
        you’ve found our podcast useful or entertaining, please consider
        supporting us directly by becoming a patron.
      </Module.Description>
      <PatreonButton>Support us on Patreon</PatreonButton>
      <GoldenMicrophones />
      <SupportersGrid state={'active'} />

      {/* <Module.Title style={{ paddingTop: '58px', marginBottom: 0 }}  tint={theme.social.patreon}>Previous supporters</Module.Title>
      <SupportersGrid state={'former'} /> */}
    </Module>

    <Module data-cy="question-button" col={'1 / span 3'}>
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

    <Module
      data-cy="follow-button"
      tint={theme.social.twitter}
      col={'4 / span 3'}
    >
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

    <Module data-cy="team" col={'1 / span 6'}>
      <Module.Title>
        <InfoCircle />
        Our team
      </Module.Title>
      <Module.Description>
        It takes a four-person village to pull this show together. These are the
        people in that village. Except, we’re distributed around the US and
        mostly just text each other. If you want to see what we’re up to, follow
        us on Twitter.
      </Module.Description>

      <Team />
    </Module>
  </PageWrapper>
);

export default Home;
