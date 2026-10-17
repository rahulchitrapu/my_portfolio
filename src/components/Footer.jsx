import { profile } from "../data/profile.js";
import Icon from "./Icon.jsx";
import Monogram from "./Monogram.jsx";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-id">
          <Monogram size={36} className="footer-mark" />
          <div>
            <p className="footer-name">{profile.name}</p>
            <p className="footer-role">
              {profile.role} · {profile.altRole}
            </p>
          </div>
        </div>

        <ul className="footer-links">
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`}>Email</a>
          </li>
          {profile.resumeUrl && (
            <li>
              <a href={profile.resumeUrl} download>
                Resume
              </a>
            </li>
          )}
          <li>
            <a href="#top" className="footer-top">
              Back to top <Icon name="arrowUp" size={15} />
            </a>
          </li>
        </ul>
      </div>

      <div className="container footer-bottom">
        <p>
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
          {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
