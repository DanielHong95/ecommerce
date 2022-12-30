import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import FavoritesPage from "./pages/favoritespage/favoritespage";
import AccountPage from "./pages/accountpage/accountpage";
import CartPage from "./pages/cartpage/cartpage";
import ProductPage from "./pages/productpage/productpage";
import ProductInfoPage from "./pages/productinfopage/productinfopage";

function App() {
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
