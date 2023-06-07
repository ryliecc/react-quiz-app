import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import NavBar from "./components/NavBar";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Main from "./components/Main";
import { defaultCards } from "./data.js";
import Card from "./components/Card";

export default function App() {
  const [allCards, setAllCards] = useLocalStorageState("allCards", {
    defaultValue: defaultCards,
  });

  const cardList = allCards.map((card) => (
    <Card
      id={card.id}
      key={card.id}
      question={card.question}
      answer={card.answer}
      tags={card.tags}
      isBookmarked={card.isBookmarked}
      onToggleBookmark={handleToggleBookmark}
      onDeleteCard={handleDeleteCard}
    />
  ));

  function handleSubmitCardForm(event) {
    event.preventDefault();
    const form = event.target;
    const tags = form.elements.tags.value.split(" ");
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

  function handleToggleBookmark(toBookmarkId) {
    const updatedCards = allCards.map((card) => {
      if (toBookmarkId === card.id) {
        return { ...card, isBookmarked: !card.isBookmarked };
      }
      return card;
    });
    setAllCards(updatedCards);
  }

  function handleDeleteCard(toDeleteId) {
    const remainingCards = allCards.filter((card) => toDeleteId !== card.id);
    setAllCards(remainingCards);
  }

  return (
    <>
      <Header />
      <Main>
        <CardForm onSubmit={handleSubmitCardForm} />
        <CardList>{cardList}</CardList>
      </Main>
      <NavBar />
    </>
  );
}
