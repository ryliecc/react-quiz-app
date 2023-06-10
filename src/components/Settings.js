import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Settings({ showSettings }) {
  const [isDarkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }
  return (
    <section
      className="settings"
      style={{ visibility: showSettings ? "visible" : "collapse" }}
    >
      <h2 className="settings__heading">Settings</h2>
      <p className="settings__dark-mode">
        Dark Mode:
        <DarkModeSwitch
          style={{ marginBottom: "2rem" }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={50}
          sunColor="#abb1cf"
          className="settings__dark-mode-switch"
        />
      </p>
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
