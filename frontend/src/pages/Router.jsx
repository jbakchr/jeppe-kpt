import { createBrowserRouter } from "react-router-dom";

import { Homepage } from "./Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

export { router };
