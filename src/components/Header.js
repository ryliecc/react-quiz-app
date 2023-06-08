export default function Header() {
  return (
    <header className="header">
      <h1 className="header__h1">Rylie's QuizApp</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="header__plus-svg"
      >
        <path d="M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1m4.5-9c5.25 0 9.5 4.25 9.5 9.5S16.75 22 11.5 22 2 17.75 2 12.5 6.25 3 11.5 3m0 1C6.81 4 3 7.81 3 12.5c0 4.69 3.81 8.5 8.5 8.5 4.69 0 8.5-3.81 8.5-8.5C20 7.81 16.19 4 11.5 4Z" />
      </svg>
    </header>
  );
}
