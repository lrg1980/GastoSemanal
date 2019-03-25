import React,{Component} from 'react';

export default class Listado extends Component {

    render() {
        return (
            <div className="gastos-realizados">
               <h2>Listado</h2>
               {console.log(this.props.gastos)}   
            </div>
        );
    }
}