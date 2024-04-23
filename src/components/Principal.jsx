import '../styles/principal.css'
import { useEffect, useState } from "react";

export const Principal = ({sectionTitle}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=4acfd667d24272e7fdb51a14d37aaf96"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        
      });
  }, []);

  return (
    <>

      <main className='moviesSection'>
        <div className="movies-container">
          <p>{sectionTitle}</p>
          <div className="movies">
            {data.map((valor) => (
              <div className="contenido" key={valor.id}>                
                <img src={`https://image.tmdb.org/t/p/w500${valor.poster_path}`} alt="" />
                <li key={valor.id}>{valor.title}</li>
              </div>
              
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
