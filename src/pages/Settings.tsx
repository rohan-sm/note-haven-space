import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Initialize dark mode state from localStorage or system preference
    const isDark = localStorage.getItem("darkMode") === "true" || 
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
    
    toast({
      title: checked ? "Dark Mode Enabled" : "Dark Mode Disabled",
      description: checked ? "The application is now in dark mode" : "The application is now in light mode",
    });
  };

  const toggleNotifications = (checked: boolean) => {
    toast({
      title: checked ? "Notifications Enabled" : "Notifications Disabled",
      description: "This feature will be implemented soon!",
    });
  };

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <h1 className="text-2xl font-bold text-foreground mb-6">Settings</h1>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications" className="text-base">Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications about your notes</p>
                </div>
                <Switch 
                  id="notifications" 
                  onCheckedChange={toggleNotifications}
                />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                <div className="space-y-0.5">
                  <Label htmlFor="darkMode" className="text-base">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable dark mode for the application</p>
                </div>
                <Switch 
                  id="darkMode"
                  checked={isDarkMode}
                  onCheckedChange={toggleDarkMode}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;