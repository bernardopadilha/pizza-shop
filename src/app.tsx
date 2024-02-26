import "./global.css";
import { router } from "./routes";
import { Toaster } from 'sonner'
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from '@tanstack/react-query'

import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./components/theme/theme-provider";
import { queryClient } from "./lib/react-query";


export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
