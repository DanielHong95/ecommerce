import React from "react";
import { Link } from "react-router-dom";
import "../footer/footer.css";
import logo from "../../images/hongover_logo_grey.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footer-container">
      {/* logo section */}
      <div className="info-section">
        <Link to={"/"}>
          <img src={logo} alt="Logo" height={50} width={200} />
        </Link>
        <h2 className="info-header">Contact Customer Care</h2>
        <Link>+1 (800)123-4567</Link>
        <div>Mon.-Sun.: 9 a.m. - 12 a.m. ET</div>
        <div>Copyright @ 2022 Hongover Liquor</div>
        <div>Spirit sales where allowed by law</div>
      </div>
      {/* about us section */}
      <div className="about-section">
        <h2 className="about-header">About Us</h2>
        <Link style={{ textDecoration: "none" }}>Our Company</Link>
        <Link style={{ textDecoration: "none" }}>Corporate Philanthropy</Link>
        <Link style={{ textDecoration: "none" }}>Social Responsibility</Link>
        <Link style={{ textDecoration: "none" }}>Careers</Link>
        <Link style={{ textDecoration: "none" }}>In the News</Link>
        <Link style={{ textDecoration: "none" }}>For the Media</Link>
        <Link style={{ textDecoration: "none" }}>For the Trade</Link>
      </div>
      {/* Stores section */}
      <div className="stores-section">
        <h2 className="stores-header">Stores</h2>
        <Link style={{ textDecoration: "none" }}>Store Locater</Link>
        <Link style={{ textDecoration: "none" }}>Classes & Events</Link>
        <Link style={{ textDecoration: "none" }}>Book Our Room</Link>
        <Link style={{ textDecoration: "none" }}>Gift Cards</Link>
        <Link style={{ textDecoration: "none" }}>Guides and Advice</Link>
        <Link style={{ textDecoration: "none" }}>Weddings</Link>
        <Link style={{ textDecoration: "none" }}>Total Wine Professional</Link>
      </div>
      {/* customer service section */}
      <div className="customer-service-section">
        <h2 className="customer-service-header">Customer Service</h2>
        <Link style={{ textDecoration: "none" }}>Contact Us</Link>
        <Link style={{ textDecoration: "none" }}>Order Status</Link>
        <Link style={{ textDecoration: "none" }}>Store Pickup</Link>
        <Link style={{ textDecoration: "none" }}>Delivery</Link>
        <Link style={{ textDecoration: "none" }}>Shipping</Link>
        <Link style={{ textDecoration: "none" }}>Returns</Link>
        <Link style={{ textDecoration: "none" }}>General FAQ</Link>
      </div>
      {/* Links section */}
      <div className="links-section">
        <h2>Stay Connected</h2>
        <Link to="/account" className="account-link">
          Create Account
        </Link>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <PinterestIcon />
        <YouTubeIcon />
      </div>
      {/* footer bottom */}
      <div className="footer-bottom-section">
        <Link style={{ textDecoration: "none" }}>Terms & Conditions</Link> |{" "}
        <Link style={{ textDecoration: "none" }}>Privacy Policy</Link> |{" "}
        <Link style={{ textDecoration: "none" }}>
          California Privacy Notice
        </Link>{" "}
        | <Link style={{ textDecoration: "none" }}>Do Not Sell My Info</Link> |{" "}
        <Link style={{ textDecoration: "none" }}>Sitemap</Link> |{" "}
        <Link style={{ textDecoration: "none" }}>Accessibility Policy</Link>
      </div>
    </div>
  );
}

export default Footer;
