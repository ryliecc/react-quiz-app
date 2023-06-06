export default function CardList() {
  return (
    <div className="card-list">
      <section className="card-list__card">
        <button type="button" className="card__bookmark-button">
          🤍
        </button>
        <p className="card__question">What is Rylie's favorite color?</p>
        <button type="button" className="card__show-answer-button">
          Show answer
        </button>
        <p className="card__answer">Yellow!</p>
        <ul className="card__tag-list">
          <li className="card__tag">#personal</li>
          <li className="card__tag">#colors</li>
        </ul>
      </section>
      <section className="card-list__card">
        <button type="button" className="card__bookmark-button">
          🤍
        </button>
        <p className="card__question">What is Rylie's dog called?</p>
        <button type="button" className="card__show-answer-button">
          Show answer
        </button>
        <p className="card__answer">Karlchen!</p>
        <ul className="card__tag-list">
          <li className="card__tag">#personal</li>
          <li className="card__tag">#animals</li>
        </ul>
      </section>
    </div>
  );
}
