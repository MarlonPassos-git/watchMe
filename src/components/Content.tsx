import { useState } from "react";
import { Button } from '../components/Button';
import '../styles/content.scss';


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ContentProps {
  genres: GenreResponseProps[];
  setSelectedGenreId: (id: number) => void;
  selectedGenreId: number;
}

export function Content({genres, setSelectedGenreId, selectedGenreId}: ContentProps) {

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}