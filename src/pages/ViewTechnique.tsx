import { useState } from 'react';
import { Technique, getTechnique, getTimeLength } from '../data/techniques';
import Timer from '../components/Timer';
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
import { useTimer } from 'react-timer-hook';

function ViewTechnique() {
  const [technique, setTechnique, setTimeLength] = useState<Technique>();
  const params = useParams<{ id: string }>();
  const timer = useParams<{ timeLength: number }>();

  useIonViewWillEnter(() => {
    const tech = getTechnique(parseInt(params.id, 10));
    const time = getTimeLength(parseInt(params.timeLength, 25));
    setTechnique(tech);
    setTimeLength(time);
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
           
              <b className='center'>{technique.name}</b>
            
            <IonItem>
            <p>{technique.description}</p>

            <p>{technique.timeLength}</p>
            </IonItem>
            

            <Timer timeLength={technique.timeLength}></Timer>
            
            

          </>
        ) : (
          <div>Technique not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}


export default ViewTechnique;
