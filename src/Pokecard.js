import React from "react";
import Pokedex from "./Pokedex";

const Pokemon = ({ name, imgId, type, xp }) => (
    <div className="Pokemon">
      <h3 className="Pokemon-name">{name}</h3>
      <img className="CartItem-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgId}.png`}/>
      <ul>
        <li>Type : {type}</li>
        <li>Base Experience :{xp} </li>
      </ul>
    </div>
  );

export default Pokemon;