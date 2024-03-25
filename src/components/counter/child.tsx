"use client";
import { counterAtom } from "@/atoms/counter-atom";
import { useAtomValue, useSetAtom } from "jotai";

function CounterChild() {
  const count = useAtomValue(counterAtom);
  const setCount = useSetAtom(counterAtom);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>Counter Child Example</h1>
      <div>{count}</div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterChild;
