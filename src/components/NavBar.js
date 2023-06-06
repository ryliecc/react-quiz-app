export default function NavBar({ onGoHome, onGoBookmarks, onGoCardForm }) {
  return (
    <nav className="nav-bar">
      <button type="button" className="nav-bar__button" onClick={onGoHome}>
        🏠
      </button>
      <button type="button" className="nav-bar__button" onClick={onGoBookmarks}>
        🤍
      </button>
      <button type="button" className="nav-bar__button" onClick={onGoCardForm}>
        ➕
      </button>
    </nav>
  );
}
