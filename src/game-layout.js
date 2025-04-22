import styles from './game.module.css';
import { Field, Information } from './components';

export const GameLayout = ({ field, currentPlayer, isGameEnded, isDraw, handleRestart, handleCellClick }) => (
   <div className={styles.game}>
      <Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
      <Field field={field} handleCellClick={handleCellClick} />
      <button className={styles.button} onClick={handleRestart}>
         Начать заново
      </button>
   </div>
);