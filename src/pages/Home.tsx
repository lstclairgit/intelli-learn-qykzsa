import StudyTechniques from '../components/StudyTechniques';
import { useState } from 'react';
import { Technique, getTechniques } from '../data/techniques';
import {
  IonContent,
  IonHeader,
  IonButtons,
  IonList,
  IonPage,
  IonRefresher,
  IonIcon,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import { star } from 'ionicons/icons';

const Home: React.FC = () => {

  const [techniques, setTechniques] = useState<Technique[]>([]);

  useIonViewWillEnter(() => {
    const tech = getTechniques();
    setTechniques(tech);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
            <IonButton>
             <IonIcon slot="icon-only" icon={star}></IonIcon>
             </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonHeader collapse="condense">
        </IonHeader>
        <IonList>
            {techniques.map(t => <StudyTechniques key={t.id} technique={t} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
