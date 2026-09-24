import React, { useCallback, useRef, useState } from 'react';

export const useStateRef = <T = any,>(initialValue: T) => {
	const [state, _setState] = useState(initialValue);
	const stateRef = useRef(state);

	const setState = useCallback((value: React.SetStateAction<T>) => {
		const newState = typeof value === 'function' ? (value as Function)(stateRef.current) : value;

		stateRef.current = newState;
		_setState(newState);
	}, []);

	return [state, setState, stateRef] as [T, React.Dispatch<React.SetStateAction<T>>, React.MutableRefObject<T>];
};
