import useLocalStorageState from "use-local-storage-state";
import { defaultCards } from "./data.js";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import NavBar from "./components/NavBar";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Main from "./components/Main";
import Settings from "./components/Settings";

export default function App() {
  const [allCards, setAllCards] = useLocalStorageState("allCards", {
    defaultValue: defaultCards,
  });

  const [displayedCards, setDisplayedCards] = useState(allCards);

  const [cardListTitle, setCardListTitle] = useState("Home");

  const [showForm, setShowForm] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [isDarkMode, setDarkMode] = useState(false);

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

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  return (
    <div className={"App dark-mode--" + isDarkMode}>
      <Header showForm={showForm} setShowForm={setShowForm}>
        <CardForm
          showForm={showForm}
          allCards={allCards}
          setAllCards={setAllCards}
        />
      </Header>
      <Main>
        <CardList
          cardListTitle={cardListTitle}
          allCards={allCards}
          displayedCards={displayedCards}
          setDisplayedCards={setDisplayedCards}
          setAllCards={setAllCards}
          setCardListTitle={setCardListTitle}
        />
      </Main>
      <NavBar
        onGoHome={handleGoHome}
        onGoBookmarks={handleGoBookmarks}
        onGoSettings={handleGoSettings}
      >
        <Settings showSettings={showSettings}>
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={() => toggleDarkMode(isDarkMode)}
            size={30}
            className="dark-mode-switch"
          />
        </Settings>
      </NavBar>
    </div>
  );
}
