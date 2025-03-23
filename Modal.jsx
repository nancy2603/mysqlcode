import React from 'react'
import { useState } from 'react'
import Input from "../components/Input"
import "../styles/Modal.css"

function Modal({onClose}) {
    const [inputValue, setInputValue] = useState("");
  return (
    <div className='overplay'>
        <div className='popup'>
            <h2>Entrer une valeur</h2>
            <Input value={inputValue} onChange={setInputValue} placeholder={'Nom'}/><br/>
            <Input value={inputValue} onChange={setInputValue} placeholder={'Prenom'}/><br/>
            <input type="radio" name="groupe" id="groupe" />
            <label htmlFor="Groupe">Groupe</label><br />
            <input type="radio" name="solo" />
            <label htmlFor="Solo">Solo</label>
            <div className="buttonContainer">
             <button className="button" onClick={()=>alert('Les informations vous serer communiquer')}>Valider</button>
             <button className="button" onClick={onClose}>Fermer</button>
             </div>c
         </div>
    </div>
  );
};

export default Modal