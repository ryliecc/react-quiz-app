export default function CardForm({ onAddNewCard }) {
  return (
    <>
      <h2 className="card-form__title">Add a new Card!</h2>
      <form onSubmit={onAddNewCard} className="card-form">
        <label
          htmlFor="card-form__question"
          className="card-form__question-label"
        >
          Question:
        </label>
        <textarea
          id="card-form__question"
          name="question"
          className="card-form__question"
          cols="30"
          rows="2"
        ></textarea>
        <label htmlFor="card-form__answer" className="card-form__answer-label">
          Answer:
        </label>
        <textarea
          id="card-form__answer"
          name="answer"
          className="card-form__answer"
          cols="30"
          rows="2"
        ></textarea>
        <label htmlFor="card-form__tag" className="card-form__tag-label">
          Tags:
        </label>
        <input
          type="text"
          id="card-form__tag"
          className="card-form__tag"
          name="tags"
        ></input>
        <button type="submit" className="card-form__submit-button">
          Submit
        </button>
      </form>
    </>
  );
}
