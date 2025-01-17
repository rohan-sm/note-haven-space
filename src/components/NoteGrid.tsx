import { Note } from "./Note";

interface NoteData {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

interface NoteGridProps {
  notes: NoteData[];
  onNoteClick?: (note: NoteData) => void;
}

export function NoteGrid({ notes, onNoteClick }: NoteGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          content={note.content}
          createdAt={note.createdAt}
          onClick={() => onNoteClick?.(note)}
        />
      ))}
    </div>
  );
}