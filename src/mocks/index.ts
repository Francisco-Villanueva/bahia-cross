import { IBlock } from "@/types";

export const blocks: IBlock[] = [
  {
    id: "block1",
    day: new Date("2024-10-01").toISOString(),
    wods: [
      {
        id: "wod1",
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
        id: "wod2",
        works: [
          {
            id: "work3",
            title: "amrap",
            time: 12,
            exercices: [
              { id: "ex6", name: "Chin Ups", reps: 10 },
              { id: "ex7", name: "Dips", reps: 20 },
              { id: "ex8", name: "Lunges", reps: 30 },
            ],
          },
          {
            id: "rest2",
            title: "rest",
            time: 3,
            exercices: [],
          },
          {
            id: "work4",
            title: "otm",
            time: 10,
            exercices: [
              { id: "ex9", name: "Sumo Deadlift", reps: 5 },
              { id: "ex10", name: "Box Step-ups", reps: 10 },
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
        id: "wod3",
        works: [
          {
            id: "work5",
            title: "for time",
            time: 15,
            exercices: [
              { id: "ex11", name: "Snatch", reps: 12 },
              { id: "ex12", name: "Burpees", reps: 15 },
              { id: "ex13", name: "Toes to Bar", reps: 10 },
            ],
          },
          {
            id: "rest3",
            title: "rest",
            time: 5,
            exercices: [],
          },
          {
            id: "work6",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex14", name: "Power Snatch", reps: 2 },
              { id: "ex15", name: "Chest to Bar Pull-Ups", reps: 3 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod4",
        works: [
          {
            id: "work7",
            title: "ot3m",
            time: 9,
            exercices: [
              { id: "ex16", name: "Clean & Jerk", reps: 3 },
              { id: "ex17", name: "Wall Ball Shots", reps: 15 },
            ],
          },
          {
            id: "rest4",
            title: "rest",
            time: 2,
            exercices: [],
          },
          {
            id: "work8",
            title: "ot3m",
            time: 9,
            exercices: [
              { id: "ex18", name: "Power Clean & Push Jerk", reps: 3 },
              { id: "ex19", name: "Medicine Ball Cleans", reps: 15 },
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
        id: "wod5",
        works: [
          {
            id: "work9",
            title: "for time",
            time: 20,
            exercices: [
              { id: "ex20", name: "Clean", reps: 10 },
              { id: "ex21", name: "Handstand Push-Ups", reps: 12 },
              { id: "ex22", name: "Kettlebell Swings", reps: 15 },
            ],
          },
          {
            id: "rest5",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work10",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex23", name: "Hang Power Snatch", reps: 2 },
              { id: "ex24", name: "Ring Muscle-Ups", reps: 3 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod6",
        works: [
          {
            id: "work11",
            title: "ot2m",
            time: 10,
            exercices: [
              { id: "ex25", name: "Thrusters", reps: 5 },
              { id: "ex26", name: "Chest-to-Bar Pull-Ups", reps: 7 },
            ],
          },
          {
            id: "rest6",
            title: "rest",
            time: 3,
            exercices: [],
          },
          {
            id: "work12",
            title: "ot2m",
            time: 10,
            exercices: [
              { id: "ex27", name: "Overhead Squats", reps: 5 },
              { id: "ex28", name: "Bar Muscle-Ups", reps: 3 },
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
        id: "wod7",
        works: [
          {
            id: "work13",
            title: "amrap",
            time: 18,
            exercices: [
              { id: "ex29", name: "Power Cleans", reps: 8 },
              { id: "ex30", name: "Box Jumps", reps: 12 },
              { id: "ex31", name: "Double-Unders", reps: 50 },
            ],
          },
          {
            id: "rest7",
            title: "rest",
            time: 5,
            exercices: [],
          },
          {
            id: "work14",
            title: "amrap",
            time: 18,
            exercices: [
              { id: "ex32", name: "Hang Power Cleans", reps: 8 },
              { id: "ex33", name: "Box Jump Overs", reps: 12 },
              { id: "ex34", name: "Single Unders", reps: 100 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod8",
        works: [
          {
            id: "work15",
            title: "time cap",
            time: 15,
            exercices: [
              { id: "ex35", name: "Deadlifts", reps: 21 },
              { id: "ex36", name: "Hang Power Cleans", reps: 15 },
              { id: "ex37", name: "Push Jerks", reps: 9 },
            ],
          },
          {
            id: "rest8",
            title: "rest",
            time: 3,
            exercices: [],
          },
          {
            id: "work16",
            title: "time cap",
            time: 15,
            exercices: [
              { id: "ex38", name: "Front Squats", reps: 21 },
              { id: "ex39", name: "Pull-Ups", reps: 15 },
              { id: "ex40", name: "Shoulder to Overhead", reps: 9 },
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
        id: "wod9",
        works: [
          {
            id: "work17",
            title: "for time",
            time: 12,
            exercices: [
              { id: "ex41", name: "Power Snatches", reps: 30 },
              { id: "ex42", name: "Burpee Box Jump-Overs", reps: 30 },
            ],
          },
          {
            id: "rest9",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work18",
            title: "for time",
            time: 12,
            exercices: [
              { id: "ex43", name: "Hang Power Snatches", reps: 30 },
              { id: "ex44", name: "Lateral Burpees Over Bar", reps: 30 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod10",
        works: [
          {
            id: "work19",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex45", name: "Hang Squat Cleans", reps: 3 },
              { id: "ex46", name: "Ring Muscle-Ups", reps: 2 },
            ],
          },
          {
            id: "rest10",
            title: "rest",
            time: 3,
            exercices: [],
          },
          {
            id: "work20",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex47", name: "Squat Snatches", reps: 2 },
              { id: "ex48", name: "Bar Muscle-Ups", reps: 3 },
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
        id: "wod11",
        works: [
          {
            id: "work21",
            title: "amrap",
            time: 20,
            exercices: [
              { id: "ex49", name: "Thrusters", reps: 10 },
              { id: "ex50", name: "Rowing", reps: 15 },
              { id: "ex51", name: "Pull-Ups", reps: 8 },
              { id: "ex52", name: "Power Cleans", reps: 6 },
              { id: "ex53", name: "Toes to Bar", reps: 12 },
              { id: "ex54", name: "Push Press", reps: 10 },
              { id: "ex55", name: "Assault Bike", reps: 15 },
              { id: "ex56", name: "Dips", reps: 8 },
            ],
          },
          {
            id: "rest11",
            title: "rest",
            time: 5,
            exercices: [],
          },
          {
            id: "work22",
            title: "amrap",
            time: 20,
            exercices: [
              { id: "ex57", name: "Front Squats", reps: 10 },
              { id: "ex58", name: "Ski Erg", reps: 15 },
              { id: "ex59", name: "Chin-Ups", reps: 8 },
              { id: "ex60", name: "Push Jerks", reps: 6 },
              { id: "ex61", name: "Knees to Elbows", reps: 12 },
              { id: "ex62", name: "Overhead Squats", reps: 10 },
              { id: "ex63", name: "Jump Rope", reps: 50 },
              { id: "ex64", name: "Handstand Push-Ups", reps: 8 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod12",
        works: [
          {
            id: "work23",
            title: "for time",
            time: 15,
            exercices: [
              { id: "ex65", name: "Deadlifts", reps: 15 },
              { id: "ex66", name: "Box Jumps", reps: 20 },
              { id: "ex67", name: "Push Press", reps: 10 },
            ],
          },
          {
            id: "rest12",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work24",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex68", name: "Power Snatches", reps: 2 },
              { id: "ex69", name: "Chest-to-Bar Pull-Ups", reps: 3 },
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
        id: "wod13",
        works: [
          {
            id: "work25",
            title: "ot2m",
            time: 16,
            exercices: [
              { id: "ex70", name: "Power Cleans", reps: 4 },
              { id: "ex71", name: "Burpees", reps: 8 },
            ],
          },
          {
            id: "rest13",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work26",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex72", name: "Hang Power Snatches", reps: 2 },
              { id: "ex73", name: "Ring Muscle-Ups", reps: 3 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod14",
        works: [
          {
            id: "work27",
            title: "amrap",
            time: 12,
            exercices: [
              { id: "ex74", name: "Wall Balls", reps: 20 },
              { id: "ex75", name: "Kettlebell Swings", reps: 15 },
              { id: "ex76", name: "Sit-Ups", reps: 10 },
            ],
          },
          {
            id: "rest14",
            title: "rest",
            time: 3,
            exercices: [],
          },
          {
            id: "work28",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex77", name: "Clean and Jerks", reps: 2 },
              { id: "ex78", name: "Bar Muscle-Ups", reps: 3 },
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
        id: "wod15",
        works: [
          {
            id: "work29",
            title: "for time",
            time: 20,
            exercices: [
              { id: "ex79", name: "Squat Cleans", reps: 10 },
              { id: "ex80", name: "Muscle-Ups", reps: 5 },
              { id: "ex81", name: "Overhead Lunges", reps: 20 },
            ],
          },
          {
            id: "rest15",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work30",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex82", name: "Hang Squat Snatches", reps: 2 },
              { id: "ex83", name: "Chest-to-Bar Pull-Ups", reps: 3 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod16",
        works: [
          {
            id: "work31",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex84", name: "Snatch", reps: 3 },
              { id: "ex85", name: "Handstand Push-Ups", reps: 6 },
            ],
          },
          {
            id: "rest16",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work32",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex86", name: "Power Cleans", reps: 2 },
              { id: "ex87", name: "Ring Dips", reps: 3 },
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
        id: "wod17",
        works: [
          {
            id: "work33",
            title: "amrap",
            time: 15,
            exercices: [
              { id: "ex88", name: "Deadlifts", reps: 10 },
              { id: "ex89", name: "Box Jump Overs", reps: 15 },
              { id: "ex90", name: "Dumbbell Snatches", reps: 20 },
            ],
          },
          {
            id: "rest17",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work34",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex91", name: "Hang Power Cleans", reps: 2 },
              { id: "ex92", name: "Toes to Bar", reps: 3 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod18",
        works: [
          {
            id: "work35",
            title: "for time",
            time: 12,
            exercices: [
              { id: "ex93", name: "Thrusters", reps: 21 },
              { id: "ex94", name: "Pull-Ups", reps: 21 },
            ],
          },
          {
            id: "rest18",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work36",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex95", name: "Power Snatches", reps: 2 },
              { id: "ex96", name: "Bar Muscle-Ups", reps: 3 },
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
        id: "wod19",
        works: [
          {
            id: "work37",
            title: "ot2m",
            time: 20,
            exercices: [
              { id: "ex97", name: "Clean and Jerks", reps: 2 },
              { id: "ex98", name: "Toes to Bar", reps: 10 },
            ],
          },
          {
            id: "rest19",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work38",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex99", name: "Hang Squat Cleans", reps: 2 },
              { id: "ex100", name: "Ring Muscle-Ups", reps: 3 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod20",
        works: [
          {
            id: "work39",
            title: "amrap",
            time: 10,
            exercices: [
              { id: "ex101", name: "Rowing", reps: 20 },
              { id: "ex102", name: "Push-Ups", reps: 15 },
              { id: "ex103", name: "Air Squats", reps: 25 },
            ],
          },
          {
            id: "rest20",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work40",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex104", name: "Power Cleans", reps: 2 },
              { id: "ex105", name: "Chest-to-Bar Pull-Ups", reps: 3 },
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
        id: "wod21",
        works: [
          {
            id: "work41",
            title: "for time",
            time: 15,
            exercices: [
              { id: "ex106", name: "Power Snatches", reps: 30 },
              { id: "ex107", name: "Double-Unders", reps: 60 },
            ],
          },
          {
            id: "rest21",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work42",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex108", name: "Hang Power Cleans", reps: 2 },
              { id: "ex109", name: "Bar Muscle-Ups", reps: 3 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod22",
        works: [
          {
            id: "work43",
            title: "ot3m",
            time: 18,
            exercices: [
              { id: "ex110", name: "Front Squats", reps: 5 },
              { id: "ex111", name: "Chest-to-Bar Pull-Ups", reps: 7 },
            ],
          },
          {
            id: "rest22",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work44",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex112", name: "Squat Snatches", reps: 2 },
              { id: "ex113", name: "Ring Muscle-Ups", reps: 3 },
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
        id: "wod23",
        works: [
          {
            id: "work45",
            title: "amrap",
            time: 20,
            exercices: [
              { id: "ex114", name: "Hang Power Cleans", reps: 8 },
              { id: "ex115", name: "Burpees over the bar", reps: 8 },
            ],
          },
          {
            id: "rest23",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work46",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex116", name: "Power Snatches", reps: 2 },
              { id: "ex117", name: "Chest-to-Bar Pull-Ups", reps: 3 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod24",
        works: [
          {
            id: "work47",
            title: "for time",
            time: 12,
            exercices: [
              { id: "ex118", name: "Kettlebell Swings", reps: 50 },
              { id: "ex119", name: "Box Jumps", reps: 40 },
              { id: "ex120", name: "Pull-Ups", reps: 30 },
            ],
          },
          {
            id: "rest24",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work48",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex121", name: "Clean and Jerks", reps: 2 },
              { id: "ex122", name: "Bar Muscle-Ups", reps: 3 },
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
        id: "wod25",
        works: [
          {
            id: "work49",
            title: "ot2m",
            time: 16,
            exercices: [
              { id: "ex123", name: "Squat Snatches", reps: 3 },
              { id: "ex124", name: "Bar Muscle-Ups", reps: 2 },
            ],
          },
          {
            id: "rest25",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work50",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex125", name: "Hang Power Cleans", reps: 2 },
              { id: "ex126", name: "Ring Dips", reps: 3 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod26",
        works: [
          {
            id: "work51",
            title: "amrap",
            time: 15,
            exercices: [
              { id: "ex127", name: "Deadlifts", reps: 12 },
              { id: "ex128", name: "Hand Release Push-Ups", reps: 15 },
              { id: "ex129", name: "Box Step-Ups", reps: 20 },
            ],
          },
          {
            id: "rest26",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work52",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex130", name: "Power Snatches", reps: 2 },
              { id: "ex131", name: "Toes to Bar", reps: 3 },
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
        id: "wod27",
        works: [
          {
            id: "work53",
            title: "for time",
            time: 20,
            exercices: [
              { id: "ex132", name: "Clean and Jerks", reps: 15 },
              { id: "ex133", name: "Ring Dips", reps: 30 },
              { id: "ex134", name: "Wall Balls", reps: 45 },
            ],
          },
          {
            id: "rest27",
            title: "rest",
            time: 4,
            exercices: [],
          },
          {
            id: "work54",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex135", name: "Hang Squat Snatches", reps: 2 },
              { id: "ex136", name: "Chest-to-Bar Pull-Ups", reps: 3 },
            ],
          },
        ],
      },
      {
        title: "wod",
        id: "wod28",
        works: [
          {
            id: "work55",
            title: "ot3m",
            time: 15,
            exercices: [
              { id: "ex137", name: "Thrusters", reps: 7 },
              { id: "ex76", name: "Thrusters", reps: 7 },
              { id: "ex77", name: "Rowing", reps: 15 },
            ],
          },
          {
            id: "rest7",
            title: "rest",
            time: 4,
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
          {
            id: "rest7",
            title: "rest",
            time: 4,
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
          {
            id: "rest7",
            title: "rest",
            time: 4,
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
];
