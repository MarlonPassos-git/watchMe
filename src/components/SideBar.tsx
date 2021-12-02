import { useEffect } from "react";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

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
  
interface SideBarProps {
  setGenres: ([]: GenreResponseProps[]) => void;
  selectedGenreId: number;
  setMovies: ([]: MovieProps[]) => void;
  setSelectedGenre: ({ }: GenreResponseProps) => void;
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function SideBar({ setGenres, selectedGenreId, movies, setMovies, setSelectedGenre ,selectedGenre}: SideBarProps) {
  
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
		setMovies(response.data);
		
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
    setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}