import React from 'react'
import ConditionalWrap from 'conditional-wrap';
import supporters, { golden } from '../../config/supporters'
import { StarCircle } from '../Icons'
import { 
  Grid, 
  Supporter, 
  AvatarContainer, 
  Avatar, 
  Name, 
  Username, 
  Meta,
  Microphone,
  MicAvatar,
  MicName,
  MicTagline,
} from './styles'
  
export default ({ state }) => {
  const selection = supporters.filter(supporter => supporter.state === state)
  if (!selection || selection.length === 0) return null
  
  return (
    <React.Fragment>
      <Grid>
        {golden.map(microphone => (
          <Microphone href={microphone.url} target="_blank" rel="noopener noreferrer" key={microphone.name}>
            <MicAvatar src={microphone.imageUrl} />
            <MicName>{microphone.name}</MicName>
            <MicTagline>{microphone.tagline}</MicTagline>
          </Microphone>
        ))}
      </Grid>
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
                  {supporter.dayOne ? <StarCircle /> : <div style={{width:'20px'}} /> }
                </AvatarContainer>
                <Meta>
                  <Name>{supporter.name}</Name>
                  {supporter.twitterUsername && <Username>@{supporter.twitterUsername}</Username>}
                </Meta>
            </ConditionalWrap>
          </Supporter>
        ))}
      </Grid>
    </React.Fragment>
  )
};