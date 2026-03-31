import {IonButton, IonContent, IonHeader, IonPage, IonToolbar, IonTitle, useIonRouter } from '@ionic/react';


const Login: React.FC = () => {
  const router = useIonRouter();

  const doLogin = (credentials: any) => {
    router.push('/app', 'forward', 'replace');
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" onClick={() => doLogin({})}>
          Login
        </IonButton>
      </IonContent>
      </IonPage>
   
  );
    };
 

 


export default Login;
