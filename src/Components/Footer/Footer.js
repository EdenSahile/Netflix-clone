import React from 'react';
import LanguageChoice from '../LanguageChoice/LanguageChoice';

const Footer = () => {
  return (
    <footer className="container-fluid footer">
      <div className="row">
        <div className=" col-sm-12">
          <p className="footer-title">
            Des questions ? Appelez le (+33) 0805-543-063{" "}
          </p>

          <ul className="ul-footer">
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                FAQ
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Centre d'aide
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Compte
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Presse
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Relations investisseurs
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Recrutement
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Utiliser des cartes cadeaux
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Acheter des cartes cadeaux
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Modes de lecture
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Conditions d'utilisation
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Confidentialité
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Préférences de cookies
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Mentions légales
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Nous contacter
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Test de vitesse
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Garantie légale
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Informations légales
              </a>
            </li>
            <li className="footer-link-item">
              {" "}
              <a className="footer-link" href="#">
                Seulement sur Netflix
              </a>
            </li>
          </ul>
          <div className="languageChoice-footer">
            <LanguageChoice />
          </div>
        </div>
      </div>
    </footer>
    
  );
}

export default Footer