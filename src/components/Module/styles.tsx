import styled, { css } from 'styled-components';
import theme from '../../config/theme';
import { hexa, tint } from '../utils';

export const Container = styled.div`
	background: ${(props) => (props.tint ? hexa(props.tint, 0.08) : theme.ui.borderLight)};
	border-radius: 12px;
	padding: 24px;
	display: grid;
	grid-column: ${(props) => props.col};
	align-content: flex-start;

	@media (max-width: 768px) {
		grid-column: span 1;
	}

	${(props) =>
		props.isLink &&
		css`
    &:hover {
      background: ${(props) => (props.tint ? hexa(props.tint, 0.2) : theme.ui.borderLight)};
      }
    }
  `}
`;

export const Title = styled.h3`
	font-size: 20px;
	font-weight: 800;
	color: ${(props) => (props.tint ? tint(props.tint, -20) : theme.text.primary)};
	margin: 0;
	margin-bottom: 8px;
	display: grid;
	grid-gap: 8px;
	grid-template-columns: 24px 1fr;
	align-items: flex-start;

	svg {
		margin-right: 8px;
		fill: currentColor;
		position: relative;
		top: 4px;
	}
`;

export const LargeTitle = styled(Title)`
	font-size: 32px;
	line-height: 1.2;
	grid-template-columns: 1fr;
`;

export const Description = styled.p`
	font-size: 16px;
	font-weight: 500;
	max-width: 768px;
	color: ${(props) => (props.tint ? tint(props.tint, -30) : theme.text.secondary)};
	margin: 0;
	margin-bottom: 16px;
	line-height: 1.4;
	word-break: break-word;
`;

export const Date = styled.p`
	font-size: 14px;
	font-family: monospace, sans-serif;
	font-weight: 500;
	max-width: 768px;
	opacity: 0.7;
	color: ${(props) => (props.tint ? tint(props.tint, -30) : theme.text.secondary)};
	margin: 0;
	margin-bottom: 12px;
	line-height: 1.4;
	word-break: break-word;
`;
