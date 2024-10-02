import "./App.css";

// todo react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// todo pages
import Sms from "./pages/sms";
import Login from "./pages/login";

import RootLayout from "./layout/RootLayout";
import Seanse from "./pages/seanse";
import Profil from "./pages/profil";
import OneSeansePage from "./pages/oneSeansePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Modal from "./components/modal/modal";

const queryClient = new QueryClient();

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sms",
      element: <Sms />,
    },

    {
      path: "/seanse",
      element: <Seanse />,
    },

    {
      path: "/seanse/:id",
      element: <OneSeansePage />,
    },
    {
      path: "/profil",
      element: <Profil />,
    },

    {
      path: "/modal",
      element: <Modal />,
    },
  ]);
  return (
    <div className="container mx-auto max-w-[1360px] p-5 min-h-[100vh] text-white flex flex-col ">
      <QueryClientProvider client={queryClient}>
        {/* <Main />
      <Product /> */}
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
