import { ReactComponent as PlusCircleIcon } from "./../assets/PlusCircle.svg";
import { ReactComponent as MinusCircleIcon } from "./../assets/MinusCircle.svg";

export default function Header({ handleShowForm, showForm, children }) {
  const toggleShowIcon = showForm ? (
    <MinusCircleIcon
      className="header__show-form-svg"
      onClick={handleShowForm}
    />
  ) : (
    <PlusCircleIcon
      className="header__show-form-svg"
      onClick={handleShowForm}
    />
  );

  return (
    <header className="header">
      <h1 className="header__h1">React QuizApp</h1>
      {toggleShowIcon}
      {children}
    </header>
  );
}
