import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/login";
import SignIn from "./pages/SignIn";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* with navbar */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<SignIn />} />
        </Route>
        {/* links */}
        <Route></Route>
      </>
    )
  );
  return <RouterProvider router={myRoute} />;
};

export default App;
