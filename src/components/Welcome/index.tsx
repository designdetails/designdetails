import { Grid } from './styles'
import { Chevron } from '../Icons'
import Link from 'next/link'

const startingEpisodes = [
  {
    id: 220880,
    title: '271: Principles of Design',
  },
  {
    id: 161416,
    title: '253: Follow The Troll Flow (feat. May-Li Khoe & Chikezie Ejiasi)',
  },
  {
    id: 113490,
    title: '235: Incremental Correctness (feat. Guillermo Rauch)',
  },
  {
    id: 306429,
    title: '309: Career Progression for Product Designers',
  },
  {
    id: 298638,
    title: '297: Day-to-Day Design Struggles',
  },
  {
    id: 292309,
    title: '292: Building Design Systems (feat. Linzi Berry)',
  },
  {
    id: 308804,
    title:
      '314: Beauty, Vulnerability, and Doing Things That Matter (feat. Haraldur Thorleifsson)',
  },
]

export default () => (
  <Grid>
    {startingEpisodes.map((ep) => (
      <Link key={ep.id} href={`/episodes/[id]`} as={`/episodes/${ep.id}`}>
        <Chevron />
        {ep.title}
      </Link>
    ))}
  </Grid>
)
