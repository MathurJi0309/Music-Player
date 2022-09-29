export default function moives(state=[],action){
    if(action.type==='ADD_MOVIES'){
        return action.movies;
    }
    return state;
}