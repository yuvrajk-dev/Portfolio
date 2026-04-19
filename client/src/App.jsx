import { RouterProvider } from "react-router-dom";
import routes from "./components/routes/Routes";
import ReactLenis from "lenis/react";
import { useEffect } from "react";
import { socket } from "./components/utils/Socket";
import MouseRender from "./components/utils/MouseRender";

// https://webofdevs.com/

function App() {
  useEffect(() => {
    let last = 0;

    const handlemove = (e) => {
      let now = Date.now();

      if (now - last <= 20) return;

      last = now;
      socket.emit("mouse", {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handlemove);
    return () => {
      window.removeEventListener("mousemove", handlemove);
    };
  }, []);

  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.06,
        }}
      >
        <RouterProvider router={routes} />
        <MouseRender />
      </ReactLenis>
    </>
  );
}
// node is even driven arcitechure
export default App;
