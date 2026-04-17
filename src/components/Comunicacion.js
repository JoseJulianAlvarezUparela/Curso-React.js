import React, { Component } from 'react';

export default class Padre extends Component {

    state = {
        contador: 0
    }

    IncrementarContador = () => {
        this.setState({
            contador: this.state.contador + 1
        });
    }

    render(){
        return(
        <>
            <h2>Comunicación</h2>
            <h3>Contador: {this.state.contador}</h3>

            <Hijo IncrementarContador={this.IncrementarContador} mensaje="Hijo 1"/>
            <Hijo IncrementarContador={this.IncrementarContador} mensaje="Hijo 2"/>
        </>
        );
    }
}

function Hijo (props){
    return (
    <>
        <h2>{props.mensaje}</h2>

        {props.IncrementarContador && (
            <button onClick={props.IncrementarContador}>
                +
            </button>
        )}
    </>
    )
}