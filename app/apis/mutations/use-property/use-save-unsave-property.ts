"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveProperty, unsaveProperty } from "../../services/property-service/property-service";

export function useSaveProperty() {
  const queryClient = useQueryClient();

  const saveMutation = useMutation({
    mutationFn: (propertyId: string) => saveProperty(propertyId),
    onSuccess: (_, propertyId) => {
      queryClient.invalidateQueries({ queryKey: ["save-properties", propertyId] });
      queryClient.invalidateQueries({ queryKey: ["seaech-properties"] });
      queryClient.invalidateQueries({ queryKey: ["current-user"] });
    },
  });

  const unsaveMutation = useMutation({
    mutationFn: (propertyId: string) => unsaveProperty(propertyId),
    onSuccess: (_, propertyId) => {
      queryClient.invalidateQueries({ queryKey: ["save-properties", propertyId] });
      queryClient.invalidateQueries({ queryKey: ["seaech-properties"] });
      queryClient.invalidateQueries({ queryKey: ["current-user"] });
    },
  });

  return {
    save: saveMutation.mutate,
    unsave: unsaveMutation.mutate,
    isSaving: saveMutation.isPending,
    isUnSaving: unsaveMutation.isPending,
  };
}