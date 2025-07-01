# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server using Vite
- `npm run build` - Build for production (runs TypeScript compilation followed by Vite build)
- `npm run preview` - Preview production build locally
- `npm test` - Run tests using Vitest (test framework is configured)

## Project Architecture

This is a React-based game discovery application built with TypeScript and Vite. The app uses the RAWG API to fetch game data.

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **UI Framework**: Chakra UI with Framer Motion animations
- **State Management**: Zustand for global state, React Query for server state
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Testing**: Vitest

### Key Architecture Patterns

**API Integration**: Uses a generic `APIClient` class in `src/services/api-client.ts` that wraps axios. All API calls go through this centralized client which handles the RAWG API key via environment variable `VITE_REACT_APP_API_KEY`.

**State Management**: 
- Global UI state (filters, search) managed by Zustand store in `src/store.ts`
- Server state (games, genres, platforms) managed by React Query hooks in `src/hooks/`

**Routing Structure**:
- Layout wrapper at `/` with nested routes
- Home page at `/` shows game grid with filters
- Game detail pages at `/games/:slug`

**Component Organization**:
- `src/components/` - Reusable UI components
- `src/pages/` - Route-level components
- `src/hooks/` - Custom React Query hooks for data fetching
- `src/entities/` - TypeScript interfaces for API data models
- `src/services/` - API client and utilities

**Data Flow**: Components use custom hooks that wrap React Query for server state. Global filters are managed through Zustand store and passed to React Query hooks as dependencies.

### Environment Setup

Requires `VITE_REACT_APP_API_KEY` environment variable for RAWG API access.

### Code Conventions

- Uses TypeScript strict mode
- Chakra UI components for styling
- Custom hooks pattern for data fetching
- Functional components with hooks throughout
- Image optimization utilities in `src/services/image-url/`