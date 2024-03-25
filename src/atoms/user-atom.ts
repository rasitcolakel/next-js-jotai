import { atom } from "jotai";
import { selectAtom } from "jotai/utils";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type User = {
  name: string;
  email: string;
  posts: Post[];
};

export const userAtom = atom<User>({
  name: "John Doe",
  email: "johndoe@example.com",
  posts: [],
});

export const postsAtom = selectAtom(userAtom, (user) => user.posts);
