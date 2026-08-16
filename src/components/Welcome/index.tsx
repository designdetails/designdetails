import { Grid } from './styles'
import { Chevron } from '../Icons'
import Link from 'next/link'
import { startingEpisodes } from '../../config/starting-episodes'

export default () => (
  <Grid>
    {startingEpisodes.map((ep) => (
      <Link key={ep.token} href={`/episodes/[id]`} as={`/episodes/${ep.token}`}>
        <Chevron />
        {ep.title}
      </Link>
    ))}
  </Grid>
)
