import { IonButton, IonToast } from '@ionic/react';
import './ExploreContainer.css';

type ContainerProps = object

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">

      <div className="card">
        <h2>Welcome </h2>
        <p>This is your Ionic app interface</p>

        <IonButton id="open-toast" expand="block" shape="round">
          Open
        </IonButton>
      </div>

      <IonToast 
        trigger="open-toast" 
        position="top" 
        message="Watzup mga kaAraaay Ko! Ako diay Rusell Jay Ching" 
        duration={500}>
      </IonToast>

    </div>
    
  );
};

export default ExploreContainer;