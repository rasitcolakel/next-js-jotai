"use client";

import { Post } from "@/atoms/user-atom";
import PostCard from "../post-card";
import Header from "./header";

type Props = {
  posts: Post[];
};

function AsyncPostList({ posts }: Props) {
  return (
    <div className="flex flex-col items-center space-y-4 max-w-2xl">
      <Header />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default AsyncPostList;
