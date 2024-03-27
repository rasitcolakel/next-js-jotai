import { postsPaginationAtom } from "@/atoms/async-atom";
import { useAtom } from "jotai";
import React from "react";

type Props = {};

const Pagination = (props: Props) => {
  const [pagination, setPagination] = useAtom(postsPaginationAtom);

  const handleNext = () => {
    setPagination({ ...pagination, start: pagination.start + 1 });
  };

  const handlePrevious = () => {
    setPagination({ ...pagination, start: pagination.start - 1 });
  };

  return (
    <div className="flex flex-row items-center space-x-4 p-2 mb-4">
      <button
        onClick={handlePrevious}
        disabled={pagination.start === 0}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>Page: {pagination.start + 1}</span>
      <button
        onClick={handleNext}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
