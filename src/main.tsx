import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./pages/Contact.tsx";
import destroyAction from "./pages/Destroy.tsx";
import EditContact, { action as editActioo } from "./pages/Edit.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Index from "./pages/Index.tsx";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./pages/Root.tsx";
import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            action: contactAction,
            loader: contactLoader,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            // should create a new loader per page; copying for simplicity
            loader: contactLoader,
            action: editActioo,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error editing the user.</div>,
          },
        ],
      },
    ],
  },
]);

// alternatively, can be done using JSX
// import {
//   createRoutesFromElements,
//   createBrowserRouter,
//   Route,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       path="/"
//       element={<Root />}
//       loader={rootLoader}
//       action={rootAction}
//       errorElement={<ErrorPage />}
//     >
//       <Route errorElement={<ErrorPage />}>
//         <Route index element={<Index />} />
//         <Route
//           path="contacts/:contactId"
//           element={<Contact />}
//           loader={contactLoader}
//           action={contactAction}
//         />
//         <Route
//           path="contacts/:contactId/edit"
//           element={<EditContact />}
//           loader={contactLoader}
//           action={editAction}
//         />
//         <Route path="contacts/:contactId/destroy" action={destroyAction} />
//       </Route>
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
