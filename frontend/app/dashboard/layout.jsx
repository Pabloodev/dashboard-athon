import Sidebar from "../ui/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="p-10">{children}</div>
    </div>
  );
}
