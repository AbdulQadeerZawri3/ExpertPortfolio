import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Personal from "./components/Personal";
import Resume from "./components/Resume";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <><Navbar/><Main/></>
      },
      {
        path: "/resume",
        element:<><Navbar/><Resume/></> },
      {
        path: "/personal",
        element: <><Navbar/><Personal/></>
      }
    ]
  )
  return (
    <div >
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
