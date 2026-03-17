"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadProperty } from "../../services/property-service/property-service";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useUploadProperty() {

  const queryClient = useQueryClient();
    const router = useRouter();
  return useMutation({
    mutationFn: (data: FormData) => uploadProperty(data),

    onSuccess: (data) => {
      toast.success(data.message)
      // refresh agent properties list

      queryClient.invalidateQueries({
        queryKey: ["my-properties"],
      });
      router.back();
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

}