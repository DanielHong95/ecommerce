import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HomePage from "./pages/homepage/homepage";
import FavoritesPage from "./pages/favoritespage/favoritespage";
// import AccountPage from "./pages/accountpage/accountpage";
import CartPage from "./pages/cartpage/cartpage";
import ProductPage from "./pages/productpage/productpage";
import ProductInfoPage from "./pages/productinfopage/productinfopage";
import AccountPage2 from "./pages/accountpage/accountpage2";

function App() {
  const checkAuthenticated = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = { headers: { jwt_token: token } };
      const res = await axios.post(
        "http://localhost:5000/users/verify",
        {},
        headers
      );
      const parseRes = res.data;
      parseRes ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    checkAuthenticated();
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/favorites" element={<FavoritesPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/account" element={<AccountPage2 />} />
          <Route exact path="/content/:linkUrl" element={<ProductPage />} />
          <Route
            exact
            path="/content/:linkUrl/:id"
            element={<ProductInfoPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
