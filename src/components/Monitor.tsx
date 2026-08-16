import { SpriteAnimation } from './SpriteAnimation';
import styled from 'styled-components';

interface MonitorProps {
	size?: number;
	fps?: number;
	className?: string;
	spriteSheet?: string;
}

const FRAME_SIZE = 250;

const BackShadow = styled.div`
	position: absolute;
	left: 567px;
	top: 330px;
	width: 508px;
	height: 303px;
	background: black;
	filter: blur(110px);
	z-index: 2;
`;

const BottomShadow = styled.div`
	position: absolute;
	left: 644px;
	top: 620px;
	width: 314px;
	height: 32px;
	background: black;
	border-radius: 9999px;
	filter: blur(20.1px);
	z-index: 2;
`;

export const Monitor: React.FC<MonitorProps> = props => {
	return (
		<>
			<BackShadow />
			<BottomShadow />
			<SpriteAnimation
				frameSize={FRAME_SIZE}
				displaySize={props.size || FRAME_SIZE}
				src={props.spriteSheet || '/monitor-spritesheet.png'}
				fps={props.fps || 8}
				className={props.className}
				ariaLabel="Monitor animado"
			/>
		</>
	);
};
