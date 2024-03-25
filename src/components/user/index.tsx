"use client";

import { Post, userAtom } from "@/atoms/user-atom";
import { useAtom } from "jotai";
import Posts from "./posts";

function UserPage() {
  const [user, setUser] = useAtom(userAtom);

  const fetchPosts = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    const posts = (await response.json()) as Post[];
    setUser((prev) => ({ ...prev, posts }));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>User Example</h1>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchPosts}
      >
        Fetch Posts
      </button>
      <Posts />
    </div>
  );
}

export default UserPage;
