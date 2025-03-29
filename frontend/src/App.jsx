import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* with navbar */}
        <Route element={<RootLayout />}>
          <Route index element={<d />} />
          <Route path="" element={<d />} />
        </Route>
        {/* links */}
        <Route></Route>
      </>
    )
  );
  return <RouterProvider router={myRoute} />;
};

export default App;
