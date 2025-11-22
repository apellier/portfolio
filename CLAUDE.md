# Portfolio Project - Claude Memory

## Project Overview
This is a modern React portfolio website built with TypeScript and a "Soft Neo-Brutalism" design system. The project showcases a creative technologist's work with a focus on clean aesthetics, interactive elements, and modern web technologies.

## Technology Stack

### Core Dependencies
- **React**: v19.2.0 (Latest)
- **React DOM**: v19.2.0
- **TypeScript**: v5.8.2
- **Vite**: v6.2.0 (Build tool)

### UI & Animation Libraries
- **Framer Motion**: v12.23.24 (Animations and interactions)
- **Lucide React**: v0.554.0 (Icon library)
- **Tailwind CSS**: Loaded via CDN in index.html

### Development Setup
- **Vite Plugin React**: v5.0.0
- **Node Types**: v22.14.0
- **Server Port**: 3000 (configured in vite.config.ts)

## Project Structure

```
/portfolio
├── App.tsx                    # Main application component
├── index.tsx                 # React app entry point
├── index.html               # HTML template with Tailwind CDN
├── components/
│   ├── CustomCursor.tsx     # Interactive custom cursor component
│   ├── ProjectCard.tsx      # Project showcase cards for bento grid
│   ├── MethodologyColumn.tsx # Three-column methodology section
│   └── Typewriter.tsx       # Animated typing text effect
├── constants.ts             # Project data and methodology content
├── types.ts                 # TypeScript interfaces
├── metadata.json           # Project metadata (AI Studio related)
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── README.md               # Project documentation
```

## Key Features & Components

### Design System
- **Color Palette**:
  - `cream`: #FDFBF7 (background)
  - `charcoal`: #1A1A1A (text)
  - `accent`: #2952FF (Electric Blue)
  - `accent-hover`: #0026CA
- **Typography**: Space Grotesk (sans-serif), JetBrains Mono (monospace)
- **Visual Effects**: Noise texture overlay, hard shadows, grain texture
- **Custom cursor**: Interactive cursor that responds to hover states

### Layout Sections
1. **Hero Section**: Large typography with animated typewriter effect
2. **Work Section**: Bento grid layout with responsive project cards
3. **Methodology Section**: Three-column process breakdown
4. **About/Contact Section**: Social links and project credits

### Interactive Elements
- **Custom Cursor** (`CustomCursor.tsx`): Animated cursor with hover states
- **Project Cards** (`ProjectCard.tsx`): Hover animations with shadow effects
- **Typewriter Effect** (`Typewriter.tsx`): Cycling text animation
- **Responsive Navigation**: Mobile hamburger menu with overlay

## Data Structure

### Projects (`constants.ts`)
Four main projects with different grid sizes:
- **Spotify Origins**: Large (2x2) - Data visualization
- **BXLGIS City**: Medium (1x2) - GovTech platform
- **Café Costermans**: Small (1x1) - Restaurant website
- **Décider avec le Vivant**: Medium (1x2) - Service design research

### Methodology (`constants.ts`)
Three-step process:
1. **Discovery**: User research and opportunity mapping
2. **Prototyping**: Architecture and MVP definition
3. **Craft**: High-fidelity design and engineering

## Configuration Details

### Vite Configuration (`vite.config.ts`)
- Server runs on port 3000
- React plugin enabled
- Path aliases: `@/*` points to root directory
- Environment variables: GEMINI_API_KEY support
- Host configured for `0.0.0.0`

### TypeScript Configuration (`tsconfig.json`)
- Target: ES2022
- JSX: react-jsx
- Module resolution: bundler
- Experimental decorators enabled
- Path mapping for `@/*` aliases

### Tailwind Configuration (in `index.html`)
- Custom color scheme
- Extended font families
- Hard shadow utilities
- Grid pattern backgrounds

## Build & Development Commands

```bash
# Development
npm run dev         # Start development server on port 3000

# Production
npm run build       # Build for production using Vite
npm run preview     # Preview production build
```

## Special Notes

### AI Studio Integration
- Project appears to be set up for AI Studio deployment
- Uses CDN imports for React dependencies in production
- GEMINI_API_KEY environment variable configured
- Metadata.json contains AI Studio app reference

### Accessibility & UX
- Custom cursor implementation (hides default cursor)
- Responsive design with mobile-first approach
- Smooth animations with Framer Motion
- Semantic HTML structure
- Focus states and hover interactions

### Performance Considerations
- Uses React 19 concurrent features
- Framer Motion for optimized animations
- Vite for fast development and optimized builds
- CDN delivery for dependencies in production

## Migration to Next.js

### Changes Made
The project has been successfully migrated from Vite to Next.js for better performance, SEO, and Vercel deployment optimization:

1. **Project Structure**:
   - Moved components to `src/components/` directory
   - Created Next.js `app/` directory structure with layout.tsx and page.tsx
   - Updated import paths to use `@/` alias pointing to project root

2. **Configuration Updates**:
   - **package.json**: Replaced Vite with Next.js dependencies
   - **tsconfig.json**: Updated for Next.js with proper module resolution
   - **tailwind.config.js**: Created proper Tailwind configuration for Next.js
   - **postcss.config.js**: Added PostCSS configuration for Tailwind
   - **next.config.js**: Added optimizations for package imports
   - **.eslintrc.json**: Added Next.js ESLint configuration

3. **Component Updates**:
   - Added `'use client'` directive to main page for client-side features
   - Updated font loading to use Next.js font optimization
   - Moved global styles to `app/globals.css`

### Next.js Features Utilized
- **App Router**: Using the new app directory structure
- **Font Optimization**: Google Fonts loaded with next/font
- **Image Optimization**: Configured for WebP and AVIF formats
- **Package Optimization**: Optimized imports for lucide-react and framer-motion

### Deployment Ready
- Optimized for Vercel deployment
- All build configurations properly set up
- TypeScript strict mode enabled
- ESLint integration for code quality

## Build Commands (Updated)

```bash
# Development
npm run dev         # Start Next.js development server

# Production
npm run build       # Build for production
npm start          # Start production server
npm run lint       # Run ESLint

# Deployment
# Ready for Vercel deployment via Git integration
```

## Current Status
This is a complete, modern Next.js portfolio website showcasing creative technology work. The project has been successfully migrated from Vite to Next.js with all modern optimizations and is ready for Vercel deployment. The codebase maintains the original design system and interactive elements while leveraging Next.js features for better performance and SEO.