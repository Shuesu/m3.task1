import { checkWin } from '../utils';

export const handleCellClick = (
   { field, setField, currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, setIsDraw },
   index
) => {
   if (field[index] !== '' || isGameEnded) return;

   const newField = [...field];
   newField[index] = currentPlayer;
   setField(newField);

   if (checkWin(newField, currentPlayer)) {
      setIsGameEnded(true);
      return;
   }

   if (newField.every((cell) => cell !== '')) {
      setIsDraw(true);
      setIsGameEnded(true);
      return;
   }

   setCurrentPlayer(currentPlayer === '0' ? 'X' : '0');
};