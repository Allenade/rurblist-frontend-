"use client";

import { useEffect } from "react";
import { listenForAuthChanges } from "@/shared/utils/auth-channel";
import { useRouter } from "next/navigation";

export default function AuthListener() {
  const router = useRouter();

  useEffect(() => {
    listenForAuthChanges(() => {
      router.push("/login");
    });
  }, [router]);

  return null;
}
