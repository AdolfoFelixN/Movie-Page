import "../styles/principal.css";
import { useEffect, useState } from "react";
import { Controls } from "./Controls";
import { Modal } from "./Modal";

export const Principal = ({ sectionTitle }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [movieSelected, setMovieSelected] = useState({
    title: "",
    imageUrl: "",
    description: "",
    filmRating: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=4acfd667d24272e7fdb51a14d37aaf96&sort_by=popularity.desc&language=en-US&page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
      });
    setShowModal(false);
  }, [page]);

  const handleMovieClick = (valor) => {
    setMovieSelected({
      title: valor.title,
      imageUrl: `https://image.tmdb.org/t/p/w500${valor.poster_path}`,
      description: valor.overview,
      filmRating: valor.vote_average,
    });
    setShowModal(true); // Mostrar el modal cuando se selecciona una película
  };

  const closeModal = () => {
    setMovieSelected({
      title: "",
      imageUrl: "",
      description: "",
      filmRating: "",
    });
    setShowModal(false);
  };

  return (
    <>
      <main className="moviesSection">
        <div className="movies-container">
          <p>{sectionTitle}</p>
          <div className="movies">
            {data.map((valor) => (
              <div
                className="contenido"
                key={valor.id}
                onClick={() => handleMovieClick(valor)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${valor.poster_path}`}
                  alt={valor.title}
                />
                <li key={valor.id}>{valor.title}</li>
              </div>
            ))}
          </div>
        </div>
        {/* Mostrar el modal si showModal es true */}
        {showModal && (
          <Modal
            title={movieSelected.title}
            description={movieSelected.description}
            image={movieSelected.imageUrl}
            vote={movieSelected.filmRating}
            onClose={closeModal} // Proporciona una función para cerrar el modal
          />
        )}
      </main>

      <Controls page={page} setPage={setPage} />
    </>
  );
};
