import { NextPage } from 'next'
import PageWrapper from '../components/PageWrapper'
import Module from '../components/Module'
import Subscribe from '../components/Subscribe'
import Welcome from '../components/Welcome'
import SupportersGrid from '../components/SupportersGrid'
import { StarCircle, PlusCircle, HeartCircle, QuestionCircle, Twitter } from '../components/Icons'
import { PatreonButton, GitHubButton, TwitterButton } from '../components/Button'
import theme from '../config/theme'

const Home: NextPage = () => (
  <PageWrapper>
    <Module col={'1 / span 2'}>
      <Module.Title>
        <PlusCircle />
        Subscribe
      </Module.Title>
      <Subscribe />
    </Module>

    <Module tint={theme.brand.primary} col={'3 / span 4'}>
      <Module.Title tint={theme.brand.primary}>
        <StarCircle />
        Where to begin?
      </Module.Title>
      <Module.Description tint={theme.brand.primary}>
        If you're new to the show, you've got a lot to catch up on. In the last five years we've recorded more than 300 episodes. Here are a few of our favorites that will help make your start a little easier!
      </Module.Description>
      <Welcome />
    </Module>

    <Module tint={theme.social.patreon} col={'1 / span 6'}>
      <Module.Title tint={theme.social.patreon}>
        <HeartCircle />
        Listener supported
      </Module.Title>
      <Module.Description tint={theme.social.patreon}>
        This show is possible because of the generosity of our listeners. If you've found our podcast useful or entertaining, please consider supporting us directly by becoming a patron.
      </Module.Description>
      <PatreonButton>
        Support us on Patreon
      </PatreonButton>
      <SupportersGrid state={'active'} />
      <SupportersGrid state={'former'} />
    </Module>

    <Module col={'1 / span 3'}>
      <Module.Title>
        <QuestionCircle />
        Ask a question
      </Module.Title>
      <Module.Description>
        Got something on your mind? We'd love to help. Head over to our repo and create an issue, and we'll reply back when we discuss it. If you'd prefer to ask anonymously, you can email us or send us a message on Twitter.
      </Module.Description>
      <GitHubButton>Ask us a question</GitHubButton>
    </Module>

    <Module tint={theme.social.twitter} col={'4 / span 3'}>
      <Module.Title tint={theme.social.twitter}>
        <Twitter />
        Follow along
      </Module.Title>
      <Module.Description tint={theme.social.twitter}>
        We'll be tweeting new episodes, polls, questions, and show updates. Follow us and say hi!
      </Module.Description>
      <div style={{ marginTop: '32px' }}>
        <TwitterButton>@designdetailsfm</TwitterButton>
      </div>
    </Module>
  </PageWrapper>
)

export default Home