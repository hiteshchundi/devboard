function AddNoteForm() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        className="w-full rounded-lg border px-4 py-2"
      />

      <textarea
        rows="5"
        placeholder="Write your note..."
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
