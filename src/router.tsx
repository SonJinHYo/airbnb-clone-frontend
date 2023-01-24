import { createBrowserRouter } from "react-router-dom"
import Root from "./components/Root"
import Homes from "./components/routes/Home";
import NotFound from "./components/routes/NotFound";
import Users from "./components/routes/Users";

const router = createBrowserRouter([{
    path:"/",
    element:<Root/>,
    errorElement:<NotFound/>,
    children:[
        {
            path:"",
            element:<Homes/>,
        },
        { 
            path:"users",
            element:<Users/>,
        },
    ],
},])

export default router;