import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRoute,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ProgressProvider } from "../store/progress-context";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "DuoDMV - Learn to Drive",
			},
			{
				name: "description",
				content:
					"Learn the California Driver's Handbook and ace your DMV permit test",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<ProgressProvider>
				<Outlet />
			</ProgressProvider>
		</RootDocument>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="min-h-screen bg-surface-50">{children}
				<Scripts />
			</body>
		</html>
	);
}
