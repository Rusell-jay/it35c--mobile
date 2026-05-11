import {IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { logoGoogle } from 'ionicons/icons';
import { supabase } from '../lib/supabase';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const doLogin = () => {
    navigation.push('/app', 'forward', 'replace');
  }

const signInwithGoogle = async () =>{
  await supabase.auth.signInWithOAuth({
    provider: 'google', 
    options: {
     redirectTo:'${window.location.origin}/app'
    }
  })
}


  return (
  <IonPage>
      <IonHeader>
      <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonContent className="ion-padding">

       <IonButton expand="full" onClick={signInwithGoogle}>
        <IonIcon icon = {logoGoogle} />
       Continue with Google
    </IonButton>

     </IonContent>
      </IonPage>
      


 
);
 
};


export default Login;
