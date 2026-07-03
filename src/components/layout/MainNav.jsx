import { LayoutDashboard, ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { useAppStore } from "../../store/AppStore";

const items = [
  { to: "/", label: "Beranda" },
  { to: "/catalog", label: "Katalog" },
  { to: "/tracking", label: "Lacak Pesanan" },
];

export function MainNav() {
  const { cartCount } = useAppStore();

  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm font-medium">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            cn(
              "rounded-full px-4 py-2 transition",
              isActive ? "bg-stone-100 text-slate-900" : "text-slate-600 hover:bg-stone-100 hover:text-slate-900",
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
      <Link to="/cart">
        <Button asChild variant="secondary" className="rounded-full px-4 py-2">
          <span>
            <ShoppingCart className="h-4 w-4" />
            Cart {cartCount ? `(${cartCount})` : ""}
          </span>
        </Button>
      </Link>
      <Link to="/login">
        <Button asChild variant="secondary" className="rounded-full px-4 py-2">
          <span>
            <LayoutDashboard className="h-4 w-4" />
            Panel Internal
          </span>
        </Button>
      </Link>
    </nav>
  );
}
