import React from "react";
import { IonButton, IonItem } from "@ionic/react";
import { useTimer } from "react-timer-hook";
import "./Timer.css";
import '../data/techniques';

interface MyTimerProps {
  expiryTimestamp: Date; // Explicitly specifying the type as Date
}

function MyTimer({ expiryTimestamp }: MyTimerProps) {
  const {
    
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div style={{textAlign: 'center'}}>
      <h1> </h1>
      <div style={{fontSize: '50px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
       <IonItem>
        <IonButton className = 'center-button' onClick = {start}> Start </IonButton>
       </IonItem>
       <IonItem>
        <IonButton className = 'center-button' onClick = {pause}> Pause </IonButton>
       </IonItem>
       <IonItem>
        <IonButton className = "center-button" onClick = {resume}> Resume </IonButton>
       </IonItem>
       <IonButton onClick={() => {
            const newExpiryTimestamp = new Date();
            newExpiryTimestamp.setSeconds(newExpiryTimestamp.getSeconds() + 5 * 60); // Adds 5 minutes to the current time
            restart(newExpiryTimestamp, true); // Optionally, auto-start the timer
          }}>
            Restart Break
        </IonButton>



      <IonButton onClick ={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setMinutes(time.getMinutes() + 5 );
        restart(time)
      }}>Break</IonButton>
    </div>
  );
}

export default function Timer({ timeLength = 25 }) { // Default to 25 minutes if no prop passed

  const time = new Date();

   time.setMinutes(time.getMinutes() + timeLength);
   return (
     <div>
       <MyTimer expiryTimestamp={time} />
     </div>
   );
 }