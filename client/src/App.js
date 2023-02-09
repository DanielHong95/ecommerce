import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/userContext";

import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HomePage from "./pages/homepage/homepage";
import FavoritesPage from "./pages/favoritespage/favoritespage";
import AccountPage from "./pages/accountpage/accountpage";
import CartPage from "./pages/cartpage/cartpage";
import ProductPage from "./pages/productpage/productpage";
import ProductInfoPage from "./pages/productinfopage/productinfopage";

function App() {
  const [user, setUser] = useState(null);

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, loginUser, logoutUser }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/favorites" element={<FavoritesPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/account" element={<AccountPage />} />
          <Route exact path="/content/:linkUrl" element={<ProductPage />} />
          <Route
            exact
            path="/content/:linkUrl/:id"
            element={<ProductInfoPage />}
          />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
