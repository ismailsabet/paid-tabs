import { BASE_URL } from "@/lib/constants";
import type { Comment } from "@/lib/types";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

interface PropTypes {
  setComments: Dispatch<SetStateAction<Comment[]>>;
}

export default function CreateCommentForm({ setComments }: PropTypes) {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPending(true);

    if (!comment.trim()) {
      setError("Please provide a valid comment.");
      setPending(false);
      return;
    }

    const userObj = localStorage.getItem("user");

    if (!userObj) {
      setError("Please login before leaving a comment.");
      return;
    }

    const user = JSON.parse(userObj);

    const res = await fetch(BASE_URL + "/api/comments", {
      method: "POST",
      body: JSON.stringify({
        postId: Number(id),
        name: user.username,
        body: comment,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!res.ok) {
      const text = await res.text();
      setError(text);
      setPending(false);
      return;
    }

    const newComment = await res.json();

    setComments((prev) => [newComment, ...prev]);

    setError("");
    setPending(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-2">
        <textarea
          className="input w-full textarea"
          placeholder="Add to the discussion"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
      </div>
      <button type="submit" className="btn dark sm text-sm">
        <span>Submit</span>
        {pending && <span className="spinner" />}
      </button>
    </form>
  );
}
