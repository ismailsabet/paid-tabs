import { BASE_URL } from "@/lib/constants";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function CreateCommentForm() {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!comment.trim()) {
      setError("Please provide a valid comment.");
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
        // postId: Number(id),
        name: user.username,
        email: user.username,
        body: "Hello world",
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(text);

      setError("Fetch failed!");
      return;
    }

    const newComment = await res.json();

    setError("");
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
      <button type="submit">Submit</button>
    </form>
  );
}
