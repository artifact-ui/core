# @artifact-ui/core

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

**Using CSS Layers?** Import the layers version for better cascade control:

```tsx
import '@artifact-ui/core/layers.css';
```

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

- `light` - Light mode
- `dark` - Dark mode
- `system` (default) - Follows system preference

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
function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

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

The library includes 27 components. See our [Storybook](https://artifact-ui.com/storybook) for the full list and interactive examples.

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

- 🎨 **Themeable** - 10 accent colors, 5 radius presets, light/dark mode
- ♿ **Accessible** - Built on Radix UI primitives with ARIA support
- 📦 **Tree-shakeable** - Import only what you need
- 🎯 **TypeScript** - Full type definitions included
- 🧩 **Composable** - Flexible component APIs with compound patterns
- 🎭 **CSS Layers** - Optional layers version for better style cascade control

## Documentation

For full component API documentation and interactive examples, see our [Storybook](https://artifact-ui.com/storybook).

## License

MIT
