"use client";

import { Post } from "@/lib/types";
import { useState } from "react";
import Pagination from "../../components/pagination";
import PostCard from "./card";

interface PropTypes {
  posts: Post[];
}

export default function PostList({ posts }: PropTypes) {
  const [offset, setOffset] = useState(25);
  const [query, setQuery] = useState("");

  const filteredPosts = query
    ? posts.filter((p) => p.title.includes(query))
    : posts;

  const cards = filteredPosts
    .slice(0, offset)
    .map((post) => <PostCard key={post.id} post={post} />);

  return (
    <>
      <div className="mb-6">
        <input
          type="text"
          className="input"
          placeholder="Search by post title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {posts.length === 0 && <p>No posts yet!</p>}
      {posts.length && filteredPosts.length === 0 && (
        <p>
          We couldn&apos;t find any results that match <b>{query}</b>.
        </p>
      )}
      <div className="posts-grid">{cards}</div>
      <Pagination setOffset={setOffset} />
    </>
  );
}
