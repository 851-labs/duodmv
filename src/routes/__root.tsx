import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
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
