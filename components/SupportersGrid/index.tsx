import { Grid, Supporter, AvatarContainer, Avatar, Name, Username, Meta } from './styles'
import supporters from '../../config/supporters'
import { StarCircle } from '../Icons'
import ConditionalWrap from 'conditional-wrap';
  
export default ({ state }) => {
  const selection = supporters.filter(supporter => supporter.state === state)
  if (!selection || selection.length === 0) return null
  
  return (
    
  <Grid>
      {selection.map(supporter => (
        <Supporter key={supporter.name}>
          <ConditionalWrap
            condition={!!supporter.twitterUsername}
            wrap={children => (
              <a href={`https://twitter.com/${supporter.twitterUsername}`} target="_blank" rel="noopener norefferer">
                {children}
              </a>
            )}
          >
            <AvatarContainer>
              <Avatar alt={`${supporter.name}'s profile photo`} src={supporter.image} />
              {supporter.dayOne && <StarCircle /> }
            </AvatarContainer>
            <Meta>
              <Name>{supporter.name}</Name>
              {supporter.twitterUsername && <Username>@{supporter.twitterUsername}</Username>}
            </Meta>
        </ConditionalWrap>
      </Supporter>
    ))}
  </Grid>
  )
};