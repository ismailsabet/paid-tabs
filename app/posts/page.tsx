import PostList from "@/app/posts/list";
import { getPosts } from "@/lib/queries";
import { Post } from "@/lib/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All posts",
  description: "List of all posts",
};

export default async function Posts() {
  const posts = (await getPosts()) as Post[];

  return (
    <>
      <h1 className="heading">Latest posts</h1>
      <PostList posts={posts} />
    </>
  );
}
