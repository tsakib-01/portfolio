# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and DaisyUI.

## Features

- 🎨 Beautiful UI with DaisyUI components
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- ⚡ Fast page loads with Next.js
- 🎯 Smooth scrolling navigation
- 💼 Project showcase section
- 📧 Contact form
- 🔧 Built with TypeScript for type safety

## Tech Stack

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Styling:** Tailwind CSS + DaisyUI
- **Language:** TypeScript
- **Icons:** React Icons
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or download the files

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Edit the following files to customize with your information:

1. **Hero Section** (`components/Hero.tsx`):
   - Change your name
   - Update job title
   - Add your social media links
   - Replace profile image

2. **About Section** (`components/About.tsx`):
   - Update your bio
   - Change experience stats
   - Modify description

3. **Skills Section** (`components/Skills.tsx`):
   - Add/remove skills
   - Adjust skill levels
   - Update icons

4. **Projects Section** (`components/Projects.tsx`):
   - Add your own projects
   - Update project images
   - Add GitHub and live demo links
   - Modify tech stack badges

5. **Contact Section** (`components/Contact.tsx`):
   - Update email address
   - Change phone number
   - Update location
   - Configure form submission (connect to backend/service)

6. **Layout** (`app/layout.tsx`):
   - Change site title and description
   - Update default theme

### Images

Replace placeholder images:
- Profile images use DiceBear API (can be replaced with real photos)
- Project images use Unsplash (replace with your project screenshots)

### Theme

The site uses DaisyUI themes. To change the default theme:

1. Edit `app/layout.tsx`:
```tsx
<html lang="en" data-theme="dark"> // Change "dark" to any DaisyUI theme
```

Available themes: light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter

### Colors

Customize colors in `tailwind.config.js` or use DaisyUI's built-in color system.

## Deployment on Vercel

### Quick Deploy

1. Push your code to a GitHub repository

2. Go to [Vercel](https://vercel.com) and sign in with GitHub

3. Click "New Project"

4. Import your repository

5. Vercel will automatically detect Next.js:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`

6. Click "Deploy"

Your site will be live in minutes!

### Custom Domain

1. Go to your project on Vercel
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects section
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── public/               # Static files
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables (Optional)

If you add form submission backend, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other environment variables as needed
```

## Performance

This portfolio is optimized for performance:
- Static generation where possible
- Optimized images
- Code splitting
- Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [DaisyUI documentation](https://daisyui.com)
- Create an issue in the repository

---

Made with ❤️ using Next.js and DaisyUI
