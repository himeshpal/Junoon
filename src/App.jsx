import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Donate from "./pages/Donate";
import Blogs from "./pages/Blogs";
import Blogdetail from "./components/Blogdetail";
import Work from "./pages/Work";
import Other from "./pages/Other";
import Events from "./pages/Events";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
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
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <Blogdetail />,
      },
      {
        path: "/work/education",
        element: <Work />,
      },
      {
        path: "/work/health-groceries",
        element: <Other />,
      },
      {
        path: "/work/events",
        element: <Events />,
      },
    ],
    // errorElement: <Error />,
  },
]);

export default appRouter;
