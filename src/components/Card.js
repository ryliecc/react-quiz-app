import { useState } from "react";
import { uid } from "uid";

export default function Card({
  id,
  question,
  onClick,
  answer,
  tags,
  isBookmarked,
  onToggleBookmark,
  onDeleteCard,
}) {
  const [isHidden, setHidden] = useState(true);
  const answerClass = isHidden
    ? "card__answer"
    : "card__answer card__answer--unhide";
  const buttonText = isHidden ? "Show answer" : "Hide answer";
  const bookmarkIcon = isBookmarked ? "❤️" : "🤍";

  const tagList = tags.map((tag) => {
    const tagID = `tag-${uid()}`;
    return (
      <li className="card__tag-list-item" id={tagID} key={tagID}>
        # {tag}
      </li>
    );
  });

  function handleShowAnswer() {
    setHidden(!isHidden);
  }

  return (
    <section className="card-list__card" id={id}>
      <p className="card__question">{question}</p>
      <button
        type="button"
        className="card__show-answer-button"
        onClick={handleShowAnswer}
      >
        {buttonText}
      </button>
      <p className={answerClass}>{answer}</p>
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
