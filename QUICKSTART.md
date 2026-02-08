# Quick Start Guide

## Get Your Portfolio Running in 5 Minutes

### Step 1: Install Dependencies
```bash
cd portfolio-website
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

Open http://localhost:3000 to see your portfolio!

### Step 3: Customize Your Content

**Essential customizations:**

1. **Your Name & Info** - Edit these files:
   - `components/Hero.tsx` - Name, title, social links
   - `components/About.tsx` - Bio and experience
   - `components/Contact.tsx` - Email, phone, location
   - `app/layout.tsx` - Site title and description

2. **Your Projects** - Edit `components/Projects.tsx`:
   - Replace with your actual projects
   - Add real images from your projects
   - Update GitHub and live demo links

3. **Your Skills** - Edit `components/Skills.tsx`:
   - Add/remove skills based on what you know
   - Adjust proficiency percentages

4. **Social Links** - Update in:
   - `components/Hero.tsx`
   - `components/Footer.tsx`

### Step 4: Deploy to Vercel

**Option A: Via GitHub (Easiest)**
```bash
# Initialize git
git init
git add .
git commit -m "My portfolio"

# Create a new repo on github.com, then:
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

Then:
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Done! Your site is live at `your-portfolio.vercel.app`

**Option B: Via Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Step 5: Custom Domain (Optional)

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Vercel: Project → Settings → Domains → Add
3. Follow DNS configuration instructions
4. Wait 24 hours for DNS to propagate

## Important Files to Edit

| File | What to Change |
|------|----------------|
| `components/Hero.tsx` | Your name, title, intro, social links |
| `components/About.tsx` | Your biography and stats |
| `components/Skills.tsx` | Your technical skills |
| `components/Projects.tsx` | Your project portfolio |
| `components/Contact.tsx` | Contact information |
| `app/layout.tsx` | Site metadata and title |

## Theme Customization

Change the theme in `app/layout.tsx`:
```tsx
<html lang="en" data-theme="dark"> // Try: light, dark, cupcake, synthwave, etc.
```

Available themes: light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter

## Tips

✅ **Do:**
- Replace placeholder images with your own
- Update all social media links
- Test on mobile devices
- Add real project screenshots
- Write genuine project descriptions

❌ **Don't:**
- Leave placeholder text like "Your Name"
- Keep example projects
- Forget to update contact information
- Skip testing the build: `npm run build`

## Need Help?

- Read `README.md` for detailed information
- Read `DEPLOYMENT.md` for deployment help
- Check [Next.js docs](https://nextjs.org/docs)
- Check [DaisyUI docs](https://daisyui.com)

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Check code quality
```

---

🚀 **Your portfolio will be ready in minutes!**
