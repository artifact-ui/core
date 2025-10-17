# @artifact-ui/core

A React component library built on Radix UI primitives with customizable theming.

## Installation

```bash
npm install @artifact-ui/core
```

## Quick Start

```tsx
import { ArtifactProvider, Button, Card, Heading, Text } from '@artifact-ui/core';
import '@artifact-ui/core/styles.css';

function App() {
	return (
		<ArtifactProvider accent="obsidian" radius="medium">
			<Card.Root>
				<Card.Header>
					<Heading>Welcome</Heading>
				</Card.Header>
				<Card.Body>
					<Text>Get started with Artifact UI components.</Text>
					<Button color="primary">Click me</Button>
				</Card.Body>
			</Card.Root>
		</ArtifactProvider>
	);
}
```

## Theming

Artifact UI supports light/dark themes, 10 accent colors, and 5 radius presets.

By default, the theme matches system preference (light/dark mode). You can override this by passing the `theme` prop:

```tsx
<ArtifactProvider theme="dark" accent="twilight" radius="large">
	{children}
</ArtifactProvider>
```

## Components

- **Layout**: Box, Flex, Grid, Stack, Separator
- **Typography**: Text, Heading
- **Form**: Button, TextField, Textarea, Checkbox, Switch, Select
- **Feedback**: Alert, Badge
- **Overlay**: Modal, DropdownMenu, Tooltip, Popover, Tabs
- **Data**: Card, Table

## Features

- 🎨 Customizable theming system (10 accent colors)
- ♿ Built on Radix UI for accessibility
- 📦 Tree-shakeable - only bundle what you use
- 🎯 TypeScript support with full type definitions
- 🌗 Light and dark theme support

## Documentation

For full component documentation and examples, visit [Storybook](https://github.com/artifact-ui/core).

## License

MIT
