import { createBrowserRouter } from "react-router-dom";
import CreateAccount from "../pages/create-account";
import LinkFacebook from "../pages/link-facebook";
import ClickSubmit from "../pages/click-submit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateAccount />,
  },
  {
    path: "/link-facebook",
    element: <LinkFacebook />,
  },
  {
    path: "/click-submit",
    element: <ClickSubmit />,
  },
]);
