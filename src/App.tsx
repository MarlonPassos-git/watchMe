import { useEffect, useState } from 'react';
import { MovieCard } from './components/MovieCard';

// import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import './styles/sidebar.scss';
import { SideBar } from './components/SideBar';


interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  
  interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
  
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  
  

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
		<Content 
		genres={genres} 
		setSelectedGenreId={setSelectedGenreId}
		selectedGenreId={selectedGenreId}
		/>
		<SideBar
			  setGenres={setGenres}
			  selectedGenreId={selectedGenreId}
			  setMovies={setMovies}
			  setSelectedGenre={setSelectedGenre}
			  selectedGenre={selectedGenre}
			  movies={movies}
		/>
      
    </div>
  )
}