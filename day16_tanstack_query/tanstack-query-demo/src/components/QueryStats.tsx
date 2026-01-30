// Shows cache information

import { useQueryClient } from '@tanstack/react-query'

export default function QueryStats() {
  const client = useQueryClient()

  return (
    <pre>
      Cached Queries: {client.getQueryCache().getAll().length}
    </pre>
  )
}
