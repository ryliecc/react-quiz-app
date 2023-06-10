import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Settings() {
  const [isDarkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }
  return (
    <section className="settings">
      <h2>Settings</h2>
      <p>Dark Mode</p>
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={50}
        sunColor="white"
      />
      <p>
        Thank you for checking my App out! I created it to practice React during
        my Web Development Bootcamp. If you like it, you might want to take a
        look at my <a href="https://github.com/ryliecc">GitHub Profile</a> as
        well.
      </p>
    </section>
  );
}
