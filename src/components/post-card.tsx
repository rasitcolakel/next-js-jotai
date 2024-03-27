import { Post } from "@/atoms/user-atom";
import React from "react";

type Props = {
  post: Post;
};

const PostCard = (props: Props) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h1 className="text-lg font-bold">{props.post.title}</h1>
      <p>{props.post.body}</p>
    </div>
  );
};

export default PostCard;
