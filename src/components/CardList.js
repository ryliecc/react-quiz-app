export default function CardList({
  displayedCards,
  onDeleteCard,
  onToggleBookmark,
}) {
  return (
    <div className="card-list">
      {displayedCards.map((card) => {
        let buttonIcon;
        if (card.isBookmarked === true) {
          buttonIcon = "❤️";
        } else {
          buttonIcon = "🤍";
        }
        return (
          <section className="card-list__card" key={card.id}>
            <button
              type="button"
              className="card__bookmark-button"
              onClick={() => onToggleBookmark(card.id)}
            >
              {buttonIcon}
            </button>
            <button
              type="button"
              className="card__delete-button"
              onClick={() => onDeleteCard(card.id)}
            >
              🗑️
            </button>
            <p className="card__question">{card.question}</p>
            <button type="button" className="card__show-answer-button">
              Show answer
            </button>
            <p className="card__answer">{card.answer}</p>
          </section>
        );
      })}
    </div>
  );
}
