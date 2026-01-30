// Central QueryClient configuration (TanStack Query v5)

import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,        // Data is fresh for 1 minute
      gcTime: 1000 * 60 * 5,       // Cache is garbage-collected after 5 minutes
      refetchOnWindowFocus: true  // Background refetch on tab focus
    }
  }
})
