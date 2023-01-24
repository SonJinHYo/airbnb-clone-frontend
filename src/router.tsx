import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Homes from "./routes/Home";
import NotFound from "./routes/NotFound";
import Users from "./routes/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Homes />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
