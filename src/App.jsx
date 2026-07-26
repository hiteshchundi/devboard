import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import AddNoteForm from "./components/AddNoteForm/AddNoteForm";
import NotesList from "./components/NotesList/NotesList";
import useDarkMode from "./hooks/useDarkMode";
import "./index.css";

function App() {
  const [notes, setNotes] = useLocalStorage("notes", [
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
  ]);
  const [editingNote, setEditingNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { theme, toggleTheme } = useDarkMode();

  function addNote(newNote) {
    setNotes((prevNotes) => [
      {
        id: Date.now(),
        ...newNote,
      },
      ...prevNotes,
    ]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  function updateNote(updatedNote) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note,
      ),
    );

    setEditingNote(null);
  }

  const filteredNotes = notes.filter((note) => {
    const query = searchTerm.toLowerCase();

    return (
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query)
    );
  });

  return (
    <main className="mx-auto min-h-screen max-w-3xl bg-gray-50 px-6 py-10 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
      {" "}
      <Header />
      <section className="mb-6 flex gap-4">
        <div className="flex-1">
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        </div>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />{" "}
      </section>
      <section className="mb-8">
        <AddNoteForm
          onAddNote={addNote}
          editingNote={editingNote}
          onUpdateNote={updateNote}
        />
      </section>
      <NotesList
        notes={filteredNotes}
        onDeleteNote={deleteNote}
        onEditNote={setEditingNote}
      />
    </main>
  );
}

export default App;
