# Wellness Blog Platform

A modern, responsive blog platform built with Next.js, focused on wellness and fitness content. Features a clean design with smooth animations and professional layout.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional interface with smooth animations
- **Blog Management**: Dynamic blog post display with categories
- **SEO Optimized**: Built with Next.js for optimal performance
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── blog/[id]/          # Dynamic blog post pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── blogs/              # Blog-related components
│   └── ui/                 # Reusable UI components
├── helpers/
│   └── api.ts              # API utilities
└── lib/
    └── utils.ts            # Utility functions
```

## Customization

The project uses CSS custom properties for theming. You can modify the color scheme in `app/globals.css`:

```css
:root {
  --accent-1: #67BC2A;  /* Primary green */
  --accent-2: #A8E6CF;  /* Light green */
  --accent-3: #2E7D32;  /* Dark green */
}
```

## Deployment

The project is configured for static export and can be deployed to any static hosting service:

```bash
npm run build
```

## License

This project is open source and available under the MIT License.