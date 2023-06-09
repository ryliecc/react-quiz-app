import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import NavBar from "./components/NavBar";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Main from "./components/Main";
import { defaultCards } from "./data.js";
import Card from "./components/Card";
import { useState } from "react";

export default function App() {
  const [allCards, setAllCards] = useLocalStorageState("allCards", {
    defaultValue: defaultCards,
  });

  const [displayedCards, setDisplayedCards] = useState(allCards);

  const [showForm, setShowForm] = useState(false);

  let cardList = displayedCards.map((card) => (
    <Card
      id={card.id}
      key={card.id}
      question={card.question}
      answer={card.answer}
      tags={card.tags}
      onShowTaggedCards={handleShowTaggedCards}
      isBookmarked={card.isBookmarked}
      onToggleBookmark={handleToggleBookmark}
      onDeleteCard={handleDeleteCard}
    />
  ));

  function handleShowForm() {
    setShowForm(!showForm);
  }

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

  function handleShowTaggedCards(tagID) {
    const taggedCards = allCards.filter((card) => card.tags.includes(tagID));
    setDisplayedCards(taggedCards);
  }

  function handleToggleBookmark(toBookmarkId) {
    setAllCards((prevAllCards) =>
      prevAllCards.map((card) => {
        if (toBookmarkId === card.id) {
          return { ...card, isBookmarked: !card.isBookmarked };
        }
        return card;
      })
    );

    setDisplayedCards((prevDisplayedCards) =>
      prevDisplayedCards.map((card) => {
        if (toBookmarkId === card.id) {
          return { ...card, isBookmarked: !card.isBookmarked };
        }
        return card;
      })
    );
  }

  function handleDeleteCard(toDeleteId) {
    const remainingCards = allCards.filter((card) => toDeleteId !== card.id);
    setAllCards(remainingCards);
  }

  function handleGoHome() {
    setDisplayedCards(allCards);
  }

  function handleGoBookmarks() {
    const bookmarkedCards = allCards.filter(
      (card) => card.isBookmarked === true
    );
    setDisplayedCards(bookmarkedCards);
  }

  return (
    <>
      <Header handleShowForm={handleShowForm} showForm={showForm}>
        <CardForm onSubmit={handleSubmitCardForm} showForm={showForm} />
      </Header>
      <Main>
        <CardList>{cardList}</CardList>
      </Main>
      <NavBar onGoHome={handleGoHome} onGoBookmarks={handleGoBookmarks} />
    </>
  );
}
