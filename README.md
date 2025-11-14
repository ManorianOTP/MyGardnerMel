# MyGardenerMel - Modern Website

A modern, responsive website for MyGardenerMel, a professional gardening service based in Norwich, England.

## Features

- **Modern Design**: Built with Next.js 16 and Mantine UI v8
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized with Next.js App Router and Server Components
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility
- **SEO Optimized**: Proper metadata and semantic structure

## Tech Stack

- **Framework**: Next.js 16.0.3
- **UI Library**: Mantine UI 8.3.7
- **Icons**: Tabler Icons React
- **Language**: TypeScript
- **Styling**: CSS Modules with Mantine theming

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with Mantine provider
│   ├── page.tsx         # Homepage
│   ├── theme.ts         # Mantine theme configuration
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Site header with navigation
│   ├── Hero.tsx         # Hero section
│   ├── Gallery.tsx      # Project gallery
│   ├── Services.tsx     # Services section
│   ├── Stats.tsx        # Statistics section
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Site footer
└── public/
    └── images/          # Static images
```

## Customization

### Colors

The color scheme is configured in `app/theme.ts` using the original site's green and cream palette:
- Primary Green: `#145233`
- Background Cream: `#e2e1cf`

### Content

To update content:
- Edit component files in the `components/` directory
- Update metadata in `app/layout.tsx`
- Add images to `public/images/`

## Deployment

This site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

## License

© 2025 MyGardenerMel. All rights reserved.
