import { InformationLayout } from './information-layout'

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => (
   <div>
      <InformationLayout
         currentPlayer={currentPlayer}
         isGameEnded={isGameEnded}
         isDraw={isDraw}
      />
   </div>
);