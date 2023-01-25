import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Homes from "./routes/Home";
import NotFound from "./routes/NotFound";
import RoomDetail from "./routes/RoonDetail";

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
        path: "rooms/:roomPk",
        element: <RoomDetail />,
      },
    ],
  },
]);

export default router;
