import React, { useState, useContext, useEffect, useRef } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";
import PropTypes from "prop-types";

const Input = ({ name, label, type = "text", referencia = false, tipo}) => {

  /**
   * Creamos la variable que almacenara la referencia generada del hook useRef.
   */

  let referenciaFocus = useRef(null);

  /**
   * Usamos el hook useEffect, para que cuando se monte el componente se haga focus sobre un
   * input especifico haciendo una pequeña vañidacion y usando la referencia que ya teniamos.
   */

  useEffect(() => {
      if (referencia) {
        referenciaFocus.current.focus();
      }else{
        return;
      }
  }, [])

  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  const {state, handleBlur} = useContext(ContextoFormulario);
  // También, utilizaremos un estado local para manejar el estado del input.
  const [value, setValue] = useState(state[name] || '');

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
    e.preventDefault();
    handleBlur({
      campo: name,
      valor: value,
      tipo
    });
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        id={name}
        ref={referenciaFocus}
        tipo={tipo}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  referencia: PropTypes.bool,
  tipo: PropTypes.string,
}

export default Input;
