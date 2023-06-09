import { uid } from "uid";

export default function CardForm({ showForm, allCards, setAllCards }) {
  function handleSubmitCardForm(event) {
    event.preventDefault();
    const form = event.target;
    const tags = form.elements.tags.value.split(",");
    const newCard = {
      id: `card-${uid()}`,
      question: form.elements.question.value,
      answer: form.elements.answer.value,
      tags: [...tags],
      isBookmarked: false,
    };
    setAllCards([newCard, ...allCards]);
    form.reset();
  }
  return (
    <form
      onSubmit={handleSubmitCardForm}
      className="card-form"
      style={{ visibility: showForm ? "visible" : "collapse" }}
    >
      <h2 className="card-form__title">Add a new Card!</h2>
      <label
        htmlFor="card-form__question"
        className="card-form__question-label"
      >
        question:
      </label>
      <textarea
        id="card-form__question"
        name="question"
        className="card-form__question"
        cols="30"
        rows="2"
        placeholder="e.g.: What was the name of Rylie's first dog?"
      ></textarea>
      <label htmlFor="card-form__answer" className="card-form__answer-label">
        answer:
      </label>
      <textarea
        id="card-form__answer"
        name="answer"
        className="card-form__answer"
        cols="30"
        rows="2"
        placeholder="e.g.: Laila!"
      ></textarea>
      <label htmlFor="card-form__tags" className="card-form__tags-label">
        tags:
        <small className="card-form__tags-info">
          Seperate tags with a comma.
        </small>
      </label>
      <input
        type="text"
        id="card-form__tags"
        className="card-form__tags"
        name="tags"
        placeholder="e.g.: personal pets memories"
      ></input>

      <button type="submit" className="card-form__submit-button">
        Submit
      </button>
    </form>
  );
}
