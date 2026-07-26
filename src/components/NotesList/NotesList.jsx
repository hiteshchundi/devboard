import NoteCard from "../NoteCard/NoteCard";

function NotesList({ notes, onDeleteNote }) {
  return (
    <section className="space-y-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDeleteNote} />
      ))}
    </section>
  );
}

export default NotesList;
