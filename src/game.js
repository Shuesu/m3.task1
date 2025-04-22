import React, { useState } from 'react';
import { GameLayout } from './game-layout';
import { handleCellClick, handleRestart } from './handlers';
import { createEmptyField } from './utils';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(createEmptyField());

	const state = {
		currentPlayer,
		setCurrentPlayer,
		field,
		setField,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw
	};


	return (
		<GameLayout
			field={field}
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			handleRestart={() => handleRestart(state)}
			handleCellClick={(index) => handleCellClick(state, index)}
		/>
	);
};