"use client";

import { useEffect, useState } from "react";
import Login from "./login";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  if (!localStorage.getItem("user")) {
    return <Login />;
  }

  return children;
}
