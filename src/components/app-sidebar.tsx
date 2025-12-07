import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { LayoutGrid, Settings, Ticket, Users, Users2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const data = {
  navMain: [
    {
      title: "Dashboard",
      isActive: true,
      icon: LayoutGrid,
      url: "/",
    },
    {
      title: "Usuários",
      icon: Users,
      url: "/",
    },
    {
      title: "Tickets",
      icon: Ticket,
      url: "/",
    },
    {
      title: "Oficiais",
      icon: Users2,
      url: "/",
    },
    {
      title: "Configurações",
      icon: Settings,
      url: "/",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h1 className="uppercase text-center text-2xl font-semibold text-[#2E2C34] mt-7 mb-4">
          Ticket Lead
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="lg" isActive={item.isActive}>
                    <NavLink to={item.url}>
                      <item.icon className="size-5!" /> {item.title}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
