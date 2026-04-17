"use client";

import {  useQuery } from "@tanstack/react-query";
import { getMyProperties } from "../../services/property-service/property-service";


export function useGetMyProperties() {
  return useQuery({
    queryKey:["my-properties"],
    queryFn: getMyProperties,
    refetchOnWindowFocus: true
  });
}