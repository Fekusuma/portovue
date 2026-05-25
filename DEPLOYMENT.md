# Deployment Guide - Vercel

## Prerequisites

1. Supabase project already set up
2. Vercel account (https://vercel.com)
3. GitHub repository with your code

## Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio website"

# Create GitHub repository and push
# Or use existing repo:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy on Vercel

### Option A: Via Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add Environment Variables:
   ```
   VITE_SUPABASE_URL=https://bowspzubaenptrjewewm.supabase.co
   VITE_SUPABASE_ANON_KEY=sb_publishable_40kUWmaKG1bPdqYPdZ89pA_9oVATVLv
   ```
5. Click **Deploy**

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Add environment variables when prompted
```

## Step 3: Configure Supabase Redirect URLs

After deployment, add your Vercel URL to Supabase:

1. Go to Supabase Dashboard → Authentication → URL Configuration
2. Add your production URL:
   ```
   https://your-project.vercel.app/**
   ```
3. Also add your custom domain if you have one

## Step 4: Update Environment Variables (Optional)

If you need to update environment variables after deployment:

**Via Vercel Dashboard:**
1. Go to Project → Settings → Environment Variables
2. Update the variables
3. Redeploy

**Via CLI:**
```bash
vercel env add VITE_SUPABASE_URL production
vercel env add VITE_SUPABASE_ANON_KEY production
```

## Production Checklist

- [ ] Supabase redirect URLs configured
- [ ] Environment variables set in Vercel
- [ ] Email confirmation disabled (for testing) or enabled (for production)
- [ ] Google OAuth configured (if using)
- [ ] Custom domain configured (optional)

## Custom Domain (Optional)

1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your domain
3. Configure DNS records as instructed
4. Update Supabase redirect URLs with custom domain

## Troubleshooting

### Build fails
- Check that all dependencies are in package.json
- Verify build command works locally: `npm run build`

### Auth not working
- Verify VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are correct
- Check Supabase redirect URLs include your domain
- Check browser console for errors

### White screen after deployment
- Check Vercel deployment logs
- Verify base path in vite.config.js if using subdirectory
- Check browser console for 404 errors

## Useful Commands

```bash
# Preview production build locally
npm run build
npm run preview

# Check deployment status
vercel ls

# View deployment logs
vercel logs

# Rollback to previous deployment
vercel rollback
```
