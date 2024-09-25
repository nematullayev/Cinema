import "./App.css";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import Product from "./components/products/product";

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
  ]);
  return (
    <div className="container mx-auto max-w-[1360px] p-5 min-h-[100vh] text-white flex flex-col ">
      {/* <Main />
      <Product /> */}
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
