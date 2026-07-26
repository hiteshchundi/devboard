function NoteCard({ note, onDelete, onEdit }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800">
      <h2 className="font-semibold">{note.title}</h2>

      <p className="mt-2 text-gray-600 dark:text-gray-300">{note.content}</p>

      <div className="mt-4 flex gap-4">
        <button
          onClick={() => onEdit(note)}
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(note.id)}
          className="text-red-600 hover:underline dark:text-red-400"
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default NoteCard;
