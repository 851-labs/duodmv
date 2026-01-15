import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { configure } from "onedollarstats";
import { useEffect } from "react";

import { ProgressProvider } from "../store/progress-context";
import appCss from "../styles.css?url";

async function fetchGitHubStars(): Promise<number | null> {
  try {
    // Use Shields.io which handles GitHub API rate limits and caching
    const res = await fetch("https://img.shields.io/github/stars/851-labs/duodmv.json");

    if (!res.ok) {
      console.error("[GitHub Stars] Shields.io fetch failed:", res.status);
      return null;
    }

    const data = await res.json();
    const stars = parseInt(data.message, 10);

    if (isNaN(stars)) {
      console.error("[GitHub Stars] Could not parse stars:", data.message);
      return null;
    }

    return stars;
  } catch (error) {
    console.error("[GitHub Stars] Fetch error:", error);
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
        {/* WRONG WAY road sign - tilted like it's been bumped */}
        <div className="inline-block mb-6 -rotate-6 hover:rotate-0 transition-transform duration-300 cursor-default">
          <div className="bg-red-500 border-[6px] border-white rounded-xl px-10 py-5 shadow-[0_8px_0_0_#b91c1c] ring-2 ring-red-300">
            <p className="text-white font-black text-4xl tracking-wider drop-shadow-sm">WRONG WAY</p>
          </div>
          <div className="w-5 h-20 bg-gradient-to-b from-zinc-400 to-zinc-500 mx-auto rounded-b shadow-md" />
        </div>
        <p className="text-xl font-semibold text-zinc-700 mb-2">
          Oops! Wrong turn.
        </p>
        <p className="text-zinc-500 mb-8">
          This page doesn't exist. Let's get you back on track.
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
