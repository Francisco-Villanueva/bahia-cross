export const TITLE_VALUES = [
  "otm",
  "ot2m",
  "ot3m",
  "amrap",
  "time cap",
  "for time",
  "rest",
] as const;
export type IWodType = (typeof TITLE_VALUES)[number];

export type IExercice = {
  name: string;
  reps: number;
  video?: string;
  description?: string;
  id: string;
};

export type IWork = {
  exercices: IExercice[];
  title: IWodType;
  time: number;
  percent?: number;
  id: string;
};

export type IWod = {
  works: IWork[];
  id: string;
  title: string;
};

export type IBlock = {
  wods: IWod[];
  day: string;
  id: string;
};
