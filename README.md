# Photography Portfolio

A clean, responsive photography portfolio built with Astro and Tailwind CSS.

## Features

- **Fast Loading**: Static site generation with optimized images
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Auto Photo Detection**: Just drop images in `/public/photos/` and they appear
- **Image Optimization**: Automatic compression and format conversion
- **Clean Design**: Minimal, professional layout focused on your photography

## Getting Started

### Adding Your Photos

1. Download your photos from Google Drive (or wherever they're stored)
2. Place them in the `/public/photos/` directory
3. Supported formats: JPG, PNG, GIF, WebP
4. **Hero Background**: Name one photo `hero.jpg` (or .png/.webp) to use as homepage background
5. **Contact Portrait**: Name a photo `bruce.jpg` for the contact page
6. **Categories**: Use prefixes to categorize photos:
   - `portrait-` for portrait sessions
   - `event-` for events
7. **Column Spans** (optional): Add `-2x` or `-3x` to make photos span multiple columns:
   - `portrait-jane.jpg` - 1 column (default)
   - `event-wedding-2x.jpg` - spans 2 columns
   - `event-hero-3x.jpg` - spans full width (3 columns)
8. The gallery will automatically detect, organize, and display them

### Customizing Your Site

**Change Your Name & Info:**
- Edit `src/components/Layout.astro` to update the site title
- Edit `src/pages/index.astro` to change the homepage text
- Edit `src/pages/contact.astro` to add your contact information

**Colors & Styling:**
- All styling uses Tailwind CSS classes
- Main colors can be changed by replacing `gray-900`, `gray-600`, etc.

### Running the Site

```bash
# Install dependencies (only needed once)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploying to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically - that's it!

Vercel will automatically rebuild your site whenever you:
- Add new photos to the `/public/photos/` folder
- Make any changes to the code
- Push changes to GitHub

## File Structure

```
src/
├── components/
│   └── Layout.astro          # Navigation and site layout
├── pages/
│   ├── index.astro           # Homepage
│   ├── gallery.astro         # Photo grid
│   └── contact.astro         # Contact information
public/
└── photos/                   # Put your images here
```

## Need Help?

The site is designed to be maintenance-free. Just add photos to the `/public/photos/` folder and they'll appear automatically.

For any technical issues, contact [your name/email here].
