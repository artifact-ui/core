# @artifact-ui/core

A React component library built on Radix UI primitives with customizable theming.

## Installation

```bash
npm install @artifact-ui/core
```

## Quick Start

```tsx
import { ArtifactProvider, Button, Card } from '@artifact-ui/core';
import '@artifact-ui/core/styles.css';

function App() {
  return (
    <ArtifactProvider theme="light" accent="obsidian" radius="medium">
      <Card.Root>
        <Card.Header>
          <h2>Welcome</h2>
        </Card.Header>
        <Card.Body>
          <p>Get started with Artifact UI components.</p>
          <Button color="primary">Click me</Button>
        </Card.Body>
      </Card.Root>
    </ArtifactProvider>
  );
}
```

## Theming

Artifact UI supports light/dark themes, 10 accent colors, and 5 radius presets:

```tsx
<ArtifactProvider
  theme="dark" // 'light' | 'dark'
  accent="twilight" // 'obsidian' | 'sage' | 'twilight' | 'canopy' | 'blush' | 'clay' | 'amber' | 'crimson' | 'patina' | 'meridian'
  radius="large" // 'none' | 'small' | 'medium' | 'large' | 'full'
>
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
