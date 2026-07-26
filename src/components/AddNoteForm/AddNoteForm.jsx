import { useState, useEffect } from "react";

function AddNoteForm({ onAddNote, editingNote, onUpdateNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    if (editingNote) {
      onUpdateNote({
        ...editingNote,
        title,
        content,
      });
    } else {
      onAddNote({
        title,
        content,
      });
    }

    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition focus:border-transparent focus:ring-2 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      <textarea
        rows="5"
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition focus:border-transparent focus:ring-2 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      <button
        disabled={!title.trim() || !content.trim()}
        type="submit"
        className="rounded-lg bg-gray-900 px-5 py-2 text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-gray-900"
      >
        {editingNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}

export default AddNoteForm;
