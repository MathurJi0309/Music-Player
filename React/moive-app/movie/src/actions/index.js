// {
//     type:'ADD_MOVIES',
//     movies:[m1,m2,m3]
// }
// {
//     type:'DECREASE_COUNT'
// }

//these variable called action type
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITE='ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';

//these function are called action creator
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}
//action creator for the favourites
export function addFavourite(movie){
    return {
        type:ADD_FAVOURITE,
        movie:movie
    }
}
export function removefromfavourites(movie){
    return {
        type:REMOVE_FROM_FAVOURITES,
        movie:movie
    }
}
export function setshowfavourites(val){
    return {
        type:SET_SHOW_FAVOURITES,
        val
    }
}