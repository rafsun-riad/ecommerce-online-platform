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
import { cn } from "@/lib/utils";
import Link from "next/link";

const sidebarMenuItems = [
  {
    id: 1,
    name: "Home",
    href: "/dashboard",
  },
  {
    id: 2,
    name: "Category",
    href: "/dashboard/category",
  },
  {
    id: 3,
    name: "Warehouse",
    href: "/dashboard/warehouse",
  },
  {
    id: 4,
    name: "Product",
    href: "/dashboard/products",
  },

  {
    id: 5,
    name: "Create Product",
    href: "/dashboard/products/add",
  },
];

function DashboardSidebar() {
  return (
    <Sidebar className={cn("bg-gray-800")}>
      <SidebarContent className={cn("bg-gray-800 text-white")}>
        <SidebarGroup>
          <SidebarGroupLabel className={cn("flex justify-end text-white")}>
            <SidebarTrigger />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarMenuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>{item.name}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default DashboardSidebar;
