import React from 'react';
import Logo from "../../images/netflix_logo.png";

const HeaderWhiteBgLogOut = () => {
  return (
    <header className="header">
      <nav class="header navbar">
        <div className="container">
          <a className="navbar-brand">
            {" "}
            <img src={Logo} alt="logo Netflix" width="150" />
          </a>
          <a href="#" className="login-link">
            {" "}
           Se déconnecter
          </a>
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default HeaderWhiteBgLogOut;