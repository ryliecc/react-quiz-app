import { useState } from "react";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="card__delete-button--svg"
            >
              <path d="M18 19c0 1.66-1.34 3-3 3H8c-1.66 0-3-1.34-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1v12M6 7v12c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V7H6m12-1V5h-4l-1-1h-3L9 5H5v1h13M8 9h1v10H8V9m6 0h1v10h-1V9Z" />
            </svg>
          </button>
        </section>
      </ul>
    </section>
  );
}
