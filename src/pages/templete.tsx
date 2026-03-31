import {IonButton, IonContent, IonHeader, IonPage, IonToolbar, IonTitle } from '@ionic/react';


const login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full">
          Login
        </IonButton>
      </IonContent>
      </IonPage>
   
  );
    };
 

 


export default login;
