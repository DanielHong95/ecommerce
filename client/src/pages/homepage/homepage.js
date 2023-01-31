import HomeItems from "../../components/homeitems/homeitems.js";
import ProductCarousel from "../../components/productcarousel/productcarousel";
import { useContext } from "react";
import { UserContext } from "../../context/userContext.js";

function HomePage() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div>{user ? `Welcome, ${user.email}` : "Please login"}</div>
      <ProductCarousel />
      <HomeItems />
    </div>
  );
}

export default HomePage;
