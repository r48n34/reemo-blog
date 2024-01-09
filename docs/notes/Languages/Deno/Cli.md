---
sidebar_position: 2
tags:
  - Packages
  - CLI
  - Deno
---

# [CLI] Making CLI with Deno

## Basic build

This tutorial will bs using `yarn`. You may change to `npm` as you wish.
The `rollup` pack will be using this time.

### Structure
```md 
📂 .
├── deno.json
├── README.md
└─┬ 📂 src
  └── index.ts
```

### 1. Setup deno.json
```json title="deno.json"
{
    "compilerOptions": {
        "allowJs": true,
        "lib": ["deno.window"],
        "strict": true
    },
    "tasks": {
        "start": "deno run --allow-all --unstable src/index.ts",
        "dev":   "deno run --allow-all --unstable src/index.ts -n",
        "install": "deno install --allow-all --unstable -n dtree -f src/index.ts",
        "pwd": "cd $INIT_CWD && pwd"
    },
    "fmt": {
        "useTabs": true,
        "lineWidth": 80,
        "indentWidth": 4,
        "semiColons": true,
        "singleQuote": true,
        "proseWrap": "preserve",
        "include": ["src/"]
    }
}
```

### 2. Setup index.ts

```ts title="index.ts"
import { parseFlags } from 'https://deno.land/x/cliffy@v0.25.7/flags/mod.ts';

async function main() {

    const { flags } = parseFlags(Deno.args, {
		flags: [
			{
				name: 'maxDepth',
				aliases: ['m', 'maxDepth'],
				standalone: false,
				default: Infinity,
				type: 'integer',
			},
			{
				name: 'icon',
				aliases: ['icon'],
				standalone: false,
				default: "📂",
				type: 'string',
			},
		],
	});

    const icon: string = flags.icon
	const maxDepth: number = flags.maxDepth;

    console.log(`Hello ${icon} - ${maxDepth}`)
}


if (import.meta.main) {
	main();
}
```

# 3. Install

Either one is ok for register a bin command

```bash title="Using task"
deno task install
```

```bash title="Using deno command"
deno install --allow-all --unstable -n dtree -f src/index.ts

# -n: name
```
