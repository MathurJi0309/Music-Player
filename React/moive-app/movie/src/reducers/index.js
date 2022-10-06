import {ADD_MOVIES} from '../actions'

const intialMovieState={
    list:[],
    favourites:[]
}
export default function moives(state=intialMovieState,action){
    if(action.type===ADD_MOVIES){
        return {
            ...state,
            list:action.movies
        }
    }
    return state;
}
