import { RouterProvider } from "react-router-dom";
import routes from "./components/routes/Routes";
import ReactLenis from "lenis/react";

// https://webofdevs.com/

function App() {
  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.06,
        }}
      >
        <RouterProvider router={routes} />
      </ReactLenis>
    </>
  );
}
// node is even driven arcitechure
export default App;
