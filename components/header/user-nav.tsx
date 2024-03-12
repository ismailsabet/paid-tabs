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
    <div className="header-content h-full">
      <nav className="user-nav">
        <span className="font-bold text-sm">Welcome {user.username}</span>
        <button
          type="button"
          className="btn primary sm text-sm"
          onClick={handleClick}
        >
          Sign out
        </button>
      </nav>
    </div>
  );
}
