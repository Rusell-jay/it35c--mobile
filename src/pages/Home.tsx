import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { add } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
<IonFab>
      <IonFabButton>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>
    
  );
};

export default Home;
