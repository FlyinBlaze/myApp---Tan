import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonTextarea, IonItem, IonLabel, IonList, IonButtons, IonBackButton } from '@ionic/react';
import './Contact.css';
import { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Contact Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact Us</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form onSubmit={handleSubmit}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Name</IonLabel>
              <IonInput 
                value={name}
                onIonChange={e => setName(e.detail.value!)}
                placeholder="Enter your name"
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput 
                type="email"
                value={email}
                onIonChange={e => setEmail(e.detail.value!)}
                placeholder="Enter your email"
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Message</IonLabel>
              <IonTextarea 
                value={message}
                onIonChange={e => setMessage(e.detail.value!)}
                placeholder="Enter your message"
                rows={6}
                required
              />
            </IonItem>
          </IonList>
          <IonButton expand="block" type="submit">
            Send Message
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Contact;