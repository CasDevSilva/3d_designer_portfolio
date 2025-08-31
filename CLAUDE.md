# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a 3D designer portfolio built with React + Vite. It's a modern web application using React 18 with a minimal setup focused on fast development and hot module replacement.

## Development Commands

- `npm run dev` - Start development server with Vite HMR (runs on port 5173)
- `npm run build` - Build for production using Vite
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Tech Stack & Architecture

### Core Framework
- **React 18** with JSX
- **Vite** as build tool and dev server
- **ESLint** with React-specific rules and hooks validation

### UI & Styling
- **Chakra UI** as the main component library
- **Framer Motion** for animations and transitions
- **React Icons** for icon components
- **Emotion** (React/Styled) for CSS-in-JS styling

### Routing & Navigation
- **React Router DOM v7** for client-side routing

### Development Environment
- Configured for **devcontainer** development with polling enabled
- Server configured to run on all hosts (important for containers)
- Uses port 5173 with strict port enforcement

## Code Standards

- ESLint configured with recommended rules for React hooks and refresh
- Unused variables allowed if they follow uppercase pattern (e.g., `_UNUSED`, `API_KEY`)
- Uses latest ECMAScript features with JSX support
- Follows modern React patterns with functional components

## Project Structure

```
src/
├── main.jsx                    # Application entry point with React StrictMode
├── App.jsx                     # Main application component with routing
├── lib/
│   └── colors.js              # Color theme system
├── pages/
│   └── Contact.jsx            # Contact page layout
├── components/
│   ├── CardProject.jsx        # Interactive project showcase cards
│   ├── FormContact.jsx        # Contact form with state management
│   ├── Btn.jsx               # Reusable button component
│   ├── ContactAll.jsx        # Contact page container
│   ├── ContactInfo.jsx       # Contact information display
│   ├── Navbar.jsx            # Responsive navigation
│   ├── Footer.jsx            # Site footer
│   ├── Header*.jsx           # Header components
│   ├── Gallery.jsx           # Image gallery component
│   └── Card*.jsx             # Various card components
├── public/                    # Static assets
└── .devcontainer/            # Development container configuration
```

## Component Guidelines

### CardProject Component
**Purpose**: Displays project showcases with interactive elements
**Props**:
- `index`: Unique identifier for React keys
- `src`: Image source URL
- `name`: Project title
- `action`: Callback function for "Ver detalles" button

**UX Patterns**:
- Mobile-first responsive design
- Image hover zoom effects (desktop only)
- Card lift animation on hover (desktop only)
- Clear call-to-action with button
- Consistent spacing and typography

**Usage Example**:
```jsx
<CardProject
  index={1}
  src="/images/project1.jpg"
  name="Project Name"
  action={() => navigateToProject(1)}
/>
```

### Form Components
**FormContact**: Complete contact form with state management
- Handles name, subject, email, message fields
- Integrates with Web3Forms API
- Auto-clears form after successful submission
- Mobile-responsive layout

**Btn**: Reusable button component
- Receives `message` (button text) and `action` (callback) props
- Consistent styling across application
- Mobile-first responsive behavior

## Responsive Design System

All components follow this pattern:
```jsx
// Mobile-first responsive properties
property={{ 
  base: "mobile-value",     // Default (mobile)
  md: "tablet-value",       // 768px+
  lg: "desktop-value"       // 992px+
}}

// Conditional animations (desktop only)
_hover={{
  base: {},                 // No animations on mobile
  md: {                     // Animations on desktop
    transform: "translateY(-5px)",
    boxShadow: "lg"
  }
}}
```

## Development Notes

- Uses React 18 with functional components and hooks
- ES modules with Vite for fast development
- Chakra UI for consistent responsive design
- Color system centralized in `src/lib/colors.js`
- Mobile-first approach with performance optimization
- Web3Forms integration for contact functionality
- All animations disabled on mobile for better performance