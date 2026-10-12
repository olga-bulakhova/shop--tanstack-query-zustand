import { Sidebar } from "@/shared/ui/sidebar";
import { Header } from "./header";

type LayoutProps = {
  children: React.ReactNode;
  sidebarContent?: React.ReactNode;
};

export const Layout = ({ children, sidebarContent }: LayoutProps) => {
  return (
    <div className="mx-auto block max-w-[1440px] px-4 lg:grid lg:grid-cols-[1fr_300px] lg:gap-8 lg:px-10">
      <div>
        <Header />
        {children}
      </div>
      <div>
        <Sidebar>{sidebarContent}</Sidebar>
      </div>
    </div>
  );
};
