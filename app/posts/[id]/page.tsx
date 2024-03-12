import { getComments, getPost, getPosts } from "@/lib/queries";
import type { Comment, Post } from "@/lib/types";
import postImg from "@/public/post.jpg";
import { ChevronLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Comments from "./comments";

interface PropTypes {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: PropTypes): Promise<Metadata> {
  const post = (await getPost(params.id)) as Post;

  return {
    title: post.title,
  };
}

export async function generateStaticParams() {
  const posts = (await getPosts()) as Post[];

  return posts.map((p) => ({
    id: String(p.id),
  }));
}

export default async function Post({ params }: PropTypes) {
  const post = (await getPost(params.id)) as Post;
  const comments = (await getComments(params.id)) as Comment[];

  return (
    <>
      <div className="mb-4">
        <Link href="/posts" className="btn secondary sqr-sm">
          <ChevronLeftIcon size={16} />
        </Link>
      </div>
      <h1 className="heading capitalize mb-1">{post.title}</h1>
      <div className="mb-6 text-secondary text-sm">3 days ago</div>
      <p className="mb-6">{post.body}</p>
      <div className="post-img mb-6">
        <Image src={postImg} alt="Post image" fill />
      </div>
      <Comments comments={comments} />
    </>
  );
}
