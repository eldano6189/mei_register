import Fleet from "../pages/fleet";
import Home from "../pages/home";
import Login from "../pages/login";
import Notes from "../pages/notes";

export const PageRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/fleet",
    component: <Fleet />,
  },
  {
    path: "/notes",
    component: <Notes />,
  },
  {
    path: "/references",
    component: null,
  },
  {
    path: "/login",
    component: <Login />,
  },
];
