import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { uid } from "uid";
import NavBar from "./components/NavBar";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  /* const initialCards = [
    {
      id: uid(),
      question: "What is Rylie's favorite color?",
      answer: "Yellow!",
      tags: ["personal", "colors"],
      isBookmarked: false,
    },
    {
      id: uid(),
      question: "What is Rylie's dog called?",
      answer: "Karlchen!",
      tags: ["personal", "animals"],
      isBookmarked: true,
    },
  ]; */
  const [allCards, setAllCards] = useLocalStorageState("allCards", [
    {
      id: uid(),
      question: "What is Rylie's favorite color?",
      answer: "Yellow!",
      tags: ["personal", "colors"],
      isBookmarked: false,
    },
    {
      id: uid(),
      question: "What is Rylie's dog called?",
      answer: "Karlchen!",
      tags: ["personal", "animals"],
      isBookmarked: true,
    },
  ]);
  const bookmarkedCards = allCards.filter((card) => card.isBookmarked === true);
  const [mainElement, setMainElement] = useState(
    <CardList
      displayedCards={allCards}
      onDeleteCard={handleDeleteCard}
      onToggleBookmark={handleToggleBookmark}
    />
  );

  /* if (allCards == null) {
    setAllCards(initialCards);
  } */

  function handleAddNewCard(event) {
    event.preventDefault();
    const form = event.target;
    const originalTags = form.elements.tags.value;
    const splitTags = originalTags.split(" ");
    const newCard = {
      id: uid(),
      question: form.elements.question.value,
      answer: form.elements.answer.value,
      tags: splitTags,
      isBookmarked: false,
    };
    setAllCards([...allCards, newCard]);
    form.reset();
    form.elements.question.focus();
  }

  function handleToggleBookmark(toBookmark) {
    const updatedCards = allCards.map((card) => {
      if (card.id === toBookmark) {
        return { ...card, isBookmarked: !card.isBookmarked };
      }
      return card;
    });
    setAllCards(updatedCards);
  }

  function handleDeleteCard(toDelete) {
    const updatedCards = allCards.filter((card) => card.id !== toDelete);
    setAllCards(updatedCards);
  }

  function handleGoHome() {
    setMainElement(
      <CardList
        displayedCards={allCards}
        onDeleteCard={handleDeleteCard}
        onToggleBookmark={handleToggleBookmark}
      />
    );
  }

  function handleGoBookmarks() {
    setMainElement(
      <CardList
        displayedCards={bookmarkedCards}
        onDeleteCard={handleDeleteCard}
        onToggleBookmark={handleToggleBookmark}
      />
    );
  }

  function handleGoCardForm() {
    setMainElement(<CardForm onAddNewCards={handleAddNewCard} />);
  }
  return (
    <>
      <Header />
      <Main>{mainElement}</Main>
      <NavBar
        onGoHome={handleGoHome}
        onGoBookmarks={handleGoBookmarks}
        onGoCardForm={handleGoCardForm}
      />
    </>
  );
}
