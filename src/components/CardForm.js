export default function CardForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="card-form">
      <h2 className="card-form__title">Add a new Card!</h2>
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
      <label htmlFor="card-form__tags" className="card-form__tags-label">
        Tags:
      </label>
      <input
        type="text"
        id="card-form__tags"
        className="card-form__tags"
        name="tags"
      ></input>
      <button type="submit" className="card-form__submit-button">
        Submit
      </button>
    </form>
  );
}
