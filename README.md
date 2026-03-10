# saidyanak.dev

Personal portfolio of [Said Yanak](https://saidyanak.dev) — backend developer & freelancer.

→ **[saidyanak.dev](https://saidyanak.dev)**

---

## Stack

| | |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Deployment | Docker + Nginx Proxy Manager on personal VPS |

---

## Local Development

```bash
npm install
npm run dev
```

→ [http://localhost:3000](http://localhost:3000)

---

## Docker

```bash
docker build -t saidyanak-portfolio .
docker run -d --name portfolio -p 3000:3000 saidyanak-portfolio
```

---

## License

MIT
