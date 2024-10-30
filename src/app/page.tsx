
"use client";
import { MainLayout } from "@/components";
import Provider from "./provider";
import { useBlocksStore } from "@/store/store";
import Block from "@/components/block";
import Image from "next/image";

export default function Home() {
  const { blocks } = useBlocksStore();

  return (
    <MainLayout>
      <Provider>
        <div className="flex flex-col mx-36">
          <div className="flex text-3xl text-[#1f336d] gap-24 ml-4" >
            <Image src="/favicon.ico" alt="" width={42} height={42} />
            <h2 className="">Bahia cross</h2>
          </div>
          <div className="flex flex-col">
            {blocks.map((block) => (
              <div key={block.id} className=" rounded-md my-2 ">
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
