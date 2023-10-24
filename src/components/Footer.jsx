import { useState } from "react";
import { Link } from "react-router-dom";
import { socialLinks, infoLinks, helpLinks } from "../const/footerLinks";
import "../scss/Footer.scss";

export default function Footer() {
  const [mobileLayout, setMobileLayout] = useState(window.innerWidth <= 768);

  window.addEventListener("resize", () => {
    setMobileLayout(window.innerWidth <= 768);
  });

  return (
    <>
      {mobileLayout ? (
        <footer>
          <div className="social-links">
            {socialLinks.map((link, i) => (
              <span onClick={() => window.scrollTo(0, 0)} key={i}>
                <Link to={link.to}>{link.icon}</Link>
              </span>
            ))}
          </div>
          <div className="details">
            <div className="nav-links">
              <div className="first-col">
                <label>INFORMATION</label>
                <div className="info-links">
                  {infoLinks.map((link, i) => (
                    <li onClick={() => window.scrollTo(0, 0)} key={i}>
                      <Link to={link.to}>{link.text}</Link>
                    </li>
                  ))}
                </div>
              </div>
              <div className="sec-col">
                <label>HELP</label>
                <div className="help-links">
                  {helpLinks.map((link, i) => (
                    <li onClick={() => window.scrollTo(0, 0)} key={i}>
                      <Link to={link.to}>{link.text}</Link>
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className="newsletter">
              <div className="third-col">
                <label>NEWSLETTER</label>
                <form>
                  <input type="email" placeholder="email@gmail.com" />
                  <button type="button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="copyright">
            <label>&copy; 2023 - Andrian Smetaniuk. All rights reserved</label>
          </div>
        </footer>
      ) : (
        <footer>
          <div className="social-links">
            {socialLinks.map((link, i) => (
              <span onClick={() => window.scrollTo(0, 0)} key={i}>
                <Link to={link.to}>{link.icon}</Link>
              </span>
            ))}
          </div>
          <div className="details">
            <div className="first-col">
              <label>INFORMATION</label>
              <div className="info-links">
                {infoLinks.map((link, i) => (
                  <li onClick={() => window.scrollTo(0, 0)} key={i}>
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                ))}
              </div>
            </div>
            <div className="sec-col">
              <label>HELP</label>
              <div className="help-links">
                {helpLinks.map((link, i) => (
                  <li onClick={() => window.scrollTo(0, 0)} key={i}>
                    <Link to={link.to}>{link.text}</Link>
                  </li>
                ))}
              </div>
            </div>
            <div className="third-col">
              <label>NEWSLETTER</label>
              <form>
                <input type="email" placeholder="email@gmail.com" />
                <button type="button">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="copyright">
            <label>&copy; 2023 - Andrian Smetaniuk. All rights reserved</label>
          </div>
        </footer>
      )}
    </>
  );
}
