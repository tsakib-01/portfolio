# Deployment Guide for Vercel

## Quick Deployment Steps

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your portfolio repository
   - Vercel will auto-detect Next.js settings:
     - Framework Preset: Next.js
     - Build Command: `next build`
     - Output Directory: `.next`
     - Install Command: `npm install`
   - Click "Deploy"
   - Wait 2-3 minutes for deployment

3. **Your site is live!**
   - Vercel provides a URL: `https://your-portfolio.vercel.app`
   - Every push to main branch auto-deploys

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd portfolio-website
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? Yes
   - Which scope? (Select your account)
   - Link to existing project? No
   - What's your project name? portfolio-website
   - In which directory is your code located? ./
   - Want to override settings? No

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## Custom Domain Setup

1. **Buy a domain** from providers like:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Vercel Domains

2. **Add domain to Vercel:**
   - Go to your project on Vercel
   - Settings > Domains
   - Click "Add"
   - Enter your domain (e.g., johndoe.com)
   - Click "Add"

3. **Configure DNS:**
   - Go to your domain provider
   - Add DNS records as shown by Vercel:
     - Type: A, Name: @, Value: 76.76.21.21
     - Type: CNAME, Name: www, Value: cname.vercel-dns.com

4. **Wait for propagation** (can take up to 48 hours, usually much faster)

## Environment Variables

If you need environment variables:

1. **Create `.env.local` locally** (already in .gitignore):
   ```env
   NEXT_PUBLIC_API_URL=https://api.example.com
   ```

2. **Add to Vercel:**
   - Project Settings > Environment Variables
   - Add each variable
   - Available for: Production, Preview, Development
   - Click "Save"
   - Redeploy for changes to take effect

## Build & Deployment Settings

Default settings work great, but you can customize:

- **Build Command:** `next build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Development Command:** `next dev`
- **Node Version:** 18.x (automatic)

## Continuous Deployment

Vercel automatically:
- ✅ Deploys on every git push to main
- ✅ Creates preview deployments for pull requests
- ✅ Runs builds and checks
- ✅ Provides deployment URLs
- ✅ Rollback to previous deployments if needed

## Performance & Optimization

Vercel provides:
- Global CDN
- Automatic SSL certificates
- Edge network
- Image optimization
- Analytics (free tier)
- Web Vitals monitoring

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Test build locally: `npm run build`

### Environment Variables Not Working
- Prefix client-side variables with `NEXT_PUBLIC_`
- Redeploy after adding variables
- Check spelling and values

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records match Vercel's requirements
- Use https://dnschecker.org to check propagation
- Try accessing with www and without

### 404 Errors
- Ensure routes match Next.js file structure
- Check that all files are committed to git
- Clear Vercel cache and redeploy

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

## Cost

Vercel's Hobby (Free) plan includes:
- Unlimited websites
- 100 GB bandwidth/month
- Automatic SSL
- Preview deployments
- Analytics (basic)

Perfect for personal portfolios!

---

Your portfolio will be live at: `https://your-project-name.vercel.app`
