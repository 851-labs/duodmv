import { getRouteApi } from "@tanstack/react-router";
import { Github, Star } from "lucide-react";

const rootRoute = getRouteApi("__root__");

export function GitHubStars() {
  const { githubStars } = rootRoute.useLoaderData();

  return (
    <a
      href="https://github.com/851-labs/duodmv"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-zinc-400 hover:text-zinc-600 transition-colors"
    >
      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
      {githubStars !== null && <span className="font-bold tabular-nums text-amber-400">{githubStars}</span>}
      <Github className="w-5 h-5 ml-4!" />
    </a>
  );
}
