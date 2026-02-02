import "./Footer.css";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Home
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-main">
          <div className="footer-logo">
            <Home className="logo-icon" size={32} />
            <span>Propellow</span>
          </div>
          <p className="footer-desc">
            Find trusted properties, verified listings, and the right home for
            every lifestyle. Explore, compare, and make confident property
            decisions with ease.
          </p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          {[1, 2, 3, 4].map((i) => (
            <div className="link-col" key={i}>
              <h4>Header Text</h4>
              <ul>
                <li><a href="#">Button</a></li>
                <li><a href="#">Button</a></li>
                <li><a href="#">Button</a></li>
                <li><a href="#">Button</a></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
