import StudyTechniques from '../components/StudyTechniques';
import { useState } from 'react';
import { Technique, getTechniques } from '../data/techniques';
import { settings } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonButton,
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
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButton slot = 'end' color = 'translucent'>
            <IonIcon color = 'white' icon={settings}></IonIcon>
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
