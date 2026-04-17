import  React, {Component} from 'react';

function Pokemon(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <img src={props.avatar} alt={props.name}/>
        </div>
    );
}

export default class AJAXapi extends Component{
    state = {
        pokemones: []
    }

    componentDidMount(){
        let url = 'https://pokeapi.co/api/v2/pokemon/';
        fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            json.results.forEach(e => {
                fetch(e.url)
                .then(res => res.json())
                .then((json) => {
                  console.log(json);  
                  let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                  }

                  let pokemoms = [
                    ...this.state.pokemones,
                  ]

                  this.setState(prevState => ({
                    pokemones: [...prevState.pokemones, pokemon]
                  }))

                })
            });
        })
    }

    render(){
        return(
            <>
            <div>
                <h2>AJAX API</h2>
                {this.state.pokemones.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)}
            </div>
            </>
        );
    }

}