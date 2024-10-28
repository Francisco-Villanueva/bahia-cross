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
        <div className="flex flex-col ml-36 mr-36">
          <div className="flex text-3xl text-[#1f336d] space-x-24 ml-4" >
            <img src="favicon.ico" alt="" />
            <h2 className="">Bahia cross</h2>
          </div>
          <div className="flex flex-col">
            {blocks.map((block) => (
              <div className=" rounded-md my-2 ">
                <section className="font-bold rounded-t-md  flex justify-between">
                  <div className="flex justify-center items-center pl-2 ml-2">
                    <span> {new Date(block.day).toDateString()}</span>
                  </div>
                </section>
                <div className="flex justify-center">
                  <Block key={block.id} block={block} />
                </div>
              </div>
            ))[5]}
          </div>
        </div>
      </Provider>
    </MainLayout>
  );
}