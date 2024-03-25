"use client";

import { postsAtom } from "@/atoms/user-atom";
import { useAtomValue } from "jotai";

function Posts() {
  const posts = useAtomValue(postsAtom);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col items-center space-y-4">
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
