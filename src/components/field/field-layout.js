import styles from './field.module.css';

export const FieldLayout = ({ field, handleCellClick }) => (
   <div className={styles.field}>
      {field.map((cell, index) => (
         <button
            key={index}
            className={styles.cell}
            onClick={() => handleCellClick(index)}
            disabled={cell !== ''}
         >
            {cell}
         </button>
      ))}
   </div>
);