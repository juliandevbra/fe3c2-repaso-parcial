import React, { useState } from "react";
import Card from "./Card";

const Form = ({ artista }) => {
  //estados
  const [comprador, setComprador] = useState({
    nombre: "",
    email: "",
  });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);
  //onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    //validaciones
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (
      comprador.nombre.length > 6 &&
      comprador.nombre.includes(" ") &&
      regexEmail.test(comprador.email)
    ) {
      setMostrar(true);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {/* mostrar un error */}
      {mostrar ? (
        <Card nombre={comprador.nombre} artista={artista} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre completo:</label>
          <input
            type="text"
            //onchange
            onChange={(e) =>
              setComprador({ ...comprador, nombre: e.target.value })
            }
          />
          <label>Email:</label>
          <input
            type="email"
            //onchange
            onChange={(e) =>
              setComprador({ ...comprador, email: e.target.value })
            }
          />
          <button>Comprar entrada</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Coloque la información correctamente
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;
