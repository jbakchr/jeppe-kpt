import { RouterProvider } from "react-router-dom";

import { router } from "./pages/routehandler";
import { ResponseProvider } from "./context/ResponseContext";

function App() {
  return (
    <ResponseProvider>
      <RouterProvider router={router} />
    </ResponseProvider>
  );
}

export default App;
