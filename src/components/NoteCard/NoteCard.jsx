function NoteCard({ note, onDelete, onEdit }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800">
      <h2 className="font-semibold">{note.title}</h2>

      <p className="mt-2 text-gray-600 dark:text-gray-300">{note.content}</p>

      <div className="mt-6 flex justify-end gap-2">
        <button
          onClick={() => onEdit(note)}
          className="rounded-md px-3 py-1 text-sm font-medium text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(note.id)}
          className="rounded-md px-3 py-1 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default NoteCard;
