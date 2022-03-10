import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import ProviderFormulario from "../../context/ContextoFormulario";

// En este componente tenemos nuestro formulario y dentro de él
// tenemos los componentes que necesitan consumir nuestro estado.
// Recuerda cual es el paso que debemos tomar para que nuestros
// componentes puedan consumir un estado global.

const Formulario = () => {

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          {/*
           Si tan solo tuviesemos una manera de "encapsular" nuestros componentes
           para que puedan acceder al estado global.
          */}
          <ProviderFormulario>
          <div className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input name="nombre" label="Nombre" referencia={true} tipo="entrenador" />
              <Input name="apellido" label="Apellido" tipo="entrenador" />
              <Input name="email" label="Email" type="email" tipo="entrenador" />
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input name="nombrePokemon" label="Nombre" tipo="pokemon" />
              <Input name="tipoPokemon" label="Tipo" tipo="pokemon" />
              <Input name="elemento" label="Elemento" tipo="pokemon" />
              <Input name="altura" label="Altura" tipo="pokemon" />
              <Input name="edad" label="Edad" tipo="pokemon" />
            </div>
          </div>
            <Detalle />
          </ProviderFormulario>
        </div>
      </div>
    </>
  );
};

export default Formulario;
