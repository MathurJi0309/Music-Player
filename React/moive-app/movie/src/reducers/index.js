import {ADD_MOVIES,ADD_FAVOURITE,REMOVE_FROM_FAVOURITES,SET_SHOW_FAVOURITES} from '../actions'

const intialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}
//in making using if else us eswitch case which is better for the look
export default function moives (state=intialMovieState,action){
    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
                const filteredArray=state.favourites.filter(movie=>movie.Title !== action.movie.Title)
                return{
                    ...state,
                    favourites:filteredArray
                }
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val
            }
        default:
            return state;
    }

}
