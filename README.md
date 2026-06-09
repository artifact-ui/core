# @artifact-ui/core

[![npm version](https://img.shields.io/npm/v/@artifact-ui/core)](https://www.npmjs.com/package/@artifact-ui/core)
[![npm downloads](https://img.shields.io/npm/dt/@artifact-ui/core)](https://www.npmjs.com/package/@artifact-ui/core)
![license](https://img.shields.io/npm/l/@artifact-ui/core)
[![GitHub stars](https://img.shields.io/github/stars/artifact-ui/core?style=social)](https://github.com/artifact-ui/core)

A React component library built on Radix UI primitives with theming support.

## Installation

```bash
npm install @artifact-ui/core
```

## Getting Started

### 1. Import Styles

Import the global stylesheet in your app entry point:

```tsx
import '@artifact-ui/core/styles.css';
```

**Using Tailwind or utility classes?** Import the layers build instead. It wraps the component styles in an `@layer`, so your own classes (like `bg-green-50` on a `Table.Row`) reliably win over the defaults:

```tsx
import '@artifact-ui/core/layers.css';
```

Only import one of the two stylesheets, not both.

### 2. Wrap Your App

Wrap your application with `ArtifactProvider` to enable theming:

```tsx
import { ArtifactProvider } from '@artifact-ui/core';

function App() {
  return (
    <ArtifactProvider theme="light" accent="obsidian" radius="medium">
      {/* Your app */}
    </ArtifactProvider>
  );
}
```

### 3. Use Components

```tsx
import { Button, Card, Heading, Text } from '@artifact-ui/core';

function Example() {
  return (
    <Card.Root>
      <Card.Header>
        <Heading>Welcome to Artifact UI</Heading>
      </Card.Header>
      <Card.Body>
        <Text color="secondary">
          A modern component library built with accessibility in mind.
        </Text>
        <Button color="primary">Get Started</Button>
      </Card.Body>
    </Card.Root>
  );
}
```

## Theming

Customize your app's appearance with theme, accent, and radius options.

### Theme Options

**Color Mode** (`theme`)

- `light` - Light mode (default)
- `dark` - Dark mode
- `slate` - Cool dark blue-gray
- `canvas` - Warm beige light
- `system` - Follows system preference (resolves to light/dark)

**Accent Colors** (`accent`)

- `obsidian` (default), `sage`, `twilight`, `canopy`, `blush`, `clay`, `amber`, `crimson`, `patina`, `meridian`

**Border Radius** (`radius`)

- `none`, `small`, `medium` (default), `large`, `full`

### Example

```tsx
<ArtifactProvider theme="dark" accent="twilight" radius="large">
  {children}
</ArtifactProvider>
```

### Dynamic Theme Switching

You can change themes dynamically by updating the provider props:

```tsx
import { useState } from 'react';
import type { Theme } from '@artifact-ui/core';

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ArtifactProvider theme={theme} accent="obsidian" radius="medium">
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </Button>
    </ArtifactProvider>
  );
}
```

## Components

The library includes 31 components. See our [Storybook](https://artifact-ui.com/storybook) for the full list and interactive examples.

## Component Usage

### Forms

```tsx
import { TextField, Button } from '@artifact-ui/core';

function LoginForm() {
  return (
    <form>
      <TextField placeholder="Email" type="email" />
      <TextField placeholder="Password" type="password" />
      <Button color="primary" type="submit">
        Sign In
      </Button>
    </form>
  );
}
```

### Alerts

```tsx
import { Alert } from '@artifact-ui/core';

function Notifications() {
  return (
    <>
      <Alert variant="soft" color="info">
        Your profile has been updated.
      </Alert>
      <Alert variant="outline" color="danger">
        Failed to save changes.
      </Alert>
    </>
  );
}
```

### Modals

```tsx
import { Modal, Button } from '@artifact-ui/core';

function DeleteConfirmation() {
  return (
    <Modal.Root>
      <Modal.Trigger asChild>
        <Button color="danger">Delete Account</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This action cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button variant="ghost">Cancel</Button>
          </Modal.Close>
          <Button color="danger">Delete</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
}
```

## Features

- 🎨 **Themeable** - 4 color modes, 10 accent colors, 5 radius presets
- ♿ **Accessible** - Built on Radix UI primitives with ARIA support
- 📦 **Tree-shakeable** - Import only what you need
- 🎯 **TypeScript** - Full type definitions included
- 🧩 **Composable** - Flexible component APIs with compound patterns
- 🎭 **CSS Layers** - Optional layers version for better style cascade control

## Documentation

For full component API documentation and interactive examples, see our [Storybook](https://artifact-ui.com/storybook).

## License

MIT
