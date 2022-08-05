import React from 'react';
import Footer from '../Footer/Footer';
import Logo from "../../images/netflix_logo.png";
import LanguageChoice from '../LanguageChoice/LanguageChoice';
import './home.css'
import ButtonLogin from '../Buttons/ButtonLogin';
import ButtonBegin from '../Buttons/ButtonBegin';


const Home = () => {

  return (
    <>
      <div className="home-imgBg">
        <header className="header">
          <nav class="navbar">
            <div className="container">
              <a className="navbar-brand">
                {" "}
                <img src={Logo} alt="logo Netflix" width="150" />
              </a>
              <form className="d-flex">
                <LanguageChoice />

               <ButtonLogin/>
              </form>
            </div>
          </nav>
        </header>

        <main className=" row main">
          <div className="col-sm-12">
            <h1 className=" home-title text-white">
              Films, séries et bien plus en illimité.
            </h1>
          </div>
          <div className="col-sm-12">
            <h2 className="home-subtitle text-white">
              {" "}
              Où que vous soyez. Annulez à tout moment.
            </h2>
          </div>
          <div className="col-sm-12">
            <form>
              <h3 className="email-form-title text-white ">
                Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour
                vous abonner ou réactiver votre abonnement.
              </h3>
              <div className="email-form">
                <input
                  type="text"
                  className="input-email"
                  placeholder="Adresse e-mail"
                />
               <ButtonBegin/>
              </div>
            </form>
          </div>
        </main>
      </div>

      <Footer/>
    </>
  );
   
   
}

export default Home