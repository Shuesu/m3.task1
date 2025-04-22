import { WIN_PATTERNS } from '../constants'

export const checkWin = (field, player) => {
   return WIN_PATTERNS.some((pattern) =>
      pattern.every((index) => field[index] === player)
   );
};