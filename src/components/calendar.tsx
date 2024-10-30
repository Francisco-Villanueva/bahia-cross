"use client";

import { Calendar } from "@/components/ui/calendar";
import { useBlocksStore } from "@/store/store";
import { IBlock } from "@/types";
import { useEffect, useState } from "react";

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { getBlockByDay } = useBlocksStore();
  const [block, setBLock] = useState<IBlock>();
  useEffect(() => {
    if (!date) return;
    const res = getBlockByDay(date.toISOString());
    setBLock(res);
  }, [date]);
  return (
    <div className="flex  items-start gap-4 outline h-full ">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        weekStartsOn={1}
        className="rounded-md border"
      />
      <>
        {block && (
          <div className=" rounded-md my-2  w-full ">
            <div className=" flex flex-col items-start   gap-4">
              {block.wods.map((wod) => (
                <div key={wod.id} className="w-full  py-2 rounded-md  bg-white">
                  <div className=" uppercase flex justify-center text-primary font-bold p-2">
                    <h2 className="text-xl">{wod.title}</h2>
                  </div>
                  <section className="">
                    {wod.works.map((work) => (
                      <div key={work.id} className="p-2 space-y-1   rounded-md ">
                        <div
                          className={`flex gap-2 text-lg px-2 ${work.title === "rest"
                            ? "text-orange-600 bg-orange-200 rounded-md  justify-center"
                            : ""
                            }`}
                        >
                          <p className="uppercase ">{work.title}</p>
                          <p>{work.time}&apos;</p>
                        </div>

                        {work.exercices.length === 0 ? null : <hr />}
                        <div className="px-4">
                          {work.exercices.map((exercice) => (
                            <div key={exercice.id} className="flex gap-2">
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
        )}
      </>
    </div>
  );
}