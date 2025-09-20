import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>About Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About Us</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h2>Our Story</h2>
        <p>
          Welcome to our company! We are dedicated to providing the best service possible to our customers.
        </p>
        <p>
          Founded in 2020, we have grown from a small startup to a billion dollar company. I am going to be the next Bill Gates.
        </p>
        <h2>Our Team</h2>
        <p>
          Our team is the best and we are all going to be billionares and solve world hunger.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default About;