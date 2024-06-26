"use client";

import { postsAtom } from "@/atoms/user-atom";
import { useAtomValue } from "jotai";
import PostCard from "../post-card";

function Posts() {
  const posts = useAtomValue(postsAtom);

  return (
    <div className="flex flex-col items-center space-y-4 max-w-2xl">
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
