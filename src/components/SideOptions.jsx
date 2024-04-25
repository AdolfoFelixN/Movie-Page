import "../styles/sideOptions.css";

const Li = ({ className, textAnchor }) => {
  return (
    <li>
      <i className={className}></i>
      <a href="#">{textAnchor}</a>
    </li>
  );
};

const buttonHide = () => {
  alert('Esconder Lateral')
}

export const SideOptions = () => {
  return (
    <div className="options">
      <div className="title">
        <h2>MoviesWeb</h2>
        <hr />
      </div>
      <div className="main-options">
        <button id="hide" onClick={buttonHide}><i className="bi bi-arrow-left-circle"></i></button>
        <p>Main</p>
        <ul>          
          <Li className={"bi bi-camera-reels-fill"} textAnchor={"Movies"} />
          <Li className={"bi bi-film"} textAnchor={"Series"} />
          <Li className={"bi bi-collection-play-fill"} textAnchor={"Animes"} />
          <Li className={"bi bi-robot"} textAnchor={"Cartoons"} />
          <Li className={"bi bi-emoji-smile-fill"} textAnchor={"Kids"} />
        </ul>
      </div>
      <div className="more-options">
        <p>More</p>
        <ul>
          <Li className={"bi bi-gear"} textAnchor={"Settings"} />
          <Li className={"bi bi-question-circle"} textAnchor={"Help"} />
        </ul>
      </div>
    </div>
  );
};
