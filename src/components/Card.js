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
  setDisplayedCards,
  setAllCards,
  setCardListTitle,
  allCards,
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
        onClick={() => handleShowTaggedCards(tag)}
      >
        # {tag}
      </li>
    );
  });

  function handleShowAnswer() {
    setHidden(!isHidden);
  }

  function handleShowTaggedCards(tagID) {
    const taggedCards = allCards.filter((card) => card.tags.includes(tagID));
    setDisplayedCards(taggedCards);
    setCardListTitle(`Cards tagged as #${tagID}:`);
  }

  function handleToggleBookmark(toBookmarkId) {
    setAllCards((prevAllCards) =>
      prevAllCards.map((card) => {
        if (toBookmarkId === card.id) {
          return { ...card, isBookmarked: !card.isBookmarked };
        }
        return card;
      })
    );

    setDisplayedCards((prevDisplayedCards) =>
      prevDisplayedCards.map((card) => {
        if (toBookmarkId === card.id) {
          return { ...card, isBookmarked: !card.isBookmarked };
        }
        return card;
      })
    );
  }

  function handleDeleteCard(toDeleteId) {
    setAllCards((prevAllCards) => {
      return prevAllCards.filter((card) => toDeleteId !== card.id);
    });
    setDisplayedCards((prevDisplayedCards) => {
      return prevDisplayedCards.filter((card) => toDeleteId !== card.id);
    });
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
          onClick={() => handleToggleBookmark(id)}
        >
          {bookmarkIcon}
        </button>
        <XMarkSVG
          className="card__delete-button"
          onClick={() => handleDeleteCard(id)}
        />
      </ul>
    </section>
  );
}
