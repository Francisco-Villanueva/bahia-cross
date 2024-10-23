"use client";
import { MainLayout } from "@/components";
import Provider from "./provider";
import { useBlocksStore } from "@/store/store";
import Block from "@/components/block";

export default function Home() {
  const { blocks } = useBlocksStore();

  return (
    <MainLayout>
      <Provider>
        <h2 className="text-3xl">Bahia cross</h2>
        <div className="space-y-24">
          {blocks.map((block) => (
            <div className=" rounded-md my-2  ">
              <section className="font-bold rounded-t-md  flex justify-between underline">
                <div>
                  <span> {new Date(block.day).toDateString()}</span>
                </div>
              </section>
              <div className="flex bg-slate-600">
                <Block key={block.id} block={block} />
              </div>
            </div>
          ))}
        </div>
      </Provider>
    </MainLayout>
  );
}
