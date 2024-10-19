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
        ],
      },
    ],
  },
  {
    id: "block2",
    day: new Date("2024-10-02").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod2",
        works: [
          {
            id: "work3",
            title: "for time",
            time: 15,
            exercices: [
              { id: "ex6", name: "Snatch", reps: 12 },
              { id: "ex7", name: "Burpees", reps: 15 },
              { id: "ex8", name: "Toes to Bar", reps: 10 },
            ],
          },
          {
            id: "rest2",
            title: "rest",
            time: 5,
            exercices: [],
          },
        ],
      },
      {
        title: "wod",
        id: "wod3",
        works: [
          {
            id: "work4",
            title: "ot3m",
            time: 9,
            exercices: [
              { id: "ex9", name: "Clean & Jerk", reps: 3 },
              { id: "ex10", name: "Wall Ball", reps: 15 },
            ],
          },
          {
            id: "rest2",
            title: "rest",
            time: 2,
            exercices: [],
          },
          {
            id: "work4",
            title: "ot3m",
            time: 9,
            exercices: [
              { id: "ex9", name: "Clean & Jerk", reps: 3 },
              { id: "ex10", name: "Wall Ball", reps: 15 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "block3",
    day: new Date("2024-10-03").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod4",
        works: [
          {
            id: "work5",
            title: "for time",
            time: 20,
            exercices: [
              { id: "ex11", name: "Clean", reps: 10 },
              { id: "ex12", name: "Handstand Push-Ups", reps: 12 },
              { id: "ex13", name: "Kettlebell Swings", reps: 15 },
            ],
          },
          {
            id: "rest3",
            title: "rest",
            time: 4,
            exercices: [],
          },
        ],
      },
      {
        title: "wod",
        id: "wod5",
        works: [
          {
            id: "work6",
            title: "ot2m",
            time: 10,
            exercices: [
              { id: "ex14", name: "Thrusters", reps: 5 },
              { id: "ex15", name: "Chest-to-Bar Pull-Ups", reps: 7 },
            ],
          },
          {
            id: "rest4",
            title: "rest",
            time: 3,
            exercices: [],
          },
          {
            id: "work7",
            title: "ot2m",
            time: 10,
            exercices: [
              { id: "ex16", name: "Overhead Squats", reps: 5 },
              { id: "ex17", name: "Bar Muscle-Ups", reps: 3 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "block4",
    day: new Date("2024-10-04").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod6",
        works: [
          {
            id: "work8",
            title: "amrap",
            time: 18,
            exercices: [
              { id: "ex18", name: "Power Cleans", reps: 8 },
              { id: "ex19", name: "Box Jumps", reps: 12 },
              { id: "ex20", name: "Double-Unders", reps: 50 },
            ],
          },
          {
            id: "rest5",
            title: "rest",
            time: 5,
            exercices: [],
          },
        ],
      },
      {
        title: "wod",
        id: "wod7",
        works: [
          {
            id: "work9",
            title: "time cap",
            time: 15,
            exercices: [
              { id: "ex21", name: "Deadlifts", reps: 21 },
              { id: "ex22", name: "Hang Power Cleans", reps: 15 },
              { id: "ex23", name: "Push Jerks", reps: 9 },
            ],
          },
          {
            id: "rest6",
            title: "rest",
            time: 3,
            exercices: [],
          },
          {
            id: "work10",
            title: "time cap",
            time: 15,
            exercices: [
              { id: "ex24", name: "Front Squats", reps: 21 },
              { id: "ex25", name: "Pull-Ups", reps: 15 },
              { id: "ex26", name: "Shoulder to Overhead", reps: 9 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "block5",
    day: new Date("2024-10-05").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod8",
        works: [
          {
            id: "work11",
            title: "for time",
            time: 12,
            exercices: [
              { id: "ex27", name: "Power Snatches", reps: 30 },
              { id: "ex28", name: "Burpee Box Jump-Overs", reps: 30 },
            ],
          },
          {
            id: "rest7",
            title: "rest",
            time: 4,
            exercices: [],
          },
        ],
      },
      {
        title: "wod",
        id: "wod9",
        works: [
          {
            id: "work12",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex29", name: "Hang Squat Cleans", reps: 3 },
              { id: "ex30", name: "Ring Muscle-Ups", reps: 2 },
            ],
          },
          {
            id: "rest8",
            title: "rest",
            time: 3,
            exercices: [],
          },
          {
            id: "work13",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex31", name: "Squat Snatches", reps: 2 },
              { id: "ex32", name: "Bar Muscle-Ups", reps: 3 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "block6",
    day: new Date("2024-10-06").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod10",
        works: [
          {
            id: "work14",
            title: "amrap",
            time: 20,
            exercices: [
              { id: "ex33", name: "Thrusters", reps: 10 },
              { id: "ex34", name: "Rowing", reps: 15 },
              { id: "ex35", name: "Pull-Ups", reps: 8 },
            ],
          },
          {
            id: "rest9",
            title: "rest",
            time: 5,
            exercices: [],
          },
        ],
      },
      {
        title: "wod",
        id: "wod11",
        works: [
          {
            id: "work15",
            title: "for time",
            time: 15,
            exercices: [
              { id: "ex36", name: "Deadlifts", reps: 15 },
              { id: "ex37", name: "Box Jumps", reps: 20 },
              { id: "ex38", name: "Push Press", reps: 10 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "block7",
    day: new Date("2024-10-07").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod12",
        works: [
          {
            id: "work16",
            title: "ot2m",
            time: 16,
            exercices: [
              { id: "ex39", name: "Power Cleans", reps: 4 },
              { id: "ex40", name: "Burpees", reps: 8 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod13",
        works: [
          {
            id: "work17",
            title: "amrap",
            time: 12,
            exercices: [
              { id: "ex41", name: "Wall Balls", reps: 20 },
              { id: "ex42", name: "Kettlebell Swings", reps: 15 },
              { id: "ex43", name: "Sit-Ups", reps: 10 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "block8",
    day: new Date("2024-10-08").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod14",
        works: [
          {
            id: "work18",
            title: "for time",
            time: 20,
            exercices: [
              { id: "ex44", name: "Squat Cleans", reps: 10 },
              { id: "ex45", name: "Muscle-Ups", reps: 5 },
              { id: "ex46", name: "Overhead Lunges", reps: 20 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod15",
        works: [
          {
            id: "work19",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex47", name: "Snatch", reps: 3 },
              { id: "ex48", name: "Handstand Push-Ups", reps: 6 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "block9",
    day: new Date("2024-10-09").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod16",
        works: [
          {
            id: "work20",
            title: "amrap",
            time: 15,
            exercices: [
              { id: "ex49", name: "Deadlifts", reps: 10 },
              { id: "ex50", name: "Box Jump Overs", reps: 15 },
              { id: "ex51", name: "Dumbbell Snatches", reps: 20 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod17",
        works: [
          {
            id: "work21",
            title: "for time",
            time: 12,
            exercices: [
              { id: "ex52", name: "Thrusters", reps: 21 },
              { id: "ex53", name: "Pull-Ups", reps: 21 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "block10",
    day: new Date("2024-10-10").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod18",
        works: [
          {
            id: "work22",
            title: "ot2m",
            time: 20,
            exercices: [
              { id: "ex54", name: "Clean and Jerks", reps: 2 },
              { id: "ex55", name: "Toes to Bar", reps: 10 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod19",
        works: [
          {
            id: "work23",
            title: "amrap",
            time: 10,
            exercices: [
              { id: "ex56", name: "Rowing", reps: 20 },
              { id: "ex57", name: "Push-Ups", reps: 15 },
              { id: "ex58", name: "Air Squats", reps: 25 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "block11",
    day: new Date("2024-10-11").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod20",
        works: [
          {
            id: "work24",
            title: "for time",
            time: 15,
            exercices: [
              { id: "ex59", name: "Power Snatches", reps: 30 },
              { id: "ex60", name: "Double-Unders", reps: 60 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod21",
        works: [
          {
            id: "work25",
            title: "ot3m",
            time: 18,
            exercices: [
              { id: "ex61", name: "Front Squats", reps: 5 },
              { id: "ex62", name: "Chest-to-Bar Pull-Ups", reps: 7 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "block12",
    day: new Date("2024-10-12").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod22",
        works: [
          {
            id: "work26",
            title: "amrap",
            time: 20,
            exercices: [
              { id: "ex63", name: "Hang Power Cleans", reps: 8 },
              { id: "ex64", name: "Burpees over the bar", reps: 8 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod23",
        works: [
          {
            id: "work27",
            title: "for time",
            time: 12,
            exercices: [
              { id: "ex65", name: "Kettlebell Swings", reps: 50 },
              { id: "ex66", name: "Box Jumps", reps: 40 },
              { id: "ex67", name: "Pull-Ups", reps: 30 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "block13",
    day: new Date("2024-10-13").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod24",
        works: [
          {
            id: "work28",
            title: "ot2m",
            time: 16,
            exercices: [
              { id: "ex68", name: "Squat Snatches", reps: 3 },
              { id: "ex69", name: "Bar Muscle-Ups", reps: 2 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod25",
        works: [
          {
            id: "work29",
            title: "amrap",
            time: 15,
            exercices: [
              { id: "ex70", name: "Deadlifts", reps: 12 },
              { id: "ex71", name: "Hand Release Push-Ups", reps: 15 },
              { id: "ex72", name: "Box Step-Ups", reps: 20 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "block14",
    day: new Date("2024-10-14").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod26",
        works: [
          {
            id: "work30",
            title: "for time",
            time: 20,
            exercices: [
              { id: "ex73", name: "Clean and Jerks", reps: 15 },
              { id: "ex74", name: "Ring Dips", reps: 30 },
              { id: "ex75", name: "Wall Balls", reps: 45 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod27",
        works: [
          {
            id: "work31",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex76", name: "Thrusters", reps: 7 },
              { id: "ex77", name: "Rowing", reps: 15 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "block15",
    day: new Date("2024-10-15").toISOString(),
    wods: [
      {
        title: "oly",
        id: "wod28",
        works: [
          {
            id: "work32",
            title: "amrap",
            time: 12,
            exercices: [
              { id: "ex78", name: "Power Cleans", reps: 5 },
              { id: "ex79", name: "Push Press", reps: 7 },
              { id: "ex80", name: "Toes to Bar", reps: 9 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod29",
        works: [
          {
            id: "work33",
            title: "for time",
            time: 15,
            exercices: [
              { id: "ex81", name: "Burpees", reps: 50 },
              { id: "ex82", name: "Double-Unders", reps: 100 },
            ],
          },
        ],
      },
    ],
  },
];
