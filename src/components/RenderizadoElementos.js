import React, {Component} from "react";
import data from '../Helpers.json';

function ListItem(props){
    return <li>{props.value}</li>
}







export default class RenderizadoElementos extends Component{

    constructor(props){
        super(props);
        this.state = {
            seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno']
        }
    }

    render(){
        return(
            <div>
                <h2>Renderizado de Elementos</h2>

            <ul>
                {
                    this.state.seasons.map((season, index) => <li key={index}>{season}</li>)
                }
            </ul>

            <h3>Renderizado de Elementos con Data</h3>
            {
                data.map((element) => (
                    <ListItem key={element.id} value={element.name} />
                ))
            }

            </div>
        );
    }
}
