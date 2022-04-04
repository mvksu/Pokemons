
export interface Pokemon {
    
}


export interface PokemonState {
    pokemons: Pokemon[]
    loading: Boolean,
    page: number,
    searchValue: string, 
    filterValue: string
}

