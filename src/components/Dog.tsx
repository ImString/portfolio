import { SpriteAnimation } from './SpriteAnimation';
import styled from 'styled-components';

interface DogProps {
	size?: number;
	fps?: number;
	className?: string;
	spriteSheet?: string;
}

const FRAME_SIZE = 256;

const Shadow = styled.div`
	position: absolute;
	left: -166px;
	bottom: 30px;
	width: 616px;
	height: 282px;
	border-radius: 9999px;
	background: black;
	filter: blur(32px);
	z-index: 1;
`;

export const Dog: React.FC<DogProps> = props => {
	return (
		<>
			<Shadow />
			<SpriteAnimation
				frameSize={FRAME_SIZE}
				frameCount={24}
				src={props.spriteSheet || '/dog-spritesheet.png'}
				displaySize={props.size || FRAME_SIZE}
				className={props.className}
				fps={props.fps || 8}
				ariaLabel="Cachorro animado"
			/>
		</>
	);
};
