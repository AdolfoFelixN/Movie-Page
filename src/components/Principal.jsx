import '../styles/principal.css'
import { useEffect, useState } from "react";
import { Controls } from './Controls';
import { Modal } from './Modal';

export const Principal = ({sectionTitle}) => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=4acfd667d24272e7fdb51a14d37aaf96&sort_by=popularity.desc&language=en-US&page=${page}` 
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);              
      });
    
  }, [page]);

  
  const [movieSelected, setMovieSelected] = useState({title: "", imageUrl: "" ,description: "", filmRating: ""})
  console.log(data)

  return (
    <>
      <main className='moviesSection'>      
        <div className="movies-container">
          <p>{sectionTitle}</p>
          <div className="movies">
            {data.map((valor) => (
              <div className="contenido" key={valor.id} onClick={ () => setMovieSelected({title: valor.title, imageUrl: `https://image.tmdb.org/t/p/w500${valor.poster_path}`, description: valor.overview, filmRating: valor.vote_average})}>                 
                <img src={`https://image.tmdb.org/t/p/w500${valor.poster_path}`} alt={`${valor.title}`} />
                <li key={valor.id}>{valor.title}</li>
              </div>
              
            ))}
          </div>
        </div>

        <Modal 
          title={movieSelected.title}
          description={movieSelected.description}
          image={movieSelected.imageUrl}     
          vote={movieSelected.filmRating}     
        />
        
      </main>

      <Controls page={page} setPage={setPage}/>
    </>
  );

  

};
