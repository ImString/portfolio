import styled from 'styled-components';

interface PhoneItemProps {
	name: string;
	description?: string;
	icon: string;
	link?: string;
	onClick?: () => void;
}

const Item = styled.button`
	width: 112px;
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	color: inherit;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	align-items: center;

	&:focus-visible {
		outline: 2px solid #01eb7d;
		outline-offset: 5px;
		border-radius: 8px;
	}
`;

const Icon = styled.img`
	display: block;
	width: 100px;
	height: 97px;
	object-fit: contain;
	image-rendering: pixelated;
`;

const Name = styled.h2`
	max-width: 112px;
	margin: 10px 0 0;
	overflow: hidden;
	color: #d4d4d7;
	font-family: 'MultiTypePixel-Regular', sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 18px;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

const Description = styled.p`
	max-width: 112px;
	margin: 4px 0 0;
	overflow: hidden;
	color: #858598;
	font-family: 'Pixter-Granular', sans-serif;
	font-size: 11px;
	line-height: 14px;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const PhoneItemComponent: React.FC<PhoneItemProps> = props => {
	return (
		<Item
			type="button"
			onClick={() => {
				if (props.link) window.open(props.link);
				props.onClick?.();
			}}
			aria-label={props.name}>
			<Icon src={props.icon} alt="" draggable={false} />
			<Name>{props.name}</Name>
			{props.description && <Description>{props.description}</Description>}
		</Item>
	);
};
