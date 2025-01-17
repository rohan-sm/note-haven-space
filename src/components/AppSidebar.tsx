import { Plus, FileText, Search, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useToast } from "@/components/ui/use-toast";

const menuItems = [
  {
    title: "All Notes",
    icon: FileText,
    url: "/",
  },
  {
    title: "Search",
    icon: Search,
    url: "/search",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/settings",
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { toast } = useToast();

  const handleNewNote = () => {
    toast({
      title: "Create New Note",
      description: "This feature will be implemented soon!",
    });
  };

  return (
    <>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <div className="flex items-center justify-between px-4 py-2">
              <SidebarGroupLabel>Notes</SidebarGroupLabel>
              <button 
                onClick={handleNewNote}
                className="p-1 rounded-md hover:bg-sidebar-accent transition-colors"
              >
                <Plus className="w-5 h-5 text-sidebar-foreground" />
              </button>
            </div>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      data-active={location.pathname === item.url}
                    >
                      <Link 
                        to={item.url} 
                        className="flex items-center gap-2 w-full"
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <SidebarTrigger />
      </div>
    </>
  );
}