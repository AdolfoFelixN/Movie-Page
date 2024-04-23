import '../styles/search.css'

export const Search = () => {
  return (
    <nav>
      <form action="" id='search-form'>
        <input type="text" placeholder="Movie, Serie, Category" />
        <button><i className="bi bi-search bi-lg"></i></button>
      </form>
    </nav>
  );
};
