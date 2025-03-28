
import Navbar from "@/components/Navbar";


import "../globals.css";

const navItems = [
  {
    path: "/dashboard",
    label: "Dashboard",
    // icon: <HomeIcon fill="black" width={15} height={15} />,
  },
  {
    path: "/dashboard/history",
    label: "History",
    // icon: <SalesIcon fill="black" width={15} height={15} />,
  },
  {
    path: "/dashboard/profile",
    label: "Profile",
    // icon: <ProfileIcon fill="black" width={15} height={15} />,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <Navbar navItems={navItems} />
        {children}
      </main>
    </>
  );
}
