import { TwitterButton } from "../Button";
import team from '../../config/team'
import { Grid, Person ,CoverPhoto, Avatar, Name, Role, } from './styles'

export default () => (
  <Grid>
    {team.map(person => (
      <Person key={person.twitterUsername}>
        <CoverPhoto alt={`${person.name}'s cover photo`} src={person.coverPhotoUrl} />
        <Avatar alt={`${person.name}'s avatar`} src={person.profilePhotoUrl} />
        <Name>{person.name}</Name>
        <Role>{person.role}</Role>
        <a href={`https://twitter.com/${person.twitterUsername}`} target="_blank" rel="noopener norefferer">
          <TwitterButton>@{person.twitterUsername}</TwitterButton>
        </a>
      </Person>
    ))}
  </Grid>
)