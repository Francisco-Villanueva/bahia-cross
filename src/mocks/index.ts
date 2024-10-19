import { IBlock } from "@/types";

export const blocks: IBlock[] = [
  {
    id: "block1",
    day: new Date("2024-10-01").toISOString(),
    wods: [
      {
        id: "wod11",
        title: "oly",
        works: [
          {
            id: "work1",
            title: "amrap",
            time: 12,
            exercices: [
              { id: "ex1", name: "Pull Ups", reps: 10 },
              { id: "ex2", name: "Push Ups", reps: 20 },
              { id: "ex3", name: "Air Squats", reps: 30 },
            ],
          },
          {
            id: "rest1",
            title: "rest",
            time: 3,
            exercices: [],
          },
          {
            id: "work2",
            title: "otm",
            time: 10,
            exercices: [
              { id: "ex4", name: "Deadlift", reps: 5 },
              { id: "ex5", name: "Box Jump", reps: 10 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod12",
        works: [
          {
            id: "work1",
            title: "amrap",
            time: 12,
            exercices: [
              { id: "ex1", name: "Pull Ups", reps: 10 },
              { id: "ex2", name: "Push Ups", reps: 20 },
              { id: "ex3", name: "Air Squats", reps: 30 },
            ],
          },
          {
            id: "rest1",
            title: "rest",
            time: 3,
            exercices: [],
          },
          {
            id: "work2",
            title: "otm",
            time: 10,
            exercices: [
              { id: "ex4", name: "Deadlift", reps: 5 },
              { id: "ex5", name: "Box Jump", reps: 10 },
            ],
          },

          {
            id: "work1",
            title: "amrap",
            time: 12,
            exercices: [
              { id: "ex1", name: "Pull Ups", reps: 10 },
              { id: "ex2", name: "Push Ups", reps: 20 },
              { id: "ex3", name: "Air Squats", reps: 30 },
            ],
          },
          {
            id: "rest1",
            title: "rest",
            time: 3,
            exercices: [],
          },
          {
            id: "work2",
            title: "otm",
            time: 10,
            exercices: [
              { id: "ex4", name: "Deadlift", reps: 5 },
              { id: "ex5", name: "Box Jump", reps: 10 },
            ],
          },
        ],
      },
    ],
  },
  // {
  //   id: "block2",
  //   day: new Date("2024-10-02").toISOString(),
  //   wods: [
  //     {
  //       title: "oly",
  //       id: "wod2",
  //       works: [
  //         {
  //           id: "work3",
  //           title: "for time",
  //           time: 15,
  //           exercices: [
  //             { id: "ex6", name: "Snatch", reps: 12 },
  //             { id: "ex7", name: "Burpees", reps: 15 },
  //             { id: "ex8", name: "Toes to Bar", reps: 10 },
  //           ],
  //         },
  //         {
  //           id: "rest2",
  //           title: "rest",
  //           time: 5,
  //           exercices: [],
  //         },
  //       ],
  //     },
  //     {
  //       title: "wod",
  //       id: "wod3",
  //       works: [
  //         {
  //           id: "work4",
  //           title: "ot3m",
  //           time: 9,
  //           exercices: [
  //             { id: "ex9", name: "Clean & Jerk", reps: 3 },
  //             { id: "ex10", name: "Wall Ball", reps: 15 },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "block3",
  //   day: new Date("2024-10-03").toISOString(),

  //   wods: [
  //     {
  //       title: "oly",
  //       id: "wod2",
  //       works: [
  //         {
  //           id: "work3",
  //           title: "for time",
  //           time: 15,
  //           exercices: [
  //             { id: "ex6", name: "Snatch", reps: 12 },
  //             { id: "ex7", name: "Burpees", reps: 15 },
  //             { id: "ex8", name: "Toes to Bar", reps: 10 },
  //           ],
  //         },
  //         {
  //           id: "rest2",
  //           title: "rest",
  //           time: 5,
  //           exercices: [],
  //         },
  //       ],
  //     },
  //     {
  //       title: "WOD",
  //       id: "wod4",
  //       works: [
  //         {
  //           id: "work5",
  //           title: "time cap",
  //           time: 20,
  //           exercices: [
  //             { id: "ex11", name: "Thrusters", reps: 21 },
  //             { id: "ex12", name: "Pull Ups", reps: 15 },
  //             { id: "ex13", name: "Deadlifts", reps: 9 },
  //           ],
  //         },
  //         {
  //           id: "rest3",
  //           title: "rest",
  //           time: 4,
  //           exercices: [],
  //         },
  //         {
  //           id: "work6",
  //           title: "ot2m",
  //           time: 12,
  //           exercices: [
  //             { id: "ex14", name: "Squat Clean", reps: 3 },
  //             { id: "ex15", name: "Handstand Push-Ups", reps: 6 },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
];
