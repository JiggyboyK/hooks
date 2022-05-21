import { useState, useRef } from "react"
import './App.css';
import MovieList from './components/MovieList/MovieList';


// Create the following components:
// MovieCard
// MovieList
// Filter ( title, rate)
// Every movie should have the following attributes: title, description, posterURL, rating
// The user should be:
// Able to add a new movie.
// Filter the movies with title/rating.

function App() {
  const [list, setList] = useState([
    {
      id: '1',
      posterURL: 'https://cdn.fstatic.com/media/movies/covers/2019/06/qadfgdf.jpg',
      title: 'Love Death + Robots',
      description: 'This collection of animated short stories spans several genres, including science fiction, fantasy, horror and comedy. World-class animation creators bring captivating stories to life in the form of a unique and visceral viewing experience.',
      rating: '8'
    },
  
    {
      id: '2',
      posterURL: 'https://resizing.flixster.com/g6WGvi3ynvfItWC9RX206-jtkRM=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvMDIyOTBmN2QtMzM0Yi00ODUxLWE0MWYtMmViYWJiOGViZjRkLmpwZw==',
      title: 'Ozarks',
      description: "A financial planner who relocates his family from Chicago to a summer resort community in the Ozarks. With wife and their two kids in tow, Whole family is on the move after a money-laundering scheme goes wrong, forcing them to pay off a substantial debt to a Mexican drug lord in order to keep the family safe.",
      rating: '7'
    }

  ])
  const title = useRef();
  const desc = useRef();
  const rating = useRef();
  const imgLink = useRef();


  const handleAdd = (e) => {
    e.preventDefault();

    const movie = {
      title: title.current.value,
      description: desc.current.value,
      rating: rating.current.value,
      posterURL: imgLink.current.value
      
    }

    setList(prevList => [...prevList, movie])

  }

  return (
    <div className="App">
      <MovieList list={list}/>

      <form onSubmit={handleAdd}>
            <label>
                Title
                <input type="text" placeholder='title' ref={title}/>
            </label>
            <label>
                Description
                <input type="text" placeholder='description' ref={desc}/>
            </label>
            <label>
                Image Link
                <input type="text" placeholder='description' ref={imgLink}/>
            </label>
            <label>
                Rating
                <input type="number" ref={rating} />
            </label>
            <button type='submit'>ADD</button>
        </form>
    </div>
  );
}

export default App;
