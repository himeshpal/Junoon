import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    // errorElement: <Error />,
  },
]);

export default appRouter;
