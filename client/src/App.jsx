import { RouterProvider } from "react-router-dom";
import routes from "./components/routes/Routes";

// https://webofdevs.com/

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
// node is even driven arcitechure
export default App;
