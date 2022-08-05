import React from 'react';
import Logo from "../../images/netflix_logo.png";

const HeaderWhiteBgLogin = () => {
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
            S'identifier
          </a>
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default HeaderWhiteBgLogin