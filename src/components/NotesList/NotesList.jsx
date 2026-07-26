import NoteCard from "../NoteCard/NoteCard";

function NotesList({ notes }) {
  return (
    <section className="space-y-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
}

export default NotesList;
