import React, { Component } from 'react';
import Presupuesto from './Presupuesto';
import PropTypes from 'prop-types'
import Restante from './Restante';

export default class ControlPresupuesto extends Component {
     render() {
       
          return (
               <React.Fragment>
                    <Presupuesto
                         presupuesto={this.props.presupuesto}/>
                    <Restante
                         presupuesto={this.props.presupuesto}
                         restante={this.props.restante}/>
               </React.Fragment>
    )
  }
}

ControlPresupuesto.propTypes = {
     presupuesto: PropTypes.string.isRequired,
     restante: PropTypes.string.isRequired
}
