import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import NavBar from "./components/NavBar";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const initialCards = [
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
      isBookmarked: false,
    },
  ];
  const [allCards, setAllCards] = useLocalStorageState("allCards", []);

  if (allCards == null) {
    setAllCards(initialCards);
  }

  function handleAddNewCard(event) {
    event.preventDefault();
    const form = event.target;
    const newCard = {
      id: uid(),
      question: form.elements.question.value,
      answer: form.elements.answer.value,
      tags: [form.elements.tags.value],
      isBookmarked: false,
    };
    setAllCards([...allCards, newCard]);
    form.reset();
    form.elements.question.focus();
  }
  return (
    <>
      <Header />
      <Main>
        <CardForm onAddNewCard={handleAddNewCard} />
        <CardList />
      </Main>
      <NavBar />
    </>
  );
}
