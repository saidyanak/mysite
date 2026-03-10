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
# Build (cross-platform for AMD64 server)
docker build --platform linux/amd64 -t saidyanak-portfolio .

# Run
docker run -d \
  --name portfolio \
  --restart unless-stopped \
  --network wordpress_default \
  -p 8080:8080 \
  saidyanak-portfolio

# Update
docker build --platform linux/amd64 -t saidyanak-portfolio . \
  && docker rm -f portfolio \
  && docker run -d \
       --name portfolio \
       --restart unless-stopped \
       --network wordpress_default \
       -p 8080:8080 \
       saidyanak-portfolio
```

---

## Nginx Proxy Manager

Proxied via NPM running on the same server:

| Field | Value |
| --- | --- |
| Domain | `saidyanak.dev`, `www.saidyanak.dev` |
| Forward Host | `portfolio` (container name) |
| Forward Port | `8080` |
| Websocket Support | ✓ |
| SSL | Let's Encrypt, Force SSL |

---

## License

MIT
