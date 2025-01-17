import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

interface NoteProps {
  title: string;
  content: string;
  createdAt: Date;
  onClick?: () => void;
}

export function Note({ title, content, createdAt, onClick }: NoteProps) {
  return (
    <Card
      className="p-4 cursor-pointer hover:bg-note-hover transition-colors border-note-border"
      onClick={onClick}
    >
      <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2 mb-4">{content}</p>
      <p className="text-xs text-gray-400">
        {formatDistanceToNow(createdAt, { addSuffix: true })}
      </p>
    </Card>
  );
}