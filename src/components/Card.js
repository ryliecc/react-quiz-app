export default function Card({
  id,
  question,
  answer,
  tags,
  isBookmarked,
  onToggleBookmark,
  onDeleteCard,
}) {
  let bookmarkIcon;
  if (isBookmarked === true) {
    bookmarkIcon = "❤️";
  } else {
    bookmarkIcon = "🤍";
  }

  const tagList = tags.map((tag) => {
    return (
      <li className="card__tag-list-item" id={("tag", { id })}>
        {tag}
      </li>
    );
  });
  console.log(tags);
  return (
    <section className="card-list__card" id={id}>
      <p className="card__question">{question}</p>
      <button type="button" className="card__show-answer-button">
        Show answer
      </button>
      <p className="card__answer">{answer}</p>
      <ul className="card__tag-list">
        {tagList}
        <section className="card__button-section">
          <button
            type="button"
            className="card__bookmark-button"
            onClick={() => onToggleBookmark(id)}
          >
            {bookmarkIcon}
          </button>
          <button
            type="button"
            className="card__delete-button"
            onClick={onDeleteCard}
          >
            🗑️
          </button>
        </section>
      </ul>
    </section>
  );
}
