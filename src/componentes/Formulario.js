import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Formulario extends Component {

    // refs para los campos del formulario
    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();

    crearGasto = (e) => {

        // Prevenir el default
        e.preventDefault();

        // crear el objeto con los datos
        const gasto = {
            nombreGasto: this.nombreGastoRef.current.value,
            cantidadGasto: this.cantidadGastoRef.current.value
        }
        //console.log(gasto);

        // agregarlo y enviarlo por props
        this.props.agregarGasto(gasto);

        // resetear el formulario (opcional)
        e.currentTarget.reset();
    }

    render() {
        return (
            <div className="class-name">
                <form onSubmit={this.crearGasto}>
                     <h2> Agrega tus gastos aqui </h2> 
                     <div className = "campo">
                         <label > Nombre Gasto </label> 
                        <input className="u-full-width" type="text" placeholder="Ej. Transporte"
                            ref={this.nombreGastoRef} />
                     </div>

                     <div className="campo">
                         <label > Cantidad </label> 
                        <input className="u-full-width" type="text" placeholder="Ej. 300"
                            ref={this.cantidadGastoRef} />
                     </div>

                     <input className="button-primary u-full-width" type = "submit" value="Agregar" />
                     </form>
            </div>
        );
    }
}

Formulario.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}
