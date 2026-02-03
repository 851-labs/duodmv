<ncu>
# npm-check-updates (ncu) Skill

This skill helps check for and update package dependencies using npm-check-updates.

## Instructions

When invoked, perform the following steps:

1. **Check for outdated dependencies** by running:
   ```bash
   bunx npm-check-updates
   ```

2. **Review the output** and present the user with:
   - A summary of packages that have updates available
   - The current version vs the latest version for each package
   - Whether updates are major, minor, or patch versions

3. **Ask the user** if they want to:
   - Update all dependencies
   - Update only specific dependencies
   - Update only minor/patch versions (safer option)
   - Cancel and make no changes

4. **If the user chooses to update**, run the appropriate command:
   - Update all: `bunx npm-check-updates -u && bun install`
   - Update specific packages: `bunx npm-check-updates -u <package-names> && bun install`
   - Update minor/patch only: `bunx npm-check-updates -u --target minor && bun install`

5. **After updating**, verify the installation succeeded and optionally run:
   - Type checking: `bun run lint`
   - Build: `bun run build`

## Important Notes

- Always use `bun` as the package manager (per project guidelines)
- Use `bunx` to run npm-check-updates without installing it globally
- Be cautious with major version updates as they may contain breaking changes
- Consider updating dependencies incrementally rather than all at once
</ncu>
