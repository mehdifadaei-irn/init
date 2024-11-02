"use client";

import type React from "react";
import { useState } from "react";

import {
  QueryClient,
  QueryClientProvider as RQueryClientProvider,
} from "@tanstack/react-query";

export default function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );
  return (
    <RQueryClientProvider client={queryClient}>{children}</RQueryClientProvider>
  );
}
