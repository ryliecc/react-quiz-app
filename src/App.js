import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import NavBar from "./components/NavBar";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <CardForm />
      <CardList />
      <NavBar />
    </>
  );
}
