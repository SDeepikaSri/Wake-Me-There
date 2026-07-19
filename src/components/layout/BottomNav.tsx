import { NavLink } from "react-router-dom";
import {
  Home,
  Bell,
  Star,
  Settings,
} from "lucide-react";

const links = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "Alarms",
    path: "/alarms",
    icon: Bell,
  },
  {
    name: "Favorites",
    path: "/favorites",
    icon: Star,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function BottomNav() {
  return (
    <nav className="
      fixed
      bottom-0
      left-0
      right-0
      border-t
      border-slate-800
      bg-slate-950
      px-4
      py-3
    ">
      <div className="
        flex
        justify-around
        items-center
      ">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `
                flex
                flex-col
                items-center
                gap-1
                text-xs
                ${
                  isActive
                    ? "text-emerald-400"
                    : "text-slate-400"
                }
                `
              }
            >
              <Icon size={22} />

              <span>
                {link.name}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;