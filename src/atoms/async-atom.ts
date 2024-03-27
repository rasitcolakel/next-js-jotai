import { atom } from "jotai";
import { loadable } from "jotai/utils";
import { Post } from "./user-atom";

export const postsPaginationAtom = atom({
  start: 0,
  limit: 5,
});

const postsAtom = atom<Promise<Post[]>>(async (get) => {
  // when the pagination changes, this atom will be re-evaluated
  const pagination = get(postsPaginationAtom);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${pagination.start}&_limit=${pagination.limit}`
  );

  const data = await response.json();

  return data;
});

export const getPostsAtom = loadable(postsAtom);
