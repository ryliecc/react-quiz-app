import { uid } from "uid";

export default function Card({
  id,
  question,
  answer,
  tags,
  isBookmarked,
  onToggleBookmark,
  onDeleteCard,
}) {
  const bookmarkIcon = isBookmarked ? "❤️" : "🤍";

  console.log(tags);
  const tagList = tags.map((tag) => {
    const tagID = `tag-${uid()}`;
    return (
      <li className="card__tag-list-item" id={tagID} key={tagID}>
        # {tag}
      </li>
    );
  });

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
            onClick={() => onDeleteCard(id)}
          >
            🗑️
          </button>
        </section>
      </ul>
    </section>
  );
}
