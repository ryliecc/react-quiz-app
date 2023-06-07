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
  let [allCards, setAllCards] = useLocalStorageState("allCards", []);

  if ({ allCards } === undefined) {
    console.log("allcards state undefined");
    setAllCards([defaultCards]);
    console.log("cards set to default");
  } else console.log("all is well");

  function addCard(question, answer, tags) {
    const newCard = {
      id: `card-${uid()}`,
      question: question,
      answer: answer,
      tags: [...tags],
      isBookmarked: false,
    };
    setAllCards([newCard, ...allCards]);
  }

  function handleToggleBookmark(toBookmarkId) {
    console.log("Bookmark toggled", toBookmarkId);
  }
  function handleDeleteCard(toDeleteId) {
    console.log("Delete clicked", toDeleteId);
  }

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

  return (
    <>
      <Header />
      <Main>
        <CardForm addCard={addCard} />
        <CardList>{cardList}</CardList>
      </Main>
      <NavBar />
    </>
  );
}
