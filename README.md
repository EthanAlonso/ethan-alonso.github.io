# Ethan Alonso - Portfolio Website

Modern, bold portfolio website showcasing soccer data analytics projects. Built with React, Vite, Tailwind CSS, and Framer Motion.

🔗 **Live Site:** [https://ethanalonso.github.io](https://ethanalonso.github.io)

## 🚀 Features

- **Bold & Creative Design** - Modern blue color scheme with smooth animations
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **7 Key Sections** - Hero, About, Projects, Skills, Certifications, Contact, Footer
- **Smooth Animations** - Powered by Framer Motion
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **Accessible** - WCAG AA compliant with proper ARIA labels
- **Easy to Customize** - Simple data structures for quick content updates

## 📋 Sections

1. **Hero** - Eye-catching introduction with animated CTAs
2. **About** - Professional bio highlighting consulting and analytics background
3. **Projects** - 4 soccer analytics projects with tech stacks and impact metrics
4. **Skills** - Organized by category (Data Science, Web Dev, Sports Analytics)
5. **Certifications** - Professional credentials with badges
6. **Contact** - Form with Formspree integration + social links
7. **Footer** - Copyright and tech stack credits

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library
- **GitHub Pages** - Hosting platform
- **GitHub Actions** - Automated deployment

## 🏃 Running Locally

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EthanAlonso/ethan-alonso.github.io.git
cd ethan-alonso.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🚢 Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to GitHub Pages when you push to the `main` branch using GitHub Actions.

**Setup Steps:**

1. Go to your repository settings on GitHub
2. Navigate to **Settings > Pages**
3. Under "Build and deployment", select:
   - **Source:** GitHub Actions
4. Push to `main` branch - deployment happens automatically!

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# Then manually upload the dist/ folder to your hosting provider
```

## ✏️ Customization Guide

### Update Personal Information

#### 1. Hero Section
Edit `src/components/Hero.jsx`:
- Update name, tagline, and description
- Modify CTA button text/actions

#### 2. About Section
Edit `src/components/About.jsx`:
- Update bio paragraphs
- Replace placeholder image URL
- Modify quick stats

#### 3. Projects
Edit the `projectsData` array in `src/components/Projects.jsx`:
```javascript
{
  title: 'Your Project Name',
  description: 'Project description...',
  technologies: ['Tech1', 'Tech2'],
  role: 'Your Role',
  impact: 'Key metrics',
  image: 'https://your-image-url.com',
  liveDemo: 'https://demo-url.com',
  github: 'https://github.com/...',
}
```

#### 4. Skills
Edit the `skillsData` array in `src/components/Skills.jsx`:
```javascript
{
  category: 'Category Name',
  skills: ['Skill1', 'Skill2', 'Skill3'],
  color: 'from-blue-500 to-cyan-500',
}
```

#### 5. Certifications
Edit the `certificationsData` array in `src/components/Certifications.jsx`:
```javascript
{
  name: 'Certification Name',
  organization: 'Issuing Organization',
  date: 'Year',
  badgeUrl: 'https://badge-image-url.com',
  credentialUrl: 'https://credential-url.com',
}
```

#### 6. Contact & Social Links
Edit `src/components/Contact.jsx`:
- Update email address
- Update social media URLs (GitHub, LinkedIn, Twitter)
- Configure Formspree (see below)

### Contact Form Setup

The contact form uses [Formspree](https://formspree.io) for form submissions.

**Setup Instructions:**

1. Sign up for a free account at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID (looks like `abc123xyz`)
4. Open `src/components/Contact.jsx`
5. Replace `YOUR_FORMSPREE_ID` with your actual form ID:
   ```javascript
   const FORMSPREE_ID = 'your-actual-form-id';
   ```
6. Save and redeploy

**Alternative:** Use a different form service by modifying the `handleSubmit` function.

### Update Resume

1. Replace `public/resume.pdf` with your actual resume PDF
2. Keep the filename as `resume.pdf` or update all references in:
   - `src/components/Navigation.jsx`
   - `src/components/Contact.jsx`

### Change Color Scheme

Edit `tailwind.config.js` to customize colors:
```javascript
colors: {
  primary: {
    DEFAULT: '#2563eb', // Your primary color
    light: '#60a5fa',   // Lighter shade
    dark: '#1e40af',    // Darker shade
  },
}
```

### Update Fonts

Edit `src/index.css` to change fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

## 🖼️ Images

### Project Images
- Current images use Unsplash placeholders
- Replace with your own images by updating URLs in `src/components/Projects.jsx`
- Recommended size: 800x600px
- Use optimized formats (WebP, JPEG)

### About Section Photo
- Replace the image URL in `src/components/About.jsx`
- Recommended: Square aspect ratio (e.g., 600x600px)

### Certification Badges
- Update badge URLs in `src/components/Certifications.jsx`
- Recommended size: 200x200px

## 🎨 Design Customization

### Animations
- Framer Motion animations can be adjusted in each component
- Modify `transition` durations and `delay` values
- See [Framer Motion docs](https://www.framer.com/motion/) for more options

### Responsive Breakpoints
Tailwind CSS breakpoints used:
- **Mobile:** < 640px (`sm:`)
- **Tablet:** 640-1024px (`md:`)
- **Desktop:** > 1024px (`lg:`, `xl:`)

## 📦 Project Structure

```
ethan-alonso.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── resume.pdf              # Resume PDF
│   └── vite.svg                # Favicon
├── src/
│   ├── components/
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── ProjectCard.jsx     # Individual project card
│   │   ├── Skills.jsx          # Skills grid
│   │   ├── Certifications.jsx  # Certifications grid
│   │   ├── Contact.jsx         # Contact form & social links
│   │   ├── Navigation.jsx      # Top navigation bar
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind
├── index.html                  # HTML template with SEO meta tags
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## 🐛 Troubleshooting

### Build Fails
- Ensure Node.js version is 18 or higher: `node --version`
- Clear cache and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for syntax errors in modified files

### Animations Not Working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser console for errors

### Contact Form Not Working
- Verify Formspree ID is correct in `Contact.jsx`
- Check Formspree dashboard for form submissions
- Ensure form ID doesn't include extra characters

### Images Not Loading
- Check image URLs are valid and accessible
- Verify images are in `public/` folder for local images
- Use absolute URLs for external images

### GitHub Pages Not Deploying
- Check GitHub Actions tab for error logs
- Ensure GitHub Pages is enabled in repository settings
- Verify `base` path in `vite.config.js` is set to `/`
- Make sure the deployment source is set to "GitHub Actions"

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio site, but suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 📞 Contact

**Ethan Alonso**
- Website: [https://ethanalonso.github.io](https://ethanalonso.github.io)
- GitHub: [@EthanAlonso](https://github.com/EthanAlonso)
- LinkedIn: [linkedin.com/in/ethanalonso](https://linkedin.com/in/ethanalonso)
- Email: ethan.alonso@example.com

---

Built with ❤️ and ⚽ by Ethan Alonso
