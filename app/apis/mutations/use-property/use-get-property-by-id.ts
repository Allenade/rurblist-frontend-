"use client";

import { useQuery } from "@tanstack/react-query";
import { getPropertyById } from "../../services/property-service/property-service";


export function useGetPropertyById(id: string) {

  return useQuery({
    queryKey: ["propertyId", id],
    queryFn: () => getPropertyById(id),
    enabled: !!id,
    refetchOnWindowFocus: true
  });

}