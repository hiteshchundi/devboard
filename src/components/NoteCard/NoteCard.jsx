function NoteCard({ note }) {
  return (
    <article className="rounded-xl border p-4 shadow-sm">
      <h2 className="font-semibold">{note.title}</h2>

      <p className="mt-2 text-gray-600">{note.content}</p>

      <div className="mt-4 flex gap-3">
        <button>Edit</button>

        <button className="text-red-500">Delete</button>
      </div>
    </article>
  );
}

export default NoteCard;
