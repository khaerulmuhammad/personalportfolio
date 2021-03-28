import React from "react";
import { GitHub, Instagram, Twitter, Mail, LinkedIn } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Header.css";
import Menubar from "./MenuBar";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://mail.google.com/mail/u/0?ui=2&ik=b462cfc00b&attid=0.1&permmsgid=msg-a:r-5039636804892947711&th=1782bed0727cd982&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8JlgGJ2g6OiTq2W_wESC7Zs4zR0D-vFqd7B_yg9mpE9kPsO0dar9yTlZREdKI47vvl1V13J5MNobBM_vZ9JXvut4KeOvslDaMqw9UP3hkDTc9ykRY2TqVQ_Cg&disp=emb&realattid=ii_km7t3u830"
          alt="logo umam"
        />
      </Link>

      <div className="header__right">
        <a href="https://twitter.com/mkhmm3?s=08" target="blank">
          <Twitter />
        </a>

        <a href="https://github.com/khaerulmuhammad" target="blank">
          <GitHub />
        </a>

        <a href="https://www.instagram.com/khaerul_ryle/" target="blank">
          <Instagram />
        </a>

        <a href="mailto:khaerulmuhammad1994@gmail.com" target="blank">
          <Mail />
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-khaerul-umam-856445200/"
          target="blank"
        >
          <LinkedIn />
        </a>
      </div>
      <Menubar />
    </div>
  );
}

export default Header;
