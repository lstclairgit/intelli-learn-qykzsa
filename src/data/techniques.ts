export interface Technique {
  name: string;
  id: number;
}

const techniques: Technique[] = [
  {
    name: 'Pomodoro',
    id: 0
  },
  {
    name: 'Flowtime',
    id: 1
  },
  {
    name: 'Active Recall',
    id: 2

  },
//   {
//     fromName: 'Bill Thomas',
//     subject: 'The situation',
//     date: 'Yesterday',
//     id: 3
//   },
//   {
//     fromName: 'Joanne Pollan',
//     subject: 'Updated invitation: Swim lessons',
//     date: 'Yesterday',
//     id: 4
//   },
//   {
//     fromName: 'Andrea Cornerston',
//     subject: 'Last minute ask',
//     date: 'Yesterday',
//     id: 5
//   },
//   {
//     fromName: 'Moe Chamont',
//     subject: 'Family Calendar - Version 1',
//     date: 'Last Week',
//     id: 6
//   },
//   {
//     fromName: 'Kelly Richardson',
//     subject: 'Placeholder Headhots',
//     date: 'Last Week',
//     id: 7
//   }
];

export const getTechniques = () => techniques;

export const getTechnique = (id: number) => techniques.find(t => t.id === id);