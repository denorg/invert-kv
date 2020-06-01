# 🙃 Invert KV

Invert the key-value pairs in an object in Deno. This is a port of [sindresorhus/invert-kv](https://github.com/sindresorhus/invert-kv).

[![Deno CI](https://github.com/denorg/invert-kv/workflows/Deno%20CI/badge.svg)](https://github.com/denorg/invert-kv/actions)
[![GitHub](https://img.shields.io/github/license/denorg/invert-kv)](https://github.com/denorg/invert-kv/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/denorg/invert-kv)](https://github.com/denorg/invert-kv/graphs/contributors)
[![Deno Starter](https://img.shields.io/badge/deno-starter-brightgreen)](https://denorg.github.io/starter/)
[![Made by Denorg](https://img.shields.io/badge/made%20by-denorg-0082fb)](https://github.com/denorg)
[![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)](https://github.com/denorg/invert-kv)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

```ts
import { invert } from "https://deno.land/x/invert_kv/mod.ts";

const obj = { hello: "world" };

const result = invert(); // { world: "hello" }
```

## 👩‍💻 Development

Run tests:

```bash
deno test
```

## 📄 License

MIT © [Denorg](https://den.org.in)

<p align="center">
  <a href="https://den.org.in">
    <img width="100" alt="" src="https://raw.githubusercontent.com/denorg/denorg/master/logo.svg">
  </a>
</p>
<p align="center">
  <sub>A project by <a href="https://den.org.in">Denorg</a>, the world's first Deno-focused community<br>organization and consulting company. <a href="https://den.org.in">Work with us →</a></sub>
</p>
