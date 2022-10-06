import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies, setshowfavourites} from '../actions';

class App extends React.Component{
  componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    })
    
    // make api call here
    //now we have to use the dispatch action here
    store.dispatch(addMovies(data));
    console.log('STATE',this.props.store.getState());
  }

  isMovieFavourite = (movie) =>{
    const {favourites}=this.props.store.getState();
    const index=favourites.indexOf(movie);
    if(index!==-1){
      //found the moive
      return true;
    }
    return false;
  }

  onChangeTab=(val)=>{
    this.props.store.dispatch(setshowfavourites(val))
  }
  render(){
    const {list,favourites,showFavourites}=this.props.store.getState()// before our sttae is simply th array but now it is a object now our state have lsist of arrya so use list

    console.log('RENDER',this.props.store.getState());
    const dispalyMovies=showFavourites ? favourites :list;
    return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavourites ?'' :'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites ?'active-tabs' : ''} `} onClick={()=>this.onChangeTab(true)}>Favourites</div>
        </div>
        <div className="list">
          {dispalyMovies.map((movie,index) =>(
            <MovieCard 
            movie={movie} 
            key={`movies-${index}`} 
            dispatch={this.props.store.dispatch} 
            isFavourite={this.isMovieFavourite(movie)}
            />// we have to give the key specific so we use it here as index and pass in data.map index with the movie 
          ))}
        </div>
        {dispalyMovies.length===0 ? <div className='no-movies'>No Movies To Display!</div> : null}
      </div>
    </div>
  );
  }
  
}

export default App;
