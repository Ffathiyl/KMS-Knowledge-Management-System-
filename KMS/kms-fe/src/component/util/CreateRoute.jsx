import { lazy } from "react";

const Beranda = lazy(() => import("../page/beranda/Root"));

const routeList = [
  {
    path: "/",
    element: <Beranda />,
  },
];

export default routeList;
