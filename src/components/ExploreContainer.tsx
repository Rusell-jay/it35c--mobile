import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
     <IonFab>
           <IonFabButton>
             <IonIcon icon={add}></IonIcon>
           </IonFabButton>
         </IonFab>
    </div>
  );
};

export default ExploreContainer;
