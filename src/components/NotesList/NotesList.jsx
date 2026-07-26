import NoteCard from "../NoteCard/NoteCard";

function NotesList({ notes, onDeleteNote, onEditNote }) {
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
