"use client";
import { blocks } from "@/mocks";
import { useBlocksStore } from "@/store/store";
import React, { Fragment, PropsWithChildren, useEffect } from "react";

export default function Provider({ children }: PropsWithChildren) {
  const { setBlocks } = useBlocksStore();

  useEffect(() => {
    setBlocks(blocks);
  }, []);
  return <Fragment>{children}</Fragment>;
}