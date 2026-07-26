function NoteCard() {
  return (
    <article className="rounded-xl border p-4 shadow-sm">
      <h2 className="font-semibold">Learn React</h2>

      <p className="mt-2 text-gray-600">Build my first React project.</p>

      <div className="mt-4 flex gap-3">
        <button>Edit</button>
        <button className="text-red-500">Delete</button>
      </div>
    </article>
  );
}

export default NoteCard;
