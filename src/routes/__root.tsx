import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { Car, Home } from "lucide-react";
import { configure } from "onedollarstats";
import { useEffect } from "react";

import { ProgressProvider } from "../store/progress-context";
import appCss from "../styles.css?url";

async function fetchGitHubStars(): Promise<number | null> {
  try {
    const res = await fetch("https://api.github.com/repos/851-labs/duodmv");
    const data = await res.json();
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

export const Route = createRootRoute({
  loader: async () => ({
    githubStars: await fetchGitHubStars(),
  }),
  notFoundComponent: NotFound,
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
        content: "Learn the California Driver's Handbook and ace your DMV permit test",
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
  useEffect(() => {
    configure();
  }, []);

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
      <body className="min-h-screen bg-surface-50">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-surface-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-100 mx-auto mb-6">
          <Car className="w-10 h-10 text-primary-500" />
        </div>
        <h1 className="text-4xl font-bold text-zinc-900 mb-2">404</h1>
        <p className="text-lg text-zinc-600 mb-8">
          Oops! Looks like you took a wrong turn.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white font-bold px-6 py-3 rounded-xl transition-all duration-100 shadow-[0_4px_0_0_var(--color-primary-600)] hover:bg-primary-400 hover:shadow-[0_4px_0_0_var(--color-primary-500)] active:translate-y-1 active:shadow-none"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
