import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardSidebar from "../_components/DashboardSidebar";
import { cn } from "@/lib/utils";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12">
      <SidebarProvider className={cn("col-span-2")}>
        <SidebarTrigger className={cn("text-white")} />
        <DashboardSidebar />
      </SidebarProvider>
      <main className="max-wide-7xl container col-span-8 mx-auto">
        {children}
      </main>
    </div>
  );
}

export default Layout;
