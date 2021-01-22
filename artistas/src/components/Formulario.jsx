import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = ({ guardarBusquedaLetra }) => {

    const [ busqueda, guardarBusqueda ] = useState({
        artista: '',
        cancion: ''
    });
    const [ error, guardarError ] = useState(false);

    //Extraer artista y cancion
    const { artista, cancion } = busqueda;

    //Funcion a cada input para leer su contenido
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //Consultar en API
    const buscarInformacion = e => {
        e.preventDefault();

        if( artista.trim() === '' || cancion.trim() === '' ) {
            guardarError(true);
            return;
        }
        guardarError(false);

        //Si no hay errores, pasa al componente principal
        guardarBusquedaLetra(busqueda);
    }


    return ( 
        <div className="bg-info">
        { error ? <p className="alert alert-primary text-center p-2">Campos obligatorios</p> : null  }
            <div className="container">
                <div className="row">
                    <form 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={buscarInformacion}
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras & Canciones</legend>

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"  
                                            onChange={actualizarState}  
                                            value={artista}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                            <label >Canción</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                name="cancion"
                                                placeholder="Nombre de la Canción"
                                                onChange={actualizarState}   
                                                value={cancion} 
                                            />
                                        </div>
                                    </div>
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarBusquedaLetra: PropTypes.func.isRequired
}
 
export default Formulario;