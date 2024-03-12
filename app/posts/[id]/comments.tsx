"use client";

import type { Comment } from "@/lib/types";
import CreateCommentForm from "./form";

interface PropTypes {
  comments: Comment[];
}

export default function Comments({ comments }: PropTypes) {
  const items = comments.map((item) => (
    <li key={item.id} className="mb-6">
      <div className="mb-4 text-sm">
        <b className="lowercase mr-2">{item.email}</b>
        <span className="text-secondary">Feb 16, 2024</span>
      </div>
      <p>{item.body}</p>
    </li>
  ));

  return (
    <>
      <h2 className="heading">Comments</h2>
      <CreateCommentForm />
      <ul>{items}</ul>
    </>
  );
}
