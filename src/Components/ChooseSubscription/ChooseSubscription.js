
import React from "react";
import "../../App.css";
import "./chooseSubscription.css";

import ButtonLarge from "../Buttons/ButtonLarge";
import HeaderWhiteBgLogOut from "../Headers/HeaderWhiteBgLogOut";

const ChooseSubscription = () => {
 
    return (
      <div>
        <HeaderWhiteBgLogOut />
        <main className="main container d-flex justify-content-center">
          <div className="main__row row">
            <div className="col-sm-12">
              <span className="fs-6 step">
                Etape <span className="step-number">2</span> sur{" "}
                <span className="step-number">3</span>
              </span>
              <h2 className="main__title mt-3 mb-4">
                Choisissez votre forfait
              </h2>
              <ul classNae="checkmark-group">
                <li className="list-item">
                  <span style={{ color: "red", fontSize: "30px" }}>
                    &#10003;
                  </span>{" "}
                  Sans engagement. Annulable à tout moment.
                </li>
                <li className="list-item">
                  <span style={{ color: "red", fontSize: "30px" }}>
                    &#10003;
                  </span>{" "}
                  Tous les programmes Netflix pour un abonnement très attractif.
                </li>
                <li className="list-item">
                  <span style={{ color: "red", fontSize: "30px" }}>
                    &#10003;
                  </span>{" "}
                  Accès illimité sur tous vos appareils.
                </li>
              </ul>

              <div className="main__btn-submit">
                <ButtonLarge />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}

export default ChooseSubscription