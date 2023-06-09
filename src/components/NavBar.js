import { ReactComponent as BookmarkFilledIconSVG } from "./../assets/bookmark-filled.svg";
import { ReactComponent as HomeSVG } from "./../assets/Home.svg";
import { ReactComponent as SettingsSVG } from "./../assets/settings.svg";

export default function NavBar({ onGoHome, onGoBookmarks, onGoCardForm }) {
  return (
    <footer className="nav-bar__footer">
      <nav className="nav-bar">
        <button type="button" className="nav-bar__button" onClick={onGoHome}>
          <HomeSVG className="home-icon-svg" />
        </button>
        <button
          type="button"
          className="nav-bar__button"
          onClick={onGoBookmarks}
        >
          <BookmarkFilledIconSVG className="bookmark-icon-svg" />
        </button>
        <button
          type="button"
          className="nav-bar__button"
          onClick={onGoCardForm}
        >
          <SettingsSVG className="settings-icon-svg" />
        </button>
      </nav>
    </footer>
  );
}
