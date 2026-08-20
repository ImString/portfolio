const PHONE_ASSETS = [
	'/phone-container.png',
	'/phone-footer-bar.svg',
	'/images/apps/wppsync.png',
	'/images/apps/dna-puzzle.png',
	'/images/apps/discord-shopper.png',
	'/images/apps/love-memory-game.png',
	'/images/apps/portfolio.png',
	'/images/apps/group-system.png',
	'/images/apps/tic-tac-toe.png',
	'/images/icons/home.svg',
	'/images/icons/code.svg',
	'/images/icons/achievements.svg',
	'/images/icons/profile.svg'
];

const ROOM_ASSETS = [
	'/background.png',
	'/city-background.png',
	'/carpet.png',
	'/table.png',
	'/stand-top.png',
	'/stand-back.png',
	'/coffe-spritesheet.png',
	'/monitor-spritesheet.png',
	'/keyboard.png',
	'/phone.png',
	'/images/phone-click-info.png',
	'/light-object.png',
	'/plant-left.png',
	'/bookcase.png',
	'/plant-right.png',
	'/dog-spritesheet.png',
	'/cat-spritesheet.png',
	'/card-footer.png',
	'/heart-icon.svg',
	'/ball-icon.svg'
];

const FONT_FAMILIES = ['MultiTypePixel', 'MultiTypePixel-Regular', 'Pixter-Granular'];
const PHONE_BREAKPOINT = 600;
const MAX_BOOT_WAIT = 20_000;

const pause = (duration: number) => new Promise<void>(resolve => window.setTimeout(resolve, duration));

const loadImage = (src: string, attemptsLeft = 2): Promise<void> =>
	new Promise((resolve, reject) => {
		const image = new Image();

		image.onload = async () => {
			try {
				await image.decode();
			} catch {
				// A imagem já terminou de carregar. Alguns navegadores não oferecem decode para SVGs.
			}

			resolve();
		};

		image.onerror = async () => {
			if (attemptsLeft > 1) {
				await pause(250);
				loadImage(src, attemptsLeft - 1).then(resolve, reject);
				return;
			}

			reject(new Error(`Não foi possível carregar ${src}`));
		};

		image.decoding = 'async';
		image.src = src;
	});

const loadFont = async (fontFamily: string) => {
	if (!document.fonts) return;
	await document.fonts.load(`16px "${fontFamily}"`);
};

export const preloadPortfolio = async (onProgress: (progress: number) => void) => {
	const isPhoneLayout = (window.visualViewport?.width ?? window.innerWidth) <= PHONE_BREAKPOINT;
	const images = isPhoneLayout ? PHONE_ASSETS : [...ROOM_ASSETS, ...PHONE_ASSETS];
	const tasks = [
		...images.map(src => () => loadImage(src)),
		...FONT_FAMILIES.map(fontFamily => () => loadFont(fontFamily))
	];
	let completedTasks = 0;

	const preloadTask = Promise.allSettled(
		tasks.map(async task => {
			try {
				await task();
			} finally {
				completedTasks += 1;
				onProgress(Math.round((completedTasks / tasks.length) * 100));
			}
		})
	);

	await Promise.race([preloadTask, pause(MAX_BOOT_WAIT)]);
};
