import App from './App.tsx';
import './index.css';
import { preloadPortfolio } from './preload.ts';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root')!;
const loadingScreen = document.getElementById('loading-screen');
const loadingProgress = document.getElementById('loading-progress');
const loadingProgressText = document.getElementById('loading-progress-text');

const updateLoadingProgress = (progress: number) => {
	if (loadingProgress) loadingProgress.style.width = `${progress}%`;
	if (loadingProgressText) loadingProgressText.textContent = `${progress}%`;
};

const startPortfolio = async () => {
	await preloadPortfolio(updateLoadingProgress);
	updateLoadingProgress(100);

	createRoot(rootElement).render(
		<StrictMode>
			<App />
		</StrictMode>
	);

	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			loadingScreen?.classList.add('loading-screen--hidden');
			window.setTimeout(() => loadingScreen?.remove(), 360);
		});
	});
};

void startPortfolio();
