import React, {Component} from 'react'

export default class Restante extends Component {
     render() {

          return (

               <div className="alert alert-success">
                    Restante: $ {this.props.restante}
               </div>
          )
     }
}
