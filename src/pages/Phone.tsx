import { PhoneItemComponent } from '../components/phone/Item';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface PhonePageProps {
	mode?: 'scene' | 'mobile';
	centered?: boolean;
	onClose?: () => void;
}

const Container = styled.section<{ $mode: 'scene' | 'mobile'; $centered: boolean }>`
	position: absolute;
	top: ${({ $mode }) => ($mode === 'scene' ? '78px' : '0')};
	right: ${({ $mode, $centered }) => ($mode === 'mobile' ? '0' : $centered ? 'auto' : '44px')};
	left: ${({ $centered }) => ($centered ? '50%' : 'auto')};
	background-image: url('/phone-container.png');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	width: 616px;
	height: 924px;
	z-index: 1;
	transform: ${({ $centered }) => ($centered ? 'translateX(-50%)' : 'none')};
	filter: drop-shadow(0 34px 28px rgba(0, 0, 0, 0.72))
		drop-shadow(0 0 24px rgba(1, 235, 125, 0.18));
	animation: ${({ $mode }) => ($mode === 'scene' ? 'phone-enter 180ms ease-out both' : 'none')};

	@keyframes phone-enter {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
`;

const Hours = styled.time`
	position: absolute;
	top: 73px;
	left: 155px;
	margin: 0;
	color: #d4d4d7;
	font-family: 'MultiTypePixel', sans-serif;
	font-size: 15px;
	line-height: 1;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 68px;
	right: 142px;
	display: grid;
	place-items: center;
	width: 29px;
	height: 29px;
	margin: 0;
	padding: 0 0 3px;
	border: 2px solid rgba(75, 207, 101, 0.48);
	border-radius: 50%;
	background: rgba(8, 12, 31, 0.84);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.35);
	color: #d4d4d7;
	font-family: Arial, sans-serif;
	font-size: 20px;
	line-height: 1;
	cursor: pointer;

	&:hover {
		border-color: #01eb7d;
		color: #01eb7d;
	}

	&:focus-visible {
		outline: 2px solid #01eb7d;
		outline-offset: 3px;
	}
`;

const ProjectsTitle = styled.h1`
	position: absolute;
	top: 128px;
	left: 124px;
	width: 368px;
	margin: 0;
	color: #01eb7d;
	text-align: center;
	font-family: 'Pixter-Granular', sans-serif;
	font-size: 20px;
	line-height: 24px;
`;

const AppContainer = styled.div`
	position: absolute;
	top: 177px;
	right: 124px;
	bottom: 173px;
	left: 124px;

	display: grid;
	grid-template-columns: repeat(3, 112px);
	align-content: start;
	justify-content: space-between;
	row-gap: 40px;
	padding-top: 10px;
`;

const Footer = styled.div`
	position: absolute;
	bottom: 115px;
	left: 50%;
	transform: translateX(-50%);
	width: 343px;
	height: 85px;
	padding: 0 31px;
	background-color: #14172c;
	border-radius: 16px;
	border: 4px #080c1f solid;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const FooterItem = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	color: inherit;
	cursor: pointer;

	&:focus-visible {
		outline: 2px solid #01eb7d;
		outline-offset: 6px;
		border-radius: 5px;
	}
`;

const FooterItemIcon = styled.img`
	display: block;
`;

const FooterItemLabel = styled.p<{ $active?: boolean }>`
	margin: 10px 0 0;
	color: ${({ $active }) => ($active ? '#4bcf65' : '#626279')};
	font-family: 'Pixter-Granular', sans-serif;
	font-size: 11px;
	line-height: 1;
`;

export const PhonePage: React.FC<PhonePageProps> = ({ mode = 'scene', centered = false, onClose }) => {
	const [currentTime, setCurrentTime] = useState(() => new Date());

	useEffect(() => {
		const intervalId = window.setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => window.clearInterval(intervalId);
	}, []);

	const apps = [
		{
			name: 'WppSync',
			description: 'Integração',
			icon: 'wppsync',
			link: 'https://wppsync.imstring.dev'
		},
		{ name: 'DNA Puzzle', description: 'Jogo Puzzle', icon: 'dna-puzzle' },
		{
			name: 'Discord Shopper',
			description: 'E-commerce',
			icon: 'discord-shopper',
			link: 'https://github.com/ImString/discord-shopper-bot'
		},
		{
			name: 'Love Memory',
			description: 'Jogo Romântico',
			icon: 'love-memory-game'
		},
		{
			name: 'Group System',
			description: 'Gerenciamento',
			icon: 'group-system',
			link: 'https://github.com/ImString/mta-group-system'
		},
		{ name: 'Portfólio', description: 'Meu Portfólio', icon: 'portfolio' },
		{
			name: 'Tic Tac Toe',
			description: 'Jogo da Velha',
			icon: 'tic-tac-toe',
			link: 'https://github.com/ImString/tic-tac-toe-game'
		}
	];

	return (
		<Container
			$mode={mode}
			$centered={centered}
			role={mode === 'scene' ? 'dialog' : undefined}
			aria-modal={mode === 'scene' ? true : undefined}
			aria-labelledby="phone-projects-title">
			<Hours dateTime={currentTime.toISOString()}>
				{currentTime.toLocaleTimeString('pt-BR', {
					hour: '2-digit',
					minute: '2-digit'
				})}
			</Hours>
			{mode === 'scene' && (
				<CloseButton type="button" onClick={onClose} aria-label="Fechar telefone">
					×
				</CloseButton>
			)}
			<ProjectsTitle id="phone-projects-title">MEUS PROJETOS</ProjectsTitle>

			<AppContainer>
				{apps.map(app => (
					<PhoneItemComponent
						key={app.icon}
						name={app.name}
						description={app.description}
						link={app.link}
						icon={`/images/apps/${app.icon}.png`}
					/>
				))}
			</AppContainer>
			<Footer>
				<FooterItem type="button" aria-label="Início">
					<FooterItemIcon src="/images/icons/home.svg" alt="" />
					<FooterItemLabel $active>INICIO</FooterItemLabel>
				</FooterItem>
				<FooterItem type="button" aria-label="Código">
					<FooterItemIcon src="/images/icons/code.svg" alt="" />
					<FooterItemLabel>CODIGO</FooterItemLabel>
				</FooterItem>
				<FooterItem type="button" aria-label="Conquistas">
					<FooterItemIcon src="/images/icons/achievements.svg" alt="" />
					<FooterItemLabel>CONQUISTAS</FooterItemLabel>
				</FooterItem>
				<FooterItem type="button" aria-label="Perfil">
					<FooterItemIcon src="/images/icons/profile.svg" alt="" />
					<FooterItemLabel>PERFIL</FooterItemLabel>
				</FooterItem>
			</Footer>
		</Container>
	);
};
