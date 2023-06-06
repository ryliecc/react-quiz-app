export default function CardForm({ onAddNewCard }) {
  return (
    <>
      <h2>Add a new Card!</h2>
      <button type="button">⤴️</button>
      <form onSubmit={onAddNewCard}>
        <label>Input Label</label>
        <input type="text"></input>
        <button>Submit</button>
      </form>
    </>
  );
}
