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

- `src/main.jsx` - Application entry point with React StrictMode
- `src/App.jsx` - Main application component (currently minimal)
- `public/` - Static assets
- `.devcontainer/` - Development container configuration with setup scripts

## Development Notes

- The project is set up as a private package with ES modules
- Uses React's StrictMode for additional development checks
- Vite config includes polling for file watching (useful in containerized environments)
- Currently in early development stage with minimal component structure