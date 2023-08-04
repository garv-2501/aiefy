import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full relative">
      <div className=" h-full hidden md:flex md:w-52 lg:w-80 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-800">
        <Sidebar />
      </div>
      <main className=" md:pl-52 lg:pl-80">
        <Navbar />
        This is the main content {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
