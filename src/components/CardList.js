export default function CardList({ cardListTitle, children }) {
  return (
    <div className="card-list">
      <h2 className="card-list__title">{cardListTitle}</h2>
      {children}
    </div>
  );
}
