import { createBrowserRouter } from "react-router-dom";
import CreateAccount from "../pages/create-account";
import LinkFacebook from "../pages/link-facebook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateAccount />,
  },
  {
    path: "/link-facebook",
    element: <LinkFacebook />,
  },
]);
