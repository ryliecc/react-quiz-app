import { useState } from "react";
import { uid } from "uid";
import { ReactComponent as BookmarkIconSVG } from "./../assets/bookmark.svg";
import { ReactComponent as BookmarkFilledIconSVG } from "./../assets/bookmark-filled.svg";
import { ReactComponent as XMarkSVG } from "./../assets/x-mark.svg";

export default function Card({
  id,
  question,
  answer,
  tags,
  isBookmarked,
  onShowTaggedCards,
  onToggleBookmark,
  onDeleteCard,
}) {
  const [isHidden, setHidden] = useState(true);
  const answerClass = isHidden
    ? "card__answer"
    : "card__answer card__answer--unhide";
  const buttonText = isHidden ? "Show answer" : "Hide answer";
  const bookmarkIcon = isBookmarked ? (
    <>
      <BookmarkFilledIconSVG />
    </>
  ) : (
    <>
      <BookmarkIconSVG />
    </>
  );

  const tagList = tags.map((tag) => {
    const tagID = `tag-${uid()}`;
    return (
      <li
        className="card__tag-list-item"
        id={tagID}
        key={tagID}
        onClick={() => onShowTaggedCards(tag)}
      >
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

        <button
          type="button"
          className="card__bookmark-button"
          onClick={() => onToggleBookmark(id)}
        >
          {bookmarkIcon}
        </button>
        <XMarkSVG
          className="card__delete-button"
          onClick={() => onDeleteCard(id)}
        />
      </ul>
    </section>
  );
}
