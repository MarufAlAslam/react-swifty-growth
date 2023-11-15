import { createBrowserRouter } from "react-router-dom";
import CreateAccount from "../pages/create-account";
import LinkFacebook from "../pages/link-facebook";
import ClickSubmit from "../pages/click-submit";
import Congratulations from "../pages/congratulations";
import CreditCard from "../pages/credit-card";

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
  {
    path: "/congratulations",
    element: <Congratulations />,
  },
  {
    path: "/credit-card",
    element: <CreditCard />,
  },
  {
    path: "*",
    element: "Page not found",
  },
]);
