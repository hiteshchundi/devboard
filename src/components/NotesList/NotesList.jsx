import NoteCard from "../NoteCard/NoteCard";

function NotesList({ notes, onDeleteNote, onEditNote }) {
  if (notes.length === 0) {
    return (
      <section className="rounded-xl border border-dashed border-gray-300 p-10 text-center dark:border-gray-700">
        <h2 className="text-lg font-semibold">No notes found</h2>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Create your first note or change your search.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDeleteNote}
          onEdit={onEditNote}
        />
      ))}
    </section>
  );
}

export default NotesList;
