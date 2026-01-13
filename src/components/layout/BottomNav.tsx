import { Link, useLocation } from "@tanstack/react-router";
import { BookOpen, Target, User } from "lucide-react";
import clsx from "clsx";

const navItems = [
	{ href: "/learn", icon: BookOpen, label: "Learn" },
	{ href: "/practice", icon: Target, label: "Practice" },
	{ href: "/profile", icon: User, label: "Profile" },
];

export function BottomNav() {
	const location = useLocation();

	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-surface-200 pb-safe z-50 lg:hidden">
			<div className="flex items-center justify-around py-2">
				{navItems.map((item) => {
					const isActive =
						location.pathname === item.href ||
						(item.href !== "/" && location.pathname.startsWith(item.href));

					return (
						<Link
							key={item.href}
							to={item.href}
							className={clsx(
								"flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors",
								isActive
									? "text-primary-600"
									: "text-zinc-400 hover:text-zinc-600"
							)}
						>
							<item.icon className="w-6 h-6" />
							<span className="text-xs font-medium">{item.label}</span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
