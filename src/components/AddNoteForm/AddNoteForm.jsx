import { useEffect, useState } from "react";

const INITIAL_FORM = {
  title: "",
  content: "",
};

function AddNoteForm({ onAddNote, editingNote, onUpdateNote }) {
  const [form, setForm] = useState(INITIAL_FORM);

  useEffect(() => {
    setForm(
      editingNote
        ? {
            title: editingNote.title,
            content: editingNote.content,
          }
        : INITIAL_FORM,
    );
  }, [editingNote]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const title = form.title.trim();
    const content = form.content.trim();

    if (!title || !content) return;

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

    setForm(INITIAL_FORM);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="title"
        autoComplete="off"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition focus:border-transparent focus:ring-2 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      <textarea
        name="content"
        rows="5"
        placeholder="Write your note..."
        value={form.content}
        onChange={handleChange}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none transition focus:border-transparent focus:ring-2 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />

      <button
        type="submit"
        disabled={!form.title.trim() || !form.content.trim()}
        className="rounded-lg bg-gray-900 px-5 py-2 text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
      >
        {editingNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}

export default AddNoteForm;
