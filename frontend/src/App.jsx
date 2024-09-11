import { RouterProvider } from "react-router-dom";

import { router } from "./pages/router";
import { ResponseProvider } from "./context/ResponseContext";

function App() {
  return (
    <ResponseProvider>
      <RouterProvider router={router} />
    </ResponseProvider>
  );
}

export default App;
