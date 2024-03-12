import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import postImg from "@/public/post.jpg";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={"/posts/" + post.id} key={post.id} className="post-card">
      <div className="post-card-img">
        <Image
          src={postImg}
          alt="Post default image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
        />
      </div>
      <div className="post-card-body">
        <h3 className="post-card-title line-clamp-2">{post.title}</h3>
        <div className="text-secondary text-sm mb-2">3 days ago</div>
        <p className="line-clamp-2 text-sm">{post.body}</p>
      </div>
    </Link>
  );
}
