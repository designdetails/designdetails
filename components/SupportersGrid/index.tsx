import { Grid, Supporter, AvatarContainer, Avatar } from './styles'
import supporters from '../../config/supporters'
import { StarCircle } from '../Icons'
import ConditionalWrap from 'conditional-wrap';
  
export default ({ state }) => {
  const selection = supporters.filter(supporter => supporter.state === state)
  if (!selection || selection.length === 0) return null
  
  return (
    
  <Grid>
      {selection.map(supporter => (
    <ConditionalWrap
    condition={!!supporter.twitterUsername}
    wrap={children => (
      <Supporter key={supporter.twitterUsername}>
        <AvatarContainer>
            <Avatar alt={`${supporter.name}'s profile photo`} src={supporter.image} />
            {supporter.dayOne && <StarCircle /> }
          </AvatarContainer>
          <a href={`https://twitter.com/${supporter.twitterUsername}`} target="_blank" rel="noopener norefferer">
          {supporter.name}
          </a>
        </Supporter>
    )}
    >
    <Supporter key={supporter.name}>
        <AvatarContainer>
            <Avatar alt={`${supporter.name}'s profile photo`} src={supporter.image} />
            {supporter.dayOne && <StarCircle /> }
          </AvatarContainer>
          {supporter.name}
        </Supporter>
  </ConditionalWrap>
  ))};
  </Grid>
  )
};


/*export default ({ state }) => {
  const selection = supporters.filter(supporter => supporter.state === state)
  if (!selection || selection.length === 0) return null
  
  return (
    
    <Grid>
      {selection.map(supporter => (
        <Supporter key={supporter.name}>
        <AvatarContainer>
            <Avatar alt={`${supporter.name}'s profile photo`} src={supporter.image} />
            {supporter.dayOne && <StarCircle /> }
          </AvatarContainer>
          {supporterTwitter}
        </Supporter>
      ))}
    </Grid>
  )
}*/