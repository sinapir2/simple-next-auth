"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page immediately
    router.replace("/login");
  }, [router]);

  return (
    <div className="min-h-screen bg-subtle-gradient flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground">در حال هدایت...</div>
    </div>
  );
}
