# Vite Plugin for Nette

A Vite plugin that integrates [Vite](https://vite.dev) with [Nette](https://nette.org) & [Latte](https://latte.nette.org) for seamless asset management and development workflow.

For detailed setup instructions and configuration options, see the [official Nette documentation](https://doc.nette.org/en/assets/vite).

## Installation

```bash
npm install -D @nette/vite-plugin
```

## Usage

Add the plugin to your `vite.config.js`:

```js
import { defineConfig } from 'vite'
import nette from '@nette/vite-plugin'

export default defineConfig({
	plugins: [nette()]
})
```
