import { PhoneItemComponent } from '../components/phone/Item';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	background-image: url('/phone-container.png');
	width: 616px;
	height: 924px;
	right: 0px;
	z-index: 2;
`;

const Hours = styled.h1`
	position: absolute;
	top: 73px;
	left: 155px;
	margin: 0;
	color: #d4d4d7;
	font-family: 'MultiTypePixel', sans-serif;
	font-size: 15px;
	line-height: 1;
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

const FooterItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
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

export const PhonePage: React.FC = () => {
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
		<Container>
			<Hours>
				{currentTime.toLocaleTimeString('pt-BR', {
					hour: '2-digit',
					minute: '2-digit'
				})}
			</Hours>
			<ProjectsTitle>MEUS PROJETOS</ProjectsTitle>

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
				<FooterItem>
					<FooterItemIcon src="/images/icons/home.svg" />
					<FooterItemLabel $active>INICIO</FooterItemLabel>
				</FooterItem>
				<FooterItem>
					<FooterItemIcon src="/images/icons/code.svg" />
					<FooterItemLabel>CODIGO</FooterItemLabel>
				</FooterItem>
				<FooterItem>
					<FooterItemIcon src="/images/icons/achievements.svg" />
					<FooterItemLabel>CONQUISTAS</FooterItemLabel>
				</FooterItem>
				<FooterItem>
					<FooterItemIcon src="/images/icons/profile.svg" />
					<FooterItemLabel>PERFIL</FooterItemLabel>
				</FooterItem>
			</Footer>
		</Container>
	);
};
