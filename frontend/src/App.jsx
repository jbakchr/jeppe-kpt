import { RouterProvider } from "react-router-dom";

import { router } from "./pages/Router";
import { ResponseProvider } from "./context/ResponseContext";

function App() {
  return (
    <ResponseProvider>
      <RouterProvider router={router} />
    </ResponseProvider>
  );
}

export default App;
