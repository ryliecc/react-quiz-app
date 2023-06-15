import { ReactComponent as BookmarkFilledIconSVG } from "./../assets/bookmark-filled.svg";
import { ReactComponent as HomeSVG } from "./../assets/Home.svg";
import { ReactComponent as SettingsSVG } from "./../assets/settings.svg";

export default function NavBar({
  setDisplayedCards,
  setCardListTitle,
  allCards,
  setShowSettings,
  showSettings,
  children,
}) {
  function handleGoHome() {
    setDisplayedCards(allCards);
    setCardListTitle("Home");
  }
  function handleGoBookmarks() {
    const bookmarkedCards = allCards.filter(
      (card) => card.isBookmarked === true
    );
    setDisplayedCards(bookmarkedCards);
    setCardListTitle("Bookmarked Cards");
  }

  function handleGoSettings() {
    setShowSettings(!showSettings);
  }
  return (
    <footer className="footer">
      {children}
      <nav className="nav-bar">
        <button
          type="button"
          className="nav-bar__button"
          onClick={handleGoHome}
        >
          <HomeSVG className="home-icon-svg" />
        </button>
        <button
          type="button"
          className="nav-bar__button"
          onClick={handleGoBookmarks}
        >
          <BookmarkFilledIconSVG className="bookmark-icon-svg" />
        </button>
        <button
          type="button"
          className="nav-bar__button"
          onClick={handleGoSettings}
        >
          <SettingsSVG className="settings-icon-svg" />
        </button>
      </nav>
    </footer>
  );
}
