import { createBrowserRouter } from "react-router-dom";
import CreateAccount from "../pages/create-account";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateAccount />,
  },
]);
