import { useState } from "react";

function AddNoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    onAddNote({
      title,
      content,
    });

    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-lg border px-4 py-2"
      />

      <textarea
        rows="5"
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full rounded-lg border px-4 py-2"
      />

      <button
        type="submit"
        className="rounded-lg bg-black px-5 py-2 text-white"
      >
        Add Note
      </button>
    </form>
  );
}

export default AddNoteForm;
