import react , {Component} from 'react';

class Componente extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.msg}</h2>
            </div>
        );
    }
}

export default Componente;