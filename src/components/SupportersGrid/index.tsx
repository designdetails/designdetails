import React from 'react';
import { golden } from '../../config/supporters';
import { GoldenGrid, Microphone, MicAvatar, MicName, MicTagline } from './styles';

export const GoldenMicrophones = () => (
	<GoldenGrid>
		{golden.map((microphone) => (
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
	</GoldenGrid>
);
