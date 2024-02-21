import StudyTechniques from '../components/StudyTechniques';
import { useState } from 'react';
import { Technique, getTechniques } from '../data/techniques';
import {
  IonContent,
  IonHeader,
  IonCard,
  IonIcon,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonRouterLink,
  IonList,
  IonPage,
  IonRefresher,
  IonLabel,
  IonThumbnail,
  IonItem,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import { settings, star } from 'ionicons/icons';

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
          <IonTitle>Study Home</IonTitle>
            <IonButton>
              <IonIcon mode="ios" slot="icon-only" icon={settings}></IonIcon>
            </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Choice
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
            {techniques.map(t => <StudyTechniques key={t.id} technique={t} />)}
        </IonList>
        
        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>Promordo</IonCardTitle>
            <IonCardSubtitle>25 min, 5 min</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
          <IonRouterLink routerDirection="forward"> </IonRouterLink>
          <IonButton routerLink={`/technique/${0}`} expand="block" fill="solid">START STUDYING</IonButton>

        </IonCard>

        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>FlowTime</IonCardTitle>
            <IonCardSubtitle>Working Intervals</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
          <IonRouterLink routerDirection="forward"> </IonRouterLink>
          <IonButton routerLink={`/technique/${1}`} expand="block" fill="solid">START STUDYING</IonButton>

        </IonCard>



      </IonContent>
    </IonPage>
  );
};

export default Home;
