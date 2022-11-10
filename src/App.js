import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Dashboard,
  Error,
  Home,
  Login,
  Products,
  SingleProduct,
} from "./pages";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { SharedLayout } from "./pages/SharedLayout";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productID" element={<SingleProduct />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute> // important
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
