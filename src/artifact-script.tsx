export interface ArtifactScriptProps {
	defaultTheme?: 'light' | 'dark' | 'system';
	accent?: string;
	radius?: string;
	storageKey?: string;
}

/**
 * Prevents theme flash on page load for SSR/SSG apps (Next.js, etc).
 *
 * Add this to your root layout's `<head>` before React hydrates.
 * Also add `suppressHydrationWarning` to your `<html>` tag.
 *
 * @example
 * ```tsx
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en" suppressHydrationWarning>
 *       <head>
 *         <ArtifactScript />
 *       </head>
 *       <body>{children}</body>
 *     </html>
 *   );
 * }
 * ```
 */

export function ArtifactScript({
	defaultTheme = 'system',
	accent = 'obsidian',
	radius = 'medium',
	storageKey = 'artifact-theme',
}: ArtifactScriptProps) {
	const script = `
(function() {
  try {
    var theme = localStorage.getItem('${storageKey}');
    var savedAccent = localStorage.getItem('${storageKey}-accent');
    var savedRadius = localStorage.getItem('${storageKey}-radius');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var resolved = theme === 'dark' || (!theme && '${defaultTheme}' === 'dark')
      ? 'dark'
      : theme === 'light' || (!theme && '${defaultTheme}' === 'light')
        ? 'light'
        : systemDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', resolved);
    document.documentElement.setAttribute('data-accent', savedAccent || '${accent}');
    document.documentElement.setAttribute('data-radius', savedRadius || '${radius}');
  } catch (e) {}
})();
  `.trim();

	return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
