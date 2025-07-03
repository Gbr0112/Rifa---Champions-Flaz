# Rifa Champions Fla 2025

## Overview

This is a Brazilian Portuguese raffle application for "Rifa Champions Fla 2025" built with React, TypeScript, and Express. The application allows users to participate in a raffle to win either an iPhone 15 or R$ 3,000 via PIX payment. The system features a modern UI with Champions League theming, real-time payment processing, and a responsive design optimized for mobile devices.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom Champions League theme colors
- **UI Components**: Radix UI components with shadcn/ui styling system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL sessions with connect-pg-simple
- **Development**: Hot reload with tsx

### Key Components

1. **Raffle Landing Page** (`client/src/pages/home.tsx`)
   - User registration form with name and phone validation
   - PIX payment integration
   - Prize display with Champions League theming
   - Real-time form validation and feedback

2. **UI Component System** (`client/src/components/ui/`)
   - Complete set of accessible components based on Radix UI
   - Custom components for Champions League theming:
     - `ChampionsTrophy`: Animated trophy display
     - `PrizeCard`: Prize information cards
     - `FloatingParticles`: Decorative animations

3. **Database Schema** (`shared/schema.ts`)
   - User management with Drizzle ORM
   - PostgreSQL-compatible schema definitions
   - Type-safe database operations

4. **Storage Interface** (`server/storage.ts`)
   - Abstracted storage layer with in-memory fallback
   - CRUD operations for user management
   - Ready for PostgreSQL integration

## Data Flow

1. **User Registration**: Users fill out name and phone number fields
2. **Form Validation**: Real-time validation with Brazilian phone number formatting
3. **PIX Payment**: QR code generation for payment processing
4. **Payment Confirmation**: Manual confirmation system
5. **Database Storage**: User data stored in PostgreSQL via Drizzle ORM

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Modern build tool with HMR and optimized production builds
- **Express.js**: Web server framework
- **Drizzle ORM**: Type-safe database operations

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library
- **Font Awesome**: Additional icons

### Database and Storage
- **PostgreSQL**: Primary database (via Neon Database)
- **Neon Database**: Serverless PostgreSQL provider
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Development
- Vite dev server for frontend with HMR
- tsx for TypeScript execution in development
- Replit-specific plugins for development environment

### Production Build
- Frontend: Vite build with optimized assets
- Backend: ESBuild bundle for Node.js deployment
- Static assets served from Express
- Environment variables for database connection

### Database Management
- Drizzle migrations in `./migrations` directory
- Schema definitions in `shared/schema.ts`
- Push-based schema updates with `db:push` command

## Changelog

Changelog:
- July 03, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.