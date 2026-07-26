import { useState } from "react";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import AddNoteForm from "./components/AddNoteForm/AddNoteForm";
import NotesList from "./components/NotesList/NotesList";

function App() {
  const [notes] = useState([
    {
      id: 1,
      title: "Learn React",
      content: "Build my first React project.",
    },
    {
      id: 2,
      title: "Portfolio",
      content: "Finish all 10 engineering projects.",
    },
    {
      id: 3,
      title: "Gym",
      content: "Leg day at 6 PM.",
    },
  ]);

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-10">
      <Header />

      <section className="mb-6 flex gap-4">
        <div className="flex-1">
          <SearchBar />
        </div>

        <ThemeToggle />
      </section>

      <section className="mb-8">
        <AddNoteForm />
      </section>

      <NotesList notes={notes} />
    </main>
  );
}

export default App;
