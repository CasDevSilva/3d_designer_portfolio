# 3D Designer Portfolio

A modern, responsive portfolio application for 3D designers built with React + Vite and Chakra UI.

## Features

- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Project Showcase**: Interactive project cards with image galleries
- **Contact System**: Functional contact form with Web3Forms integration
- **Modern UI**: Clean design with hover animations and transitions
- **Performance Optimized**: Animations disabled on mobile for better performance

## Tech Stack

- **React 18** with JSX
- **Vite** for fast development and building
- **Chakra UI** for responsive components
- **Framer Motion** for animations
- **React Router DOM v7** for navigation
- **Web3Forms** for contact form handling

## Development

```bash
npm run dev    # Start development server (port 5173)
npm run build  # Build for production
npm run lint   # Run ESLint
npm run preview # Preview production build
```

## Component Architecture

### CardProject Component
Interactive project showcase cards with:
- Responsive image display with hover zoom effects
- Project title and call-to-action button
- Mobile-first responsive design
- Prop-based action handling for navigation

### Form Components
- `FormContact`: State-managed contact form with validation
- `Btn`: Reusable button component with action callbacks
- Automatic form clearing after successful submission

### Responsive Design Pattern
All components follow mobile-first responsive design:
- Base styles for mobile (default)
- `md` breakpoint for tablets (768px+)
- `lg` breakpoint for desktop (992px+)
- Animations only enabled on desktop for performance
