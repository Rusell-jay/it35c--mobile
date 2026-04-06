
import { IonContent, IonHeader, IonPage, IonToolbar, IonTitle, IonSplitPane, IonMenu, IonRouterOutlet, IonMenuToggle, IonItem, IonIcon } from '@ionic/react';
import { Redirect, Route } from 'react-router';
import Home from './Home';
import { homeOutline } from 'ionicons/icons';


const Menu: React.FC = () => {

  const Path = [
    {name:'Home', url:'/app/home', icon:homeOutline}
  ];
  return (
    <IonPage>
      <IonSplitPane contentId="main">
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        {Path.map((item,index) => (
          <IonMenuToggle key={index}>
            <IonItem routerLink={item.url} routerDirection="forward">
              <IonIcon icon={item.icon} slot="start"/><IonIcon/>
              {item.name}
            </IonItem>
          </IonMenuToggle>
        ))}
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="main">
        <Route exact path="/app/home" component={Home}>
        </Route>
        <Redirect to="/app/home" />  
      </IonRouterOutlet>
      </IonSplitPane>
      </IonPage>
   
  );
    };
 

 


export default Menu;
