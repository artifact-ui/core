export interface ArtifactScriptProps {
	defaultTheme?: 'light' | 'dark' | 'slate' | 'canvas' | 'system';
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
    const theme = localStorage.getItem('${storageKey}');
    const savedAccent = localStorage.getItem('${storageKey}-accent');
    const savedRadius = localStorage.getItem('${storageKey}-radius');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const validThemes = ['light', 'dark', 'slate', 'canvas'];
    let resolved;
    if (theme && validThemes.indexOf(theme) !== -1) {
      resolved = theme;
    } else if ('${defaultTheme}' !== 'system' && validThemes.indexOf('${defaultTheme}') !== -1) {
      resolved = '${defaultTheme}';
    } else {
      resolved = systemDark ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', resolved);
    document.documentElement.setAttribute('data-accent', savedAccent || '${accent}');
    document.documentElement.setAttribute('data-radius', savedRadius || '${radius}');
  } catch (e) {}
})();
  `.trim();

	return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
