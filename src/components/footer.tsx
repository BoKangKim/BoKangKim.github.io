import React from "react";
import Facebook from "../assets/img/facebook.svg";
import Gmail from "../assets/img/gmail.svg";
import Github from "../assets/img/github.svg";
import Instagram from "../assets/img/instagram.svg";
export const Footer = () => (
  <footer id="footer">
    <h3>Contact & Channel</h3>
    <ul className="icon-list">
      <li>
        <a href="mailto:bkbk0329@gmail.com">
          <Gmail className="icon" />
        </a>
        <p>Gmail</p>
      </li>
      <li>
        <a href="https://github.com/bokangkim">
          <Github className="icon" />
        </a>
        <p>Github</p>
      </li>
      <li>
        <a href="https://www.facebook.com/bokangkim0329">
          <Facebook className="icon" />
        </a>
        <p>Facebook</p>
      </li>
      <li>
        <a href="https://www.instagram.com/bkbk_0329/">
          <Instagram className="icon" />
        </a>
        <p>Instagram</p>
      </li>
    </ul>
    <p className="copyright">
      © HyeokjaeLee. All rights reserved. Powered by GitHub Pages.
    </p>
  </footer>
);
