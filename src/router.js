import { createBrowserRouter } from "react-router-dom";
import { HelloPage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HelloPage />,
  },
  {
    path: "/reg",
    element: <div>REGISTRATION!</div>,
  },
]);
