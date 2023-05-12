import { TwitterButton } from '../Button'
import team from '../../config/team'
import { Grid, Person, Avatar, Name, Role } from './styles'

export default () => (
  <Grid>
    {team.map((person) => (
      <Person data-cy={`team-${person.name}`} key={person.twitterUsername}>
        <Avatar alt={`${person.name}'s avatar`} src={person.profilePhotoUrl} />
        <Name>{person.name}</Name>
        <Role>{person.role}</Role>
        <a
          href={`https://twitter.com/${person.twitterUsername}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterButton>{`@${person.twitterUsername}`}</TwitterButton>
        </a>
      </Person>
    ))}
  </Grid>
)
