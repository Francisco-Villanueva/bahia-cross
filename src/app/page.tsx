"use client";
import { MainLayout } from "@/components";
import Provider from "./provider";
import { useBlocksStore } from "@/store/store";

export default function Home() {
  const { blocks } = useBlocksStore();

  return (
    <MainLayout>
      <Provider>
        <h2 className="text-3xl">Bahia cross</h2>
        <div className="space-y-24">
          {blocks.map((block) => (
            <div className=" rounded-md my-2  ">
              <section className="font-bold rounded-t-md  flex justify-between ">
                <div>
                  <span> {new Date(block.day).toDateString()}</span>
                </div>
              </section>
              <div className=" flex items-start   gap-4">
                {block.wods.map((wod) => (
                  <div className="w-full  py-2 rounded-md  bg-white">
                    <div className=" uppercase flex justify-center text-primary font-bold p-2">
                      <h2 className="text-xl">{wod.title}</h2>
                    </div>
                    <section className="">
                      {wod.works.map((work) => (
                        <div className="p-2 space-y-1   rounded-md ">
                          <div
                            className={`flex gap-2 text-lg px-2 ${
                              work.title === "rest"
                                ? "text-orange-600 bg-orange-200 rounded-md  justify-center"
                                : ""
                            }`}
                          >
                            <p className="uppercase ">{work.title}</p>
                            <p>{work.time}'</p>
                          </div>

                          {work.exercices.length === 0 ? null : <hr />}
                          <div className="px-4">
                            {work.exercices.map((exercice) => (
                              <div className="flex gap-2">
                                <p> {exercice.reps}</p>
                                <p> {exercice.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </section>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Provider>
    </MainLayout>
  );
}
