import React from "react";
import "../styles/Accueil.css";
import Card from "../components/Card";

function Acceuil() {
  return (
      <div className="card-home">
        <Card
          width="300px"
          title={`Etablissement`}
          text={`Nous presentons des etablissement qui prends en charge les personnes
            souffrants d'handicape et d'exclusion sociale`}
          src = {'../Disabled man working in office using wheelchair.png'} alt={''} />
           <Card
           width="300px"
           title={`Offre d'emploi`}
           text={`Nous offrons une liste d'emploi possible pour les personnes handicapes cherchant
            ou travail`}
          src = {'../handicap-job.jpg'} alt={''} />
                  <Card
          width="300px"
          title={`Activites diverses`}
          text={`Les communautes des personnes handicape proposent des activites en groupes diverse 
            et libre en groupe diverse et libre pourtout le monde`}
          src = {'../Disabled player playing basketball.png'} alt={''} />
      </div>
  );
}

export default Acceuil;