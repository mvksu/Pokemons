import { useSelector, useDispatch } from "react-redux";
import { filterByValue } from "../store/actions";
import { PokemonState } from "../store/types";
import { Pokemon } from "../store/types"

const Filter = () => {
    const pokemons = useSelector((state: PokemonState) => state.pokemons)
    const types = new Set(pokemons.map((item: Pokemon) => item.types).map(item => item[0].type.name))
    const dispatch = useDispatch()

    return <select className="filter" onChange={(e) => dispatch(filterByValue(e.target.value))}>
        <option value="">All</option>
        {Array.from(types).map((type:string) => <option value={type} key={type}>{type}</option>)}
    </select>
}




export default Filter;