import { create } from "zustand";
import { IBlock } from "@/types";
interface IStore {
  blocks: IBlock[];
  setBlocks: (data: IBlock[]) => void;
}

export const useBlocksStore = create<IStore>((set) => ({
  blocks: [],
  setBlocks: (blocks) => set(() => ({ blocks })),
}));
