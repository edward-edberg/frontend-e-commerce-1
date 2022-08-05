import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home, Login, Products, ShareLayout } from "./pages";

function App() {
  // const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
