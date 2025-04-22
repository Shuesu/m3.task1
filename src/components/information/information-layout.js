import styles from './information.module.css';

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
   let status;

   if (isDraw === true) {
      status = 'Ничья!';
   } else if (isGameEnded) {
      status = `Победа: ${currentPlayer}`;
   } else {
      status = `Ходит: ${currentPlayer}`;
   }

   return <div className={styles.status}>{status}</div>;
}