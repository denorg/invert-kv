# 🙃 Invert KV

Simple utility to invert the key-value pairs in an object. This is a port of [sindresorhus/invert-kv](https://github.com/sindresorhus/invert-kv).

```ts
import { invert } from "https://raw.githubusercontent.com/denorg/invert-kv/master/mod.ts";

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
