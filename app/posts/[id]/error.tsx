"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div>
      <h1 className="heading">Post not found.</h1>
      <p className="text-secondary mb-4">
        This post is no longer available. Either the author deleted the post or
        you have the wrong address.
      </p>
      <Link href="/posts" className="underline">
        Back to home
      </Link>
    </div>
  );
}
