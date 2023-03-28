import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 10000,
    },
  },
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {/* devtools */}
      <App />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </BrowserRouter>
  </QueryClientProvider>
);
