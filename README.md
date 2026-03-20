# Photography Portfolio

A clean, responsive photography portfolio built with Astro, Tailwind CSS, and Cloudinary.

## Features

- **Fast Loading**: Static site generation with Cloudinary-optimized images
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Cloudinary Integration**: Images served via CDN with automatic optimization
- **Folder-Based Categories**: Organize photos by Cloudinary folders
- **Dynamic Filters**: Filter buttons automatically generated from your folder structure
- **Clean Design**: Minimal, professional layout focused on your photography

## Getting Started

### Cloudinary Setup

1. Create a [Cloudinary](https://cloudinary.com) account (free tier available)
2. Create a `.env` file in the project root with your credentials:
   ```
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

### Adding Your Photos

Upload photos to Cloudinary under a root folder (e.g., `bruce-bybee/`):

1. **Folder Structure**: Create subfolders to categorize your photos:
   - `bruce-bybee/Portraits/` → Category: "Portraits"
   - `bruce-bybee/Events/` → Category: "Events"
   - `bruce-bybee/Weddings/` → Category: "Weddings"
   - Photos in `bruce-bybee/` (root) → Category: "Other"

2. **Filter Buttons**: Automatically generated based on your subfolder names

3. **Naming Conventions** (optional):
   - **Grouping**: Use prefixes with numbers to group related photos:
     - `wedding-jane-1.jpg`, `wedding-jane-2.jpg` → grouped together
     - `portrait-client-01.jpg`, `portrait-client-02.jpg` → grouped together
   - **Column Spans**: Add `-2x` or `-3x` suffix for wider photos:
     - `photo.jpg` - 1 column (default)
     - `photo-2x.jpg` - spans 2 columns
     - `photo-3x.jpg` - spans full width (3 columns)

4. **Excluded Images**: Files starting with `hero` or `bruce` are filtered out (used for homepage/contact page)

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
3. Add your Cloudinary environment variables in Vercel's project settings
4. Deploy automatically - that's it!

Vercel will automatically rebuild your site whenever you push changes to GitHub. New photos uploaded to Cloudinary will appear after the 1-hour cache expires or on the next rebuild.

## File Structure

```
src/
├── components/
│   └── Layout.astro          # Navigation, filters, and site layout
├── pages/
│   ├── index.astro           # Homepage
│   ├── gallery.astro         # Photo grid (Cloudinary integration)
│   └── contact.astro         # Contact information
.env                          # Cloudinary credentials (not committed)
```

## How It Works

1. Photos are fetched from Cloudinary's Search API
2. Categories are determined by the subfolder each image is in
3. Images are served via Cloudinary CDN with automatic WebP conversion and responsive sizing
4. Results are cached for 1 hour to reduce API calls

## Need Help?

The site is designed to be maintenance-free. Upload photos to Cloudinary folders and they'll appear automatically with the correct category.

For any technical issues, contact [your name/email here].
