# Coding Guidelines

- Use bun over npm, pnpm, yarn, etc
- Use conventional commits
- Always write exports at the bottom of the file
- Never use default exports; use named exports only
- Use kebab-case for file names
- Avoid barrel export files (index.ts that only re-exports); import directly from source files
