export default function Settings({ showSettings, children }) {
  return (
    <section
      className="settings"
      style={{ visibility: showSettings ? "visible" : "collapse" }}
    >
      <h2 className="settings__heading">Settings</h2>
      <p className="settings__dark-mode">Dark Mode: {children}</p>
      <p className="settings__epilogue">
        Thank you for checking my App out!
        <br />I created it to practice React during my Web Development Bootcamp.
        <br />
        If you like it, you might want to take a look at my{" "}
        <a href="https://github.com/ryliecc">GitHub Profile</a> as well. 🤗
      </p>
    </section>
  );
}
