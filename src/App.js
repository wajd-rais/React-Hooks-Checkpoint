import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The Crime Is Mine Trailer',
      description: 'Madeleine Verdier, a penniless actress is accused of the murder of a famous producer. With the help of her best friend she proves that, she is acquitted for self-defense. Then begins a life of glory and success, until truth comes to light.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMzA3NDlkMTQtNjNhMS00NTk2LWI0YWYtOTY4YjBjZWRjN2ViXkEyXkFqcGdeQXVyMDA5MDg4Nw@@._V1_.jpg',
      rating: 8.8
    },

    {
      id: 2,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://www.gstatic.com/tv/thumb/v22vodart/2187/p2187_v_v8_aa.jpg',
      rating: 9.3
    },
    {
      id: 3,
      title: 'The Godfather',
      description: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2023/05/the-godfather-poster.jpeg',
      rating: 9.2
    },
    {
      id: 4,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      rating: 9.0
    },
    {
      id: 5,
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      rating: 8.9
    },
    {
      id: 6,
      title: 'The Lord of the Rings: The Return of the King',
      description: 'Gandalf and Aragorn lead the World of Men against Saurons army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      rating: 8.9
    },
    {
      id: 7,
      title: 'Schindlers List',
      description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
      posterURL: 'https://m.media-amazon.com/images/I/81+H4lZVw+L._AC_UF894,1000_QL80_.jpg',
      rating: 8.9
    },      
    {
      id: 8,
      title: 'Forrest Gump',
      description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
      posterURL: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_v13_aa.jpg',
      rating: 8.8
    },
    {
      id: 9,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_af.jpg',
      rating: 8.8
    },
    {
      id: 10,
      title: 'The Matrix',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      posterURL: 'https://m.media-amazon.com/images/I/613ypTLZHsL._AC_UF1000,1000_QL80_.jpg',
      rating: 8.7
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      movie.rating >= rating
    );
    setFilteredMovies(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: movies.length + 1,
      title: formData.title,
      description: formData.description,
      posterURL: formData.posterURL,
      rating: parseFloat(formData.rating)
    };
    setMovies(prevMovies => [...prevMovies, newMovie]);
    setFilteredMovies(prevMovies => [...prevMovies, newMovie]);
    setFormData({
      title: '',
      description: '',
      posterURL: '',
      rating: ''
    });
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="app">
  <h1>My Cinema Platform</h1>
  <button className="add-movie-button" onClick={toggleForm}>Add Movie</button>
  {showForm && (
    <div className="movie-form-card"> 
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleInputChange} />
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} />
            <input type="text" name="posterURL" placeholder="Poster URL" value={formData.posterURL} onChange={handleInputChange} />
            <input type="number" name="rating" placeholder="Rating" value={formData.rating} onChange={handleInputChange} />
            <button type="submit">Add Movie</button>
          </form>
        </div>
      </div>
    </div>
  )}
      <Filter handleFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;