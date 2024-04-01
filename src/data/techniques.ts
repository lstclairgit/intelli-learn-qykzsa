export interface Technique {
  name: string;
  shortDescription: string;
  description: string;
  id: number;
  timeLength: number;
}

const techniques: Technique[] = [
  {
    name: 'Pomodoro',
    shortDescription: "25 minute stretches with 5 minute breaks.",
    description: "Pick a task to work on for 25 minutes with 5 minute breaks between rounds.",
    id: 0,
    timeLength: 25,
  },

  {
    name: 'Active Recall',
    shortDescription: "Free timer to allow for reiteration of your knowledge to yourself.",
    description: "Pick a topic that you wish to learn, create questions, then quiz yourself on those questions for 20 minutes",
    id: 1,
    timeLength: 20,
  },
  {
    name: 'Feynman Technique',
    shortDescription: "Free timer to allow teaching someone else.",
    description: "Pick a topic and use what you learned to teach someone else for 10 minutes!",
    id: 2,
    timeLength: 10,
  },
  {
    name: "52-17",
    shortDescription: "Longer than Pomodoro! 52 minute stretches with 17 minute breaks.",
    description: "If you want to challenge yourself, pick a task to work on for 52 minutes with 17 minute breaks between rounds!",
    id: 3,
    timeLength: 52,
  },
  {
    name: 'Settings',
    shortDescription: "Settings Page",
    description: "Settings Page",
    id: 999,
    timeLength: 33,
  },
];

export const getTechniques = () => techniques;

export const getTechnique = (id: number) => techniques.find(t => t.id === id);

export const getTimeLength = (timeLength: number) => techniques.find(t => t.timeLength === timeLength);