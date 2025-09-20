import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-text-center">
          <h1>Welcome to Our App</h1>
          <IonButton expand="block" onClick={() => history.push('/about')}>
            About Us
          </IonButton>
          <IonButton expand="block" onClick={() => history.push('/contact')}>
            Contact Form
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
