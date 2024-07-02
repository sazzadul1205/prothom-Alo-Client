import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../Layouts/PublicLayout";
import Home from "../Pages/Home/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout></PublicLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
    ]
    },
  ]);