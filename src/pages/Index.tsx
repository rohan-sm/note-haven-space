import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { NoteGrid } from "@/components/NoteGrid";

// Sample data - will be replaced with real data later
const sampleNotes = [
  {
    id: "1",
    title: "Welcome to Notes",
    content: "This is your first note. Click to edit and start taking notes!",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Meeting Notes",
    content: "Discuss project timeline and deliverables with the team.",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: "3",
    title: "Ideas",
    content: "1. Build a better note-taking app\n2. Learn a new language\n3. Exercise more",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
];

const Index = () => {
  const handleNoteClick = (note: any) => {
    console.log("Note clicked:", note);
  };

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <h1 className="text-2xl font-bold text-foreground mb-6">My Notes</h1>
            <NoteGrid notes={sampleNotes} onNoteClick={handleNoteClick} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;