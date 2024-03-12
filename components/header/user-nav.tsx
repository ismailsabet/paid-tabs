"use client";

import { useRouter } from "next/navigation";

export default function UserNav() {
  const router = useRouter();
  const userObj = localStorage.getItem("user");

  if (!userObj) return;

  const user = JSON.parse(userObj);

  const handleClick = () => {
    localStorage.removeItem("user");
    router.refresh();
  };

  return (
    <nav className="header-content">
      <span className="font-bold text-sm">Welcome {user.username}</span>
      <button
        type="button"
        className="btn primary sm text-sm"
        onClick={handleClick}
      >
        Sign out
      </button>
    </nav>
  );
}
