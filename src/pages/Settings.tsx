import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <h1 className="text-2xl font-bold text-foreground mb-6">Settings</h1>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Label htmlFor="notifications">Enable Notifications</Label>
                <Switch id="notifications" />
              </div>
              <div className="flex items-center space-x-4">
                <Label htmlFor="darkMode">Dark Mode</Label>
                <Switch id="darkMode" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;