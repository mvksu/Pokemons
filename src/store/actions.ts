import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { Pokemon, PokemonState } from "./types"

export const SET_POKEMONS = "SET_POKEMONS"
export const START_LOADING = "START_LOADING"
export const SEARCH_BY_VALUE = "SEARCH_BY_VALUE"
export const FILTER_BY_VALUE = "FILTER_BY_VALUE"

export type ActionTypes = | { type: "SET_POKEMONS", payload: Pokemon[] } | { type: "SEARCH_BY_VALUE", payload: string } | { type: "START_LOADING" } | { type: "FILTER_BY_VALUE", payload: string }

export const startLoading = (): ActionTypes => ({ type: "START_LOADING" })
export const searchByValue = (searchValue: string): ActionTypes => ({ type: "SEARCH_BY_VALUE", payload: searchValue })
export const filterByValue = (filterValue: string): ActionTypes => ({ type: "FILTER_BY_VALUE", payload: filterValue })
export const setPokemons = (pokemons: Pokemon[]): ActionTypes => ({
    type: SET_POKEMONS,
    payload: pokemons,
});

export const getPokemons = (
    url: string
): ThunkAction<void, PokemonState, unknown, Action<string>> => async (dispatch) => {
    const resp = await fetch(url);
    const allpokemons: any = await resp.json();
    await allpokemons.results.forEach((pokemon: { name: string, url: string }) => {
        let url = pokemon.url
        fetch(url).then((resp) => resp.json().then((data) => dispatch(setPokemons(data))))
    })
};
