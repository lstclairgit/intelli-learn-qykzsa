import StudyTechniques from '../components/StudyTechniques';
import { useState } from 'react';
import { Technique, getTechniques } from '../data/techniques';
import { settings } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonRouterLink,
  IonButton,
  IonLabel,
  IonThumbnail,
  IonItem,
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
      <IonHeader translucent = {true}>
        <IonToolbar>
          <IonTitle>Study Home</IonTitle>
          <IonButton routerLink={`/technique/${999}`} slot = 'end' color = 'translucent'>
            <IonIcon color = 'primary' icon={settings}></IonIcon>
           </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen = {true}>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonHeader collapse="condense">
        </IonHeader>
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Pomodoro</IonCardTitle>
                <IonCardSubtitle>25 min, 5 min</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                <IonRouterLink routerDirection="forward"> </IonRouterLink>
                <IonButton routerLink={`/technique/${0}`} expand="block" fill="solid">START STUDYING</IonButton>
            </IonCard>

            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>FlowTime</IonCardTitle>
                    <IonCardSubtitle>Working Intervals</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                    <IonRouterLink routerDirection="forward"> </IonRouterLink>
                    <IonButton routerLink={`/technique/${1}`} expand="block" fill="solid">START STUDYING</IonButton>
                </IonCard>

            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Active Recall</IonCardTitle>
                    <IonCardSubtitle>Reiteration of your knowledge to yourself.</IonCardSubtitle>
                </IonCardHeader>

                 <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                    <IonRouterLink routerDirection="forward"> </IonRouterLink>
                    <IonButton routerLink={`/technique/${2}`} expand="block" fill="solid">START STUDYING</IonButton>
            </IonCard>

            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Feynman Technique</IonCardTitle>
                    <IonCardSubtitle>Teach to someone else!</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                    <IonRouterLink routerDirection="forward"> </IonRouterLink>
                    <IonButton routerLink={`/technique/${3}`} expand="block" fill="solid">START STUDYING</IonButton>
            </IonCard>

            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>52-17</IonCardTitle>
                    <IonCardSubtitle>52 min, 17 min</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                    <IonRouterLink routerDirection="forward"> </IonRouterLink>
                    <IonButton routerLink={`/technique/${4}`} expand="block" fill="solid">START STUDYING</IonButton>
            </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
