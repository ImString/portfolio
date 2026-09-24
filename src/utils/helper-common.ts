import { useRef, useState } from 'react';

export const calculateCanvasSize = () => {
	const width = window.innerWidth;
	const height = window.innerHeight;

	return { width, height };
};
