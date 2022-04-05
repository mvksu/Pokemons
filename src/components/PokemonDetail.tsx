import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { PokemonState, Pokemon } from "../store/types";

const PokemonDetail = () => {
    const { id } = useParams()
    const pokemon = useSelector((state: PokemonState) => state.pokemons.find((p: Pokemon) => p.id.toString() === id))

    if (!pokemon) {
        return <h1>404 Error</h1>
    }

    return (
        <div className="detail">
           <h1 className="title">{pokemon.name} <span>#{pokemon.id}</span> </h1>
           <div className="main">
                <div className="image">
                    <img src={pokemon.sprites.front_default} alt="" />
                </div>
                <div className="stats">
                    <h4>Height:</h4>
                    <h1>{pokemon.height}</h1>
                    <h4>Weight:</h4>
                    <h1>{pokemon.weight}</h1>
                </div>
           </div>
        </div>
    )
}



export default PokemonDetail;