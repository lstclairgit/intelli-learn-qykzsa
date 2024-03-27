import React from "react";
import { IonButton, IonItem } from "@ionic/react";
import { useTimer } from "react-timer-hook";
import "./Timer.css";

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
      <h1>Timer</h1>
      <div style={{fontSize: '50px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
       <IonItem>
        <IonButton class = 'center-button' onClick = {start}> Start </IonButton>
       </IonItem>
       <IonItem>
        <IonButton class = 'center-button' onClick = {pause}> Pause </IonButton>
       </IonItem>
       <IonItem>
        <IonButton class = "center-button" onClick = {resume}> Resume </IonButton>
       </IonItem>
       <IonItem>
        <IonButton class = "center-button" onClick = {restart}> Restart </IonButton>
        </IonItem>


      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}``