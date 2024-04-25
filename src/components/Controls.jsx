import "../styles/controls.css";

export const Controls = ({ page, setPage }) => {
  const nextPage = () => {
    if (page < 500) {
      //available pages
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="controlsContainer">
      <button onClick={previousPage} id="previousPage">
        <i className="bi bi-arrow-left-circle-fill"></i>
      </button>
      <p>{page}</p>
      <button onClick={nextPage} id="nextPage">
        <i className="bi bi-arrow-right-circle-fill"></i>
      </button>
    </div>
  );
};
