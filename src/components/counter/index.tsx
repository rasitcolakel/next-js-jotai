"use client";

import { counterAtom } from "@/atoms/counter-atom";
import { useAtom } from "jotai";
import CounterChild from "./child";

function CounterPage() {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>Counter Example</h1>
      <div>{count}</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount((c) => c - 1)}
      >
        Decrement
      </button>

      <div className="w-full h-1 bg-gray-200"></div>
      <CounterChild />
    </div>
  );
}

export default CounterPage;
