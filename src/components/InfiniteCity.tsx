import type { ReactNode } from 'react';

interface InfiniteCityBackgroundProps {
	imageSrc?: string;
	duration?: number;
	className?: string;
	children?: ReactNode;
}

const WIDTH = 1584;
const HEIGHT = 528;

export const InfiniteCityBackground: React.FC<InfiniteCityBackgroundProps> = props => {
	return (
		<div
			className={props.className}
			style={{
				position: 'relative',
				width: WIDTH,
				height: HEIGHT,
				maxWidth: '100%',
				overflow: 'hidden',
				backgroundColor: '#05072e'
			}}>
			<div
				aria-hidden="true"
				style={{
					position: 'absolute',
					inset: 0,
					display: 'flex',
					width: WIDTH * 2,
					height: HEIGHT,
					animation: `city-scroll ${props.duration || 30}s linear infinite`,
					willChange: 'transform'
				}}>
				{[0, 1].map(copy => (
					<img
						key={copy}
						src={props.imageSrc || '/city-background.png'}
						alt=""
						draggable={false}
						width={WIDTH}
						height={HEIGHT}
						style={{
							display: 'block',
							flex: `0 0 ${WIDTH}px`,
							width: WIDTH,
							height: HEIGHT,
							objectFit: 'cover',
							imageRendering: 'pixelated',
							userSelect: 'none',
							pointerEvents: 'none'
						}}
					/>
				))}
			</div>

			{props.children && (
				<div
					style={{
						position: 'relative',
						zIndex: 1,
						width: '100%',
						height: '100%'
					}}>
					{props.children}
				</div>
			)}

			<style>{`
        @keyframes city-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-${WIDTH}px, 0, 0);
          }
        }
      `}</style>
		</div>
	);
};
