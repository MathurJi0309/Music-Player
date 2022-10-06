// {
//     type:'ADD_MOVIES',
//     movies:[m1,m2,m3]
// }
// {
//     type:'DECREASE_COUNT'
// }

//these variable called action type
export const ADD_MOVIES='ADD_MOVIES';

//these function are called action creator
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}