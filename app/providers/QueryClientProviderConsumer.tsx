'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient({

  defaultOptions: {
    queries: {
      networkMode: 'offlineFirst',
    },

    mutations: {
      networkMode: 'offlineFirst',
    },
  }
})

const QueryClientProviderConsumer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </>
  )
}

export default QueryClientProviderConsumer
