import { createBrowserRouter } from "react-router-dom";
import { HelloPage, RegistrationPage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HelloPage />,
  },
  {
    path: "/reg",
    element: <RegistrationPage />,
  },
]);
