import React from "react";
import { Link } from "react-router-dom";
import "../footer/footer.css";
import logo from "../../images/hongover_logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="container">
      {/* logo section */}
      <div className="info-section">
        <Link to={"/"}>
          <img src={logo} alt="Logo" height={50} width={200} />
        </Link>
        <h2 className="info-header">Contact Customer Care</h2>
        <Link>+1 (800)420-6969</Link>
        <div>Mon.-Sun.: 9 a.m. - 12 a.m. ET</div>
        <div>Copyright @ 2022 Hongover Liquor</div>
        <div>Spirit sales where allowed by law</div>
      </div>
      {/* about us section */}
      <div className="about-section">
        <h2 className="about-header">About Us</h2>
        <Link>Our Company</Link>
        <Link>Corporate Philanthropy</Link>
        <Link>Social Responsibility</Link>
        <Link>Careers</Link>
        <Link>In the News</Link>
        <Link>For the Media</Link>
        <Link>For the Trade</Link>
      </div>
      {/* Stores section */}
      <div className="stores-section">
        <h2 className="stores-header">Stores</h2>
        <Link>Store Locater</Link>
        <Link>Classes & Events</Link>
        <Link>Book Our Room</Link>
        <Link>Gift Cards</Link>
        <Link>Guides and Advice</Link>
        <Link>Weddings</Link>
        <Link>Total Wine Professional</Link>
      </div>
      {/* customer service section */}
      <div className="customer-service-section">
        <h2 className="customer-service-header">Customer Service</h2>
        <Link>Contact Us</Link>
        <Link>Order Status</Link>
        <Link>Store Pickup</Link>
        <Link>Delivery</Link>
        <Link>Shipping</Link>
        <Link>Returns</Link>
        <Link>General FAQ</Link>
      </div>
      {/* Links section */}
      <div className="links-section">
        <h2>Stay Connected</h2>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <PinterestIcon />
        <YouTubeIcon />
        <Link to="/account">Create Account</Link>
      </div>
      {/* footer bottom */}
      <div className="footer-bottom-section">
        <Link>Terms & Conditions</Link> | <Link>Privacy Policy</Link> |{" "}
        <Link>California Privacy Notice</Link> |{" "}
        <Link>Do Not Sell My Info</Link> | <Link>Sitemap</Link> |{" "}
        <Link>Accessibility Policy</Link>
      </div>
    </div>
  );
}

export default Footer;
