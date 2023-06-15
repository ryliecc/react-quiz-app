import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import NavBar from "./components/NavBar";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Main from "./components/Main";
import { defaultCards } from "./data.js";
import { useState } from "react";
import Settings from "./components/Settings";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function App() {
  const [allCards, setAllCards] = useLocalStorageState("allCards", {
    defaultValue: defaultCards,
  });

  const [displayedCards, setDisplayedCards] = useState(allCards);

  const [cardListTitle, setCardListTitle] = useState("Home");

  const [showForm, setShowForm] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [isDarkMode, setDarkMode] = useState(false);

  function handleSubmitCardForm(event) {
    event.preventDefault();
    const form = event.target;
    const tags = form.elements.tags.value.split(",");
    const newCard = {
      id: `card-${uid()}`,
      question: form.elements.question.value,
      answer: form.elements.answer.value,
      tags: [...tags],
      isBookmarked: false,
    };
    setAllCards([newCard, ...allCards]);
    form.reset();
  }

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
        <CardForm onSubmit={handleSubmitCardForm} showForm={showForm} />
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
