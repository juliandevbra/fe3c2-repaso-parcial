import React from "react";

const Card = ({ nombre, artista }) => {
  return (
    <div>
      <h3>Gracias, {nombre}!</h3>
      <h3>Te enviamos a tu casilla de email tu entrada para {artista}!</h3>
    </div>
  );
};

export default Card;
