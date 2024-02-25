import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ArticleExample from "./routes/ArticleExample.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import FullExample from "./routes/FullExample.tsx";
import GridExamples from "./routes/GridExamples.tsx";
import HeaderAndCardExample from "./routes/HeaderAndCardExample.tsx";
import Menu from "./routes/Menu.tsx";
import PluginsExample from "./routes/PluginsExample.tsx";
import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Menu /> },
      {
        path: "/grid_examples_one",
        element: <GridExamples />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/full_example_one",
        element: <FullExample />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/header_and_card_example",
        element: <HeaderAndCardExample />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/article_example",
        element: <ArticleExample />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/plugins_example",
        element: <PluginsExample />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
