# Portfolio Website

A modern portfolio website built with Vue.js 3, Vite, Tailwind CSS, and Supabase.

## Features

- 🎨 Modern UI with Tailwind CSS
- 🔐 Authentication with Supabase
- 📱 Fully responsive design
- 🚀 Fast development with Vite
- 🌙 Beautiful gradient backgrounds
- 📧 Contact form
- 👑 Admin user management

## Tech Stack

- **Frontend**: Vue.js 3 + Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Database + Auth)
- **Routing**: Vue Router

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Update .env with your Supabase credentials
# VITE_SUPABASE_URL=your_supabase_url
# VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Run development server
npm run dev
```

## Project Structure

```
porto/
├── src/
│   ├── components/      # Reusable components
│   ├── views/           # Page components
│   │   ├── Home.vue     # Landing page
│   │   ├── Login.vue    # Authentication
│   │   └── AdminSetup.vue # Admin creation
│   ├── router/          # Vue Router config
│   ├── lib/             # Supabase client
│   ├── App.vue          # Root component
│   └── main.js          # Entry point
├── public/              # Static assets
└── dist/                # Build output
```

## Default Admin

- **Email**: admin@myportfolio.dev
- **Password**: Admin@123

Create admin via:
1. Visit `/admin-setup` page
2. Or run SQL in Supabase SQL Editor

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL | `https://xxx.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | `sb_publishable_xxx` |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## License

MIT
