export default function CardForm({ onAddNewCard }) {
  return (
    <>
      <h2>Add a new Card!</h2>
      <form onSubmit={onAddNewCard}>
        <label
          htmlFor="card-form__question"
          className="card-form__question-label"
        >
          Question:
        </label>
        <textarea
          id="card-form__question"
          name="question"
          class="card-form__question"
          cols="30"
          rows="2"
        ></textarea>
        <label htmlFor="card-form__answer" className="card-form__answer-label">
          Answer:
        </label>
        <textarea
          id="card-form__answer"
          name="answer"
          class="card-form__answer"
          cols="30"
          rows="2"
        ></textarea>
        <label htmlFor="card-form__tags" className="card-form__tags-label">
          Tags:
        </label>
        <small>Seperate multiple tags with a space.</small>
        <input
          type="text"
          id="card-form__tags"
          class="card-form__tags"
          name="tags"
        ></input>
        <button type="submit" className="card-form__submit-button">
          Submit
        </button>
      </form>
    </>
  );
}
