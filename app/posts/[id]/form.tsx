import { BASE_URL } from "@/lib/constants";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function CreateCommentForm() {
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
        email: user.username,
        body: "Hello world",
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

    console.log(newComment);

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
