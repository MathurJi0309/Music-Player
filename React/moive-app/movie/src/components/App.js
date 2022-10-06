import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

class App extends React.Component{
  componentDidMount(){
    const {store}=this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
    })
    this.forceUpdate();
    // make api call here
    //now we have to use the dispatch action here
    store.dispatch({
      type:'ADD_MOVIES',
      movies:data
    })
    console.log('STATE',this.props.store.getState());
  }
  render(){
    const movies=this.props.store.getState()
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {movies.map((movie,index) =>(
            <MovieCard movie={movie} key={`movies-${index}`} />// we have to give the key specific so we use it here as index and pass in data.map index with the movie 
          ))}
        </div>

      </div>
    </div>
  );
  }
  
}

export default App;
