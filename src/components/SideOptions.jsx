import '../styles/sideOptions.css'

export const SideOptions = () => {
  return (
    <div className="options">
        <h2>MoviesWeb</h2>
        <ul>
            <li> 
              <i className="bi bi-house-fill"></i> 
              <a href="#"> Home </a>
            </li>
            <li> 
              <i className="bi bi-camera-reels-fill"></i> 
              <a href="#"> Movies </a>
            </li>
            <li> 
              <i className="bi bi-film"></i> 
              <a href="#"> Series </a>
            </li>
            <li> 
              <i className="bi bi-collection-play-fill"></i> 
              <a href="#"> Animes </a>
            </li>
            <li>
              <i className="bi bi-robot"></i>
              <a href="#">Cartoons</a></li>
            <li>
              <i className="bi bi-emoji-smile-fill"></i>
              <a href="#">Kids</a></li>
        </ul>
    </div>
  )
}
