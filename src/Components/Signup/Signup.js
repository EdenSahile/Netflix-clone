import React from 'react';

import "../../App.css";
import './signup.css'

import ButtonLarge from '../Buttons/ButtonLarge';
import HeaderWhiteBgLogin from "../Headers/HeaderWhiteBgLogin";


const Signup = () => {
  return (
    <div>
      <HeaderWhiteBgLogin />
      <main className="main container d-flex justify-content-center">
        <div className="main__row row">
          <div className="col-sm-12">
            <span className="fs-6">
              Etape <span className="step-number">1 </span>sur{" "}
              <span className="step-number">3</span>
            </span>
            <h2 className="main__title mt-3 mb-4">
              Créer un mot de pass pour activer votre abonnement
            </h2>
            <p className="main__paragraphe">
              Plus que quelques étapes et c'est fini !
            </p>
            <p className="main__paragraphe">Plus rien à remplir</p>

            <input type="text" className="main__input-mail" />
            <input type="password" className="main__input-password" />

            <div className="main__form-container">
              <input
                type="checkbox"
                name="emailPreference"
                id="emailPreference"
                className="main__input-checkbox"
              />
              <label
                className="main__label"
                htmlFor="specialOffer"
                id="emailPreference"
              >
                Oui, envoyez-moi les offres spéciales de Netflix par e-mail
              </label>
            </div>
            <div className="main__btn-submit">
              <ButtonLarge />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;