import { useState } from "react";

export default function CardForm({ addCard }) {
  const [tags, setTags] = useState([]);

  function handleSubmitCardForm(event) {
    console.log("submit has started", tags);
    event.preventDefault();
    const form = event.target;
    console.log(form.elements.tags.value);
    const tagString = form.elements.tags.value;
    console.log(tagString, "this is the tag string");
    const tagArray = tagString.split(" ");
    console.log(tagArray, "this is the tag array");
    setTags([tagArray]);
    console.log(tags);
    const question = form.elements.question.value;
    const answer = form.elements.answer.value;
    addCard(question, answer, tags);
    form.reset();
  }
  return (
    <form onSubmit={handleSubmitCardForm} className="card-form">
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
