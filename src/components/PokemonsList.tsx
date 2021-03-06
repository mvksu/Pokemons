import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, startLoading } from "../store/actions";
import { PokemonState, Pokemon } from "../store/types";
import { Link } from 'react-router-dom';


const PokemonsList = () => {
    const pokemons = useSelector((state: PokemonState) => state.pokemons)
    const loading = useSelector((state: PokemonState) => state.loading)
    const searchValue = useSelector((state: PokemonState) => state.searchValue)
    const filterValue = useSelector((state: PokemonState) => state.filterValue)
    const dispatch = useDispatch()
    const [page, setPage] = useState(0)

    useEffect(() => {
        dispatch(startLoading())
        setTimeout(() => dispatch(getPokemons(`https://pokeapi.co/api/v2/pokemon/?limit=7&offset=${7 * page}`)), 400)
    }, [dispatch, page])

    if (loading) {
        return <h2>Loading...</h2>
    }

    return <div className="list">
        <button onClick={() => setPage(page + 1)}>Load more</button>
        {pokemons
        .filter((p: Pokemon) => p.name.includes(searchValue))
        .filter((p: Pokemon) => filterValue ? p.types.map((type: any) => type.type.name).includes(filterValue) : p)
        .map((item: Pokemon, index: number) => <Link to={`/pokemon/${item.id}`} key={index} className="pokemon">
            <h3>{item.name}</h3>
            <div>
                {item.types.map((type: any, index: number) => <span className="type" key={index + 99}>{type.type.name}</span>)}
            </div>
            <img src={item.sprites.front_default} alt={item.name} />
        </Link>)}
    </div>
}


export default PokemonsList;