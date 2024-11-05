import { useState } from "react";
import "./App.css";
import Espectaculo from "./Components/Espectaculo";
import { espectaculos } from "./espectaculos";
import Form from "./Components/Form";

function App() {
  const [isSelected, setisSelected] = useState({
    artista: null,
    status: false,
  });

  return (
    <>
      {isSelected.status ? <Form artista={isSelected.artista} /> : null}
      {espectaculos.map((elemento) => (
        <Espectaculo
          setisSelected={setisSelected}
          elemento={elemento}
          key={elemento.id}
        />
      ))}
    </>
  );
}

export default App;
