"use client";
import { getPostsAtom } from "@/atoms/async-atom";
import { useAtom } from "jotai";
import React from "react";
import AsyncPostList from "./posts";
import Pagination from "./pagination";

type Props = {};

export default function AsyncAtomPage({}: Props) {
  const [response] = useAtom(getPostsAtom);

  if (response.state === "loading") {
    return <div>Loading...</div>;
  }

  if (response.state === "hasError") {
    if (response.error instanceof Error) {
      return <div>{response.error.message}</div>;
    } else {
      return <div>Unknown error</div>;
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <AsyncPostList posts={response.data} />
      <Pagination />
    </div>
  );
}
