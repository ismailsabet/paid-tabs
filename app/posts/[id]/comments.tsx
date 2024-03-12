"use client";

import type { Comment } from "@/lib/types";
import CreateCommentForm from "./form";
import { useState } from "react";

interface PropTypes {
  comments: Comment[];
}

export default function Comments({ comments }: PropTypes) {
  const [allComments, setComments] = useState(comments);

  const items = allComments.map((item, index) => (
    <li key={index} className="mb-6">
      <div className="mb-4 text-sm">
        <b className="capitalize mr-2">{item.name}</b>
        <span className="text-secondary">Mar 12, 2024</span>
      </div>
      <p>{item.body}</p>
    </li>
  ));

  return (
    <>
      <h2 className="heading">Comments</h2>
      <CreateCommentForm setComments={setComments} />
      <ul>{items}</ul>
    </>
  );
}
