import { createBrowserRouter } from "react-router-dom";

import { Homepage } from "./HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

export { router };
