import React, {Component} from "react";

export class EventosES6 extends Component{
    constructor(props){

        super(props)
        this.state = {
            contador: 0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e){
        console.log("Sumando")
        console.log(this)
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar(e){
        console.log("Restando")
        console.log(this)
        
        this.setState({
            contador: this.state.contador - 1,
        })
    }


    render(){
        return(
            <div>
                <h2>Eventos ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>

                <h3>{this.state.contador}</h3>

            </div>
        )
    }
}

export class EventosES7 extends Component{

    state = {
        contador: 0,
    };

    sumar = (e) =>{
        console.log("Sumando")
        console.log(this)
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar = (e) =>{
        console.log("Restando")
        console.log(this)
        
        this.setState({
            contador: this.state.contador - 1,
        })
    }


    render(){
        return(
            <div>
                <h2>Eventos ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>

                <h3>{this.state.contador}</h3>

            </div>
        )
    }
}

function boton() {
    return(<button>Botón</button>)
}

export class MasSobreEventos extends Component{

    handleClick = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.nativeEvent)
        console.log("Hola, soy un evento")
    }

    render(){
            return (
                <div>
                    <h2>Mas Sobre Eventos</h2>
                    
                    <boton/>
                </div>
            );

    }
}