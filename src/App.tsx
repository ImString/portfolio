import './App.css';
import { Bookcase } from './components/Bookcase';
import { Cat } from './components/Cat';
import { Coffe } from './components/Coffe';
import { Dog } from './components/Dog';
import { FooterCard } from './components/FooterCard';
import { HeroIntro } from './components/HeroIntro';
import { InfiniteCityBackground } from './components/InfiniteCity';
import { Keyboard } from './components/Keyboard';
import { Light } from './components/Light';
import { Monitor } from './components/Monitor';
import { PhoneClickInfo } from './components/PhoneClickInfo';
import { PlantLeft } from './components/PlantLeft';
import { PlantRight } from './components/PlantRight';
import { StandBack } from './components/StandBack';
import { StandTop } from './components/StandTop';
import { Table } from './components/Table';
import { TablePhone } from './components/TablePhone';
import { PhonePage } from './pages/Phone';
import { useEffect, useState } from 'react';

const ROOM_WIDTH = 1919;
const ROOM_HEIGHT = 1080;
const WIDE_VIEWPORT_ASPECT_RATIO = 1.9;
const PHONE_WIDTH = 616;
const PHONE_HEIGHT = 924;
const PHONE_BREAKPOINT = 600;

interface ViewportSize {
	width: number;
	height: number;
}

const getViewportSize = (): ViewportSize => ({
	width: window.visualViewport?.width ?? window.innerWidth,
	height: window.visualViewport?.height ?? window.innerHeight
});

function App() {
	const [phoneIsOpen, setPhoneIsOpen] = useState(false);
	const [viewport, setViewport] = useState(getViewportSize);

	useEffect(() => {
		const updateViewport = () => setViewport(getViewportSize());
		const visualViewport = window.visualViewport;

		window.addEventListener('resize', updateViewport);
		visualViewport?.addEventListener('resize', updateViewport);

		return () => {
			window.removeEventListener('resize', updateViewport);
			visualViewport?.removeEventListener('resize', updateViewport);
		};
	}, []);

	useEffect(() => {
		if (!phoneIsOpen) return;

		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setPhoneIsOpen(false);
		};

		window.addEventListener('keydown', closeOnEscape);
		return () => window.removeEventListener('keydown', closeOnEscape);
	}, [phoneIsOpen]);

	const isPhoneLayout = viewport.width <= PHONE_BREAKPOINT;

	if (isPhoneLayout) {
		const isLandscapePhone = viewport.width > viewport.height;
		const phoneScale = isLandscapePhone
			? Math.min(viewport.width / PHONE_WIDTH, viewport.height / PHONE_HEIGHT)
			: Math.max(viewport.width / PHONE_WIDTH, viewport.height / PHONE_HEIGHT);

		return (
			<main className="mobile-viewport" aria-label="Portfólio de projetos">
				<div
					className="mobile-phone-canvas"
					style={{ transform: `translate(-50%, -50%) scale(${phoneScale})` }}>
					<PhonePage mode="mobile" />
				</div>
			</main>
		);
	}

	const viewportAspectRatio = viewport.width / viewport.height;
	const shouldCropRoom = viewportAspectRatio < 1.15;
	const shouldCompactHero = viewportAspectRatio > WIDE_VIEWPORT_ASPECT_RATIO;
	const roomScale = Math.max(viewport.width / ROOM_WIDTH, viewport.height / ROOM_HEIGHT);

	return (
		<main className="scene-viewport" aria-label="Quarto pixel art interativo">
			<div
				className={`scene${shouldCropRoom ? ' scene--cropped' : ''}`}
				style={{ transform: `translate(-50%, -50%) scale(${roomScale})` }}>
				<div className="city-position">
					<InfiniteCityBackground />
				</div>

				<img src="/background.png" className="background" alt="" draggable={false} />

				{/* <img src="/wall-details.png" className="wall-details" alt="" draggable={false} /> */}
				<HeroIntro centered={shouldCropRoom} compact={shouldCompactHero} />

				<img src="/carpet.png" className="carpet" alt="" draggable={false} />
				<Table />

				<StandTop />
				<StandBack />

				<Coffe className="coffe" />
				<Monitor className="monitor" size={328} />

				<Keyboard />
				<TablePhone onClick={() => setPhoneIsOpen(true)} />

				<PhoneClickInfo />
				<Light />

				<PlantLeft />

				<Bookcase />
				<PlantRight />

				<Dog className="dog" size={714} />

				<Cat size={252} className="cat" />

				{phoneIsOpen && (
					<div
						className="phone-overlay"
						onMouseDown={event => {
							if (event.target === event.currentTarget) setPhoneIsOpen(false);
						}}>
						<PhonePage mode="scene" centered={shouldCropRoom} onClose={() => setPhoneIsOpen(false)} />
					</div>
				)}
			</div>

			{!phoneIsOpen && <FooterCard />}
		</main>
	);
}

export default App;
