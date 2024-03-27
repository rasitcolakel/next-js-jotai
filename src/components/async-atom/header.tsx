import { postsPaginationAtom } from "@/atoms/async-atom";
import { useAtom } from "jotai";
import React from "react";

type Props = {};

const limits = [5, 10, 15, 20];

export default function Header({}: Props) {
  const [pagination, setPagination] = useAtom(postsPaginationAtom);

  const onLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPagination({ ...pagination, limit: parseInt(e.target.value), start: 0 });
  };

  return (
    <div className="flex flex-row items-center space-x-4 p-2 mb-4 w-full justify-between">
      <h1>Posts</h1>
      <select
        value={pagination.limit}
        onChange={onLimitChange}
        className="font-bold py-2 px-4 rounded border border-gray-300"
      >
        {limits.map((limit) => (
          <option key={limit} value={limit}>
            {limit}
          </option>
        ))}
      </select>
    </div>
  );
}
