import React from 'react';
import ConditionalWrap from 'conditional-wrap';
import supporters, { golden } from '../../config/supporters';
import { StarCircle } from '../Icons';
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
  MicTagline
} from './styles';

interface Props {
  state: 'active' | 'former';
}

export const GoldenMicrophones = () => (
  <Grid>
    {golden.map(microphone => (
      <Microphone
        data-cy={`golden-${microphone.name}`}
        href={microphone.url}
        target="_blank"
        rel="noopener noreferrer"
        key={microphone.name}
      >
        <MicAvatar src={microphone.imageUrl} />
        <MicName>{microphone.name}</MicName>
        <MicTagline>{microphone.tagline}</MicTagline>
      </Microphone>
    ))}
  </Grid>
)

export default ({ state }: Props) => {
  const selection = supporters.filter(supporter => supporter.state === state);
  if (!selection || selection.length === 0) return null;

  return (
    <Grid style={{ marginTop: '12px'}}>
      {selection.map(supporter => (
        <Supporter
          data-cy={`supporter-${supporter.name}`}
          key={supporter.name}
        >
          <ConditionalWrap
            condition={!!supporter.twitterUsername}
            wrap={children => (
              <a
                href={`https://twitter.com/${supporter.twitterUsername}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            )}
          >
            <AvatarContainer>
              <Avatar
                alt={`${supporter.name}'s profile photo`}
                src={supporter.image}
                inactive={supporter.state !== 'active'}
              />
              {supporter.dayOne ? (
                <StarCircle />
              ) : (
                <div style={{ width: '20px' }} />
              )}
            </AvatarContainer>
            <Meta>
              <Name>{supporter.name}</Name>
              {supporter.twitterUsername && (
                <Username>@{supporter.twitterUsername}</Username>
              )}
            </Meta>
          </ConditionalWrap>
        </Supporter>
      ))}
    </Grid>
  );
};
