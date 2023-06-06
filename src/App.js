import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import NavBar from "./components/NavBar";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Main from "./components/Main";
import { initialCards } from "./data.js";

export default function App() {
  const [allCards, setAllCards] = useLocalStorageState("allCards", [
    initialCards,
  ]);

  function handleAddNewCard(event) {
    event.preventDefault();
    const form = event.target;
    const newCard = {
      key: uid(),
      question: form.elements.question.value,
      answer: form.elements.answer.value,
      tag: form.elements.tag.value,
      isBookmarked: false,
    };
    setAllCards([...allCards, newCard]);
    form.reset();
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

  return (
    <>
      <Header />
      <Main>
        <CardForm onAddNewCards={handleAddNewCard} />
        <CardList
          displayedCards={allCards}
          onDeleteCard={handleDeleteCard}
          onToggleBookmark={handleToggleBookmark}
        />
      </Main>
      <NavBar />
    </>
  );
}
