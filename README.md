# saidyanak.dev

Personal portfolio website for Said Yanak — backend developer and freelancer.

[![Live](https://img.shields.io/badge/Live-saidyanak.dev-3b82f6?style=flat-square&logo=vercel&logoColor=white)](https://saidyanak.dev)

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

---

## Local Development

**Prerequisites:** Node.js 20+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## TODO: Fill in before deploying

Search the codebase for `TODO: Said` comments. Key ones:

- `components/Contact.tsx` — your email address (replace `todo@example.com`)
- `components/Contact.tsx` — your LinkedIn URL
- `components/Footer.tsx` — your LinkedIn URL
- `components/Projects.tsx` — İlta and Sutra project descriptions

---

## Docker Build & Deploy

### Build the image

```bash
docker build -t saidyanak-portfolio .
```

### Run locally

```bash
docker run -p 3000:3000 saidyanak-portfolio
```

### Run in production (detached)

```bash
docker run -d \
  --name portfolio \
  --restart unless-stopped \
  -p 3000:3000 \
  saidyanak-portfolio
```

### Update the container

```bash
docker build -t saidyanak-portfolio . \
  && docker stop portfolio \
  && docker rm portfolio \
  && docker run -d \
       --name portfolio \
       --restart unless-stopped \
       -p 3000:3000 \
       saidyanak-portfolio
```

---

## Nginx Configuration

The `nginx.conf` file in this repo is a reference snippet. To set it up on your VPS:

1. Copy the server blocks into `/etc/nginx/sites-available/saidyanak.dev`

2. Enable the site:

   ```bash
   ln -s /etc/nginx/sites-available/saidyanak.dev /etc/nginx/sites-enabled/
   ```

3. Get SSL certificates (if not already):

   ```bash
   certbot --nginx -d saidyanak.dev -d www.saidyanak.dev
   ```

4. Test and reload Nginx:

   ```bash
   nginx -t && systemctl reload nginx
   ```

The Next.js container runs on port `3000` internally. Nginx proxies public traffic (80/443) to it.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, standalone output)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Theming:** next-themes (dark default)
- **Deployment:** Docker + Nginx on personal VPS
