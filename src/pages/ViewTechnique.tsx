import { useState } from 'react';
import { Technique, getTechnique } from '../data/techniques';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { ellipseOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewTechnique.css';

function ViewTechnique() {
  const [technique, setTechnique] = useState<Technique>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const tech = getTechnique(parseInt(params.id, 10));
    setTechnique(tech);
  });

  return (
    <IonPage id="view-technique-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Home" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {technique ? (
          <>
            <IonItem>
             <div slot="start"></div>
            <p>{technique.description}</p>
            </IonItem>
          </>
        ) : (
          <div>Technique not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewTechnique;