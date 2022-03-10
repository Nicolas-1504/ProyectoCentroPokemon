// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';

/**
 * Creamos el estado inicial, este estado lo pasaremos como parametro en el useReducer.
 */

let initialState = {
    nombre:"",
    apellido:"",
    email:"",
    nombrePokemon:"",
    tipoPokemon:"",
    elemento:"",
    altura:"",
    edad:""
}

/**
 * Esta sera la funcion reducer, la cual tambien pasaremos al useReducer. Tendra la logica de como
 * debera actualizar el estado.
 * @param {*} state El estado .
 * @param {*} action La accion es un objeto, siempre tentra la key "type", para identificar que tipo
 * de actualizacion se hará. Ademas podemos pasar la key "payload" que nos servira para pasar datos.
 * @returns Los estados actualizados.
 */

const reducer = ((state, action) => {
    switch (action.type) {
        case "ACTUALIZAR_ENTRENADOR":
            return {...state,
                nombre: action.payload.nombre,
                apellido: action.payload.apellido,
                email: action.payload.email
            }
        case "ACTUALIZAR_POKEMON":
            return {...state,
                nombrePokemon: action.payload.nombrePokemon,
                tipoPokemon: action.payload.tipoPokemon,
                elemento: action.payload.elemento,
                altura: action.payload.altura,
                edad: action.payload.edad
            }
    }
})

/**
 * Creamos el contexto.
 */

 export const ContextoFormulario = createContext();

 /**
  * Este componente sera el contexto de nuestra app, tiene algunas funciones y estados, los cuales se
  * pasaran mediante el provider y que sean consumidos en otros componentes.
  * @param {*} Children Recibe un Children.  
  * @returns El contexto.
  */

 const ProviderFormulario = ({children}) => {

    /**
     * Aca usamos el hook useReducer, le pasamos el estado inicial y la funcion reducer previamente
     * creadas, desestructurando obtenemos el estado y un dispatch, el cual nos funcionara para
     * cambiar el estado.
     */

    const [state, dispatch] = useReducer(reducer, initialState);

    /**
     * Esta funcion tiene como objetivo, que cuando se haga un blur en los input, se actualice 
     * el estado, dependiendo del tipo que reciba.
     * @param {*} valorInput Recibimos un objeto con el campo, valor y tipo.
     */

    const handleBlur = (valorInput) => {
        const { campo, valor, tipo} = valorInput;
        if (tipo === "entrenador") {
            dispatch({
                type:"ACTUALIZAR_ENTRENADOR",
                payload: {
                    ...state,
                    [campo]: valor
                }
            })
        }else if(tipo === "pokemon"){
            dispatch({
                type:"ACTUALIZAR_POKEMON",
                payload: {
                    ...state,
                    [campo]: valor
                }
            })
        }
    };

     return(
         <ContextoFormulario.Provider value={{
             handleBlur,
             state
         }}>
             {children}
         </ContextoFormulario.Provider>
     )
 }

ContextoFormulario.propTypes = {
    children: PropTypes.element
}

 export default ProviderFormulario;