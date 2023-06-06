export default function CardList({ displayedCards }) {
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
            <button type="button" className="card__bookmark-button">
              {buttonIcon}
            </button>
            <p className="card__question">{card.question}</p>
            <button type="button" className="card__show-answer-button">
              Show answer
            </button>
            <p className="card__answer">{card.answer}</p>
            <ul className="card__tag-list">
              {card.tags.map((tag) => {
                return <li className="card__tag-list-item">#{tag}</li>;
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
