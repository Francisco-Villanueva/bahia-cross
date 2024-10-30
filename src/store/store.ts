import { create } from "zustand";
import { IBlock } from "@/types";

interface IStore {
  blocks: IBlock[];
  setBlocks: (data: IBlock[]) => void;
  getBlockByDay: (day: string) => IBlock | undefined;
}

export const useBlocksStore = create<IStore>((set, get) => ({
  blocks: [],
  setBlocks: (blocks) => set(() => ({ blocks })),
  getBlockByDay: (day) => {
    const { blocks } = get();
    return blocks.find(
      (block) => block.day.split("T")[0] === day.split("T")[0]
    );
  },
}));