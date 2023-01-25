import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Homes from "./routes/Home";
import NotFound from "./routes/NotFound";

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
    ],
  },
]);

export default router;
