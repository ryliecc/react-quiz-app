import Card from "./Card";

export default function CardList({
  cardListTitle,
  displayedCards,
  setDisplayedCards,
  setAllCards,
  setCardListTitle,
  allCards,
}) {
  let cardList = displayedCards.map((card) => (
    <Card
      id={card.id}
      key={card.id}
      question={card.question}
      answer={card.answer}
      tags={card.tags}
      isBookmarked={card.isBookmarked}
      setDisplayedCards={setDisplayedCards}
      setAllCards={setAllCards}
      setCardListTitle={setCardListTitle}
      allCards={allCards}
    />
  ));

  return (
    <div className="card-list">
      <h2 className="card-list__title">{cardListTitle}</h2>
      {cardList}
    </div>
  );
}
