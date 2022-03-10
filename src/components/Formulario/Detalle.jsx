import React, {useContext} from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";

const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.
  /**
   * Usamos el useContext para obtener el contexto del formulario, desestructuramos el state
   * que es lo unico que necesitamos usar.
   */
  const {state} = useContext(ContextoFormulario);

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre:{state.nombre}</p>
          <p>Apellido:{state.apellido}</p>
          <p>Email:{state.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre:{state.nombrePokemon}</p>
          <p>Tipo:{state.tipoPokemon}</p>
          <p>Elemento:{state.elemento}</p>
          <p>Altura:{state.altura}</p>
          <p>Edad:{state.edad}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
