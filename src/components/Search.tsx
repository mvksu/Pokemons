import { searchByValue } from "../store/actions"
import { useDispatch } from 'react-redux';
const Search = () => {
    const dispatch = useDispatch()
    return (
        <input type="text" className="searchBar" placeholder="Search" onChange={(e) => dispatch(searchByValue(e.target.value))}/>
    )
}



export default Search;