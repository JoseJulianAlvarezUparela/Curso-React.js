import React, { Component } from "react";

function EstadoAHijo(props){
    return(
        <div>
            <h3>{props.contador}</h3>
            <p>0</p>
        </div>
    );
}

export default class Estado extends Component{
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         contador: 0,
    //     };
    // }

    // componentDidMount(){
    //     this.intervalo = setInterval(() => {
    //         this.setState({
    //             contador: this.state.contador + 1,
    //         });
    //     }, 1000);
    // }

    // componentWillUnmount(){
    //     clearInterval(this.intervalo);
    // }

    render(){
        return(
            <div>
                <h2>El estado</h2>
                {/* <p>{this.state.contador}</p> */}
                {/* <EstadoAHijo contador={this.state.contador}/> */}
            </div>
        );
    }
}