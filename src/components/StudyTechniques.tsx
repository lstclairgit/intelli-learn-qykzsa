import {IonItem, IonLabel, IonNote} from '@ionic/react';
import { Technique } from '../data/techniques';
import './StudyTechniques.css';

interface StudyTechniquesProps {
    technique: Technique;
}

const StudyTechniques: React.FC<StudyTechniquesProps> = ({ technique }) => {
    return (
     <IonItem routerLink={`/technique/${technique.id}`} detail={false}>
     <div slot="start"></div>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {technique.name}
                  <span>
                  </span>
                </h2>
              </IonLabel>
            </IonItem>
      );
    };

   export default StudyTechniques;
