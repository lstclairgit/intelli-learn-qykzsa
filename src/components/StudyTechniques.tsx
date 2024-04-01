import {IonItem, IonLabel, IonNote} from '@ionic/react';
import { Technique } from '../data/techniques';
import './StudyTechniques.css';
import MyTimer from './Timer';

interface StudyTechniquesProps {
    technique: Technique;
}

const StudyTechniques: React.FC<StudyTechniquesProps> = ({ technique }) => {
    return (
     <IonItem routerLink={`/technique/${technique.id}`} detail={false}>
     <div slot="start"></div>
              <IonLabel className="ion-text-wrap">
                <b>
                  {technique.name}
                  <span>
                  </span>
                </b>
                <h3>{technique.shortDescription}</h3>
                
              </IonLabel>
            </IonItem>
      );
    };

   export default StudyTechniques;
