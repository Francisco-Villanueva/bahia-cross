import { MainLayout } from "@/components";

type IExercice = {
  name: string;
  video?: string;
  description?: string;
  id?: string;
};

type IBLock = {
  exercice: IExercice;
  duration: number;
  percent?: number;
  id: string;
};
type IWodType = "otm" | "ot2m" | "ot3m" | "amrap" | "time cap";
type IWodPart = {
  blocks: IBLock[];
  type: IWodType;
  title: string;
  duration: number;
  id: string;
};
export default function Home() {
  const exercice: IExercice = {
    name: "BMU",
  };
  const block: IBLock = {
    duration: 1,
    exercice,
    id: "tuMama",
    percent: 60,
  };
  const wodPart: IWodPart = {
    blocks: [{ ...block }],
    duration: 6,
    id: "asdasdasdas",
    title: "OLY",
    type: "ot2m",
  };

  const test: IWodPart[] = [wodPart];
  return (
    <MainLayout>
      <h2>Bahia cross</h2>
      {test.map((value) => (
        <div className="bg-gray-100  text-primary rounded-md p-4">
          <b className="text-3xl">{value.title}</b>

          <hr />
          <b className="uppercase">{value.type}</b>
          <p>{value.duration}</p>
          <div>
            {value.blocks.map((block) => (
              <div>
                <p>{block.exercice.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </MainLayout>
  );
}
