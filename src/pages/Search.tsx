import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { NoteGrid } from "@/components/NoteGrid";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample data - replace with actual search functionality
  const sampleNotes = [
    {
      id: "1",
      title: "Welcome to Notes",
      content: "This is your first note. Click to edit and start taking notes!",
      createdAt: new Date(),
    },
  ];

  const filteredNotes = sampleNotes.filter(
    note =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <h1 className="text-2xl font-bold text-foreground mb-6">Search Notes</h1>
            <div className="mb-6">
              <Input
                type="search"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-md"
              />
            </div>
            <NoteGrid notes={filteredNotes} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Search;