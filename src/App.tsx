import './App.css';
import { Bookcase } from './components/Bookcase';
import { Cat } from './components/Cat';
import { Coffe } from './components/Coffe';
import { Dog } from './components/Dog';
import { InfiniteCityBackground } from './components/InfiniteCity';
import { Keyboard } from './components/Keyboard';
import { Light } from './components/Light';
import { Monitor } from './components/Monitor';
import { PlantLeft } from './components/PlantLeft';
import { PlantRight } from './components/PlantRight';
import { StandBack } from './components/StandBack';
import { StandTop } from './components/StandTop';
import { Table } from './components/Table';
import { TablePhone } from './components/TablePhone';
import { PhonePage } from './pages/Phone';
import { useState } from 'react';

function App() {
	const [phoneIsOpen, setPhoneIsOpen] = useState(false);

	return (
		<main className="scene">
			<div className="city-position">
				<InfiniteCityBackground />
			</div>

			<img src="/background.png" className="background" alt="" draggable={false} />

			<img src="/wall-details.png" className="wall-details" alt="" draggable={false} />

			<img src="/carpet.png" className="carpet" alt="" draggable={false} />
			<Table />

			<StandTop />
			<StandBack />

			<Coffe className="coffe" />
			<Monitor className="monitor" size={328} />

			<Keyboard />
			<TablePhone
				onClick={() => {
					setPhoneIsOpen(isOpen => !isOpen);
				}}
			/>

			<Light />

			<PlantLeft />

			<Bookcase />
			<PlantRight />

			<Dog className="dog" size={714} />

			<Cat size={252} className="cat" />

			{phoneIsOpen && <PhonePage />}
		</main>
	);
}

export default App;
