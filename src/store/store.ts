import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { PokemonState } from "./types";
import { ActionTypes, SET_POKEMONS, START_LOADING, SEARCH_BY_VALUE, FILTER_BY_VALUE } from "./actions"


export const pokemonReducer = (state: PokemonState = { pokemons: [], loading: false, page: 0, searchValue: "", filterValue: "" }, action: ActionTypes) => {
    switch (action.type) {
        default: return state;
        case SET_POKEMONS:
            return { ...state, loading: false, pokemons: [...state.pokemons, action.payload] }
        case START_LOADING:
            console.log('Start loading')
            return { ...state, loading: true };
        case SEARCH_BY_VALUE:
            return { ...state, searchValue: action.payload }
        case FILTER_BY_VALUE:
            return { ...state, filterValue: action.payload }
    }
}

const store = createStore(pokemonReducer, applyMiddleware(thunk))

export default store;