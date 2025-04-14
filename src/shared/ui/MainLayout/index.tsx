import { Link, Outlet, useLocation } from "react-router-dom";
import { Header } from "../Header";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

const NavIcon = ({ iconPath }: { iconPath: string }) => (
  <svg
    className="w-5 h-5 mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={iconPath}
    />
  </svg>
);

const NavItem = ({
  to,
  iconPath,
  label,
  isActive,
}: {
  to: string;
  iconPath: string;
  label: string;
  isActive: boolean;
}) => (
  <Link
    to={to}
    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
      isActive
        ? "bg-blue-100 text-blue-600 font-medium"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    }`}
  >
    <NavIcon iconPath={iconPath} />
    {label}
  </Link>
);

const Sidebar = () => {
  const { pathname } = useLocation();

  const navItems = [
    {
      to: "/posts",
      iconPath:
        "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      label: "Посты",
    },
    {
      to: "/users",
      iconPath:
        "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      label: "Пользователи",
    },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm hidden md:block">
      <div className="p-4">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              iconPath={item.iconPath}
              label={item.label}
              isActive={pathname.startsWith(item.to)}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
};

const MainContent = () => (
  <main className="flex-1 p-6 bg-gray-50">
    <Outlet />
  </main>
);
