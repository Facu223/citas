import React, { Fragment , useState } from "react";
import { v4 as uuid } from 'uuid';

const Formulario = ({crearCita}) => {

    //Crear state de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
    })

    const [error, actualizarError] = useState(false)

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //funcion presione enviar agrega cita
    const submitCita = e =>{
        e.preventDefault()
        //validacion
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' ||sintomas.trim() === ''){
            actualizarError(true)
        }
        else{
            actualizarError(false)
        }

        cita.id = uuid();

        //Crear la cita

        crearCita(cita);

        //Reiniciar el formulario
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha:'',
            hora:'',
            sintomas:''
        })
        
    }


  return (
    <Fragment>
      <h2>Crear cita</h2>
      {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          placeholder="Nombre Mascota"
          className="u-full-width"
          onChange={actualizarState}
          value={mascota}
        ></input>

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          placeholder="Nombre Mascota"
          className="u-full-width"
          onChange={actualizarState}
          value={propietario}
        ></input>

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        ></input>

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        ></input>

        <label>Sintomas</label>
        <textarea
          type="text"
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button
            className="u-full-width button-primary"
            type="submit"
        >Agregar cita</button>
      </form>
    </Fragment>
  );
};

export default Formulario;