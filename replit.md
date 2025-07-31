# Kwento - Filipino Cinema Crowdfunding Platform

## Overview

Kwento is a static HTML/CSS website designed to support Filipino filmmakers through crowdfunding. The platform showcases authentic Filipino film projects, connecting passionate filmmakers with supportive audiences. The website features a modern, responsive design with individual project pages for three authentic Filipino films: "She's Dating the Gangster" (2014), "Seven Sundays" (2017), and "100 Tula Para Kay Stella" (2017).

## User Preferences

Preferred communication style: Simple, everyday language.
Project approach: Static HTML/CSS prototype (can be upgraded to React/JavaScript in the future).

## System Architecture

**Current Architecture (Static Website):**
- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **Styling**: Custom CSS with modern design patterns, Google Fonts integration  
- **Structure**: Static HTML files with shared CSS and JavaScript
- **Server**: Express.js serving static files (development environment)
- **Images**: External sources (Unsplash) for film posters and backgrounds

**Previous Architecture (Converted from React):**
Originally built with React/TypeScript but converted to static HTML for prototype simplicity.

## Key Components

### Static File Structure
- **Main Landing Page**: `index.html` with hero section, featured films, and contact info
- **Film Detail Pages**: Individual pages for each featured film with cast, synopsis, and funding progress
- **Shared Styles**: `styles.css` for global styling, `film-detail.css` for film page specific styling
- **JavaScript**: `script.js` for mobile navigation, `film-detail.js` for gallery functionality
- **Typography**: Google Fonts (Merriweather for headings, Open Sans for body text)
- **Responsive Design**: Mobile-first approach with custom CSS media queries

### Featured Films
1. **She's Dating the Gangster (2014)** - Romance/Drama starring Kathryn Bernardo and Daniel Padilla
2. **Seven Sundays (2017)** - Family/Drama starring Aga Muhlach and ensemble cast
3. **100 Tula Para Kay Stella (2017)** - Romance/Poetry starring JC Santos and Bela Padilla

### UI Design System
- **Theme Colors**: Deep red (#8B0000), gold (#D4AF37), coral (#FF6B6B)
- **Typography**: Hierarchical font system with custom CSS properties
- **Components**: Cards, progress bars, navigation, galleries, responsive grid layouts
- **Visual Elements**: Gradient overlays, smooth transitions, hover effects

## Data Flow

1. **Static Content**: All film information and content stored directly in HTML files
2. **Navigation**: JavaScript-powered mobile menu and smooth scrolling
3. **Interactivity**: Gallery image switching, progress bar animations
4. **Responsive Behavior**: CSS media queries for mobile, tablet, and desktop layouts
5. **External Assets**: Unsplash images for film posters and backgrounds

## File Organization

### Root Directory Files
- `index.html` - Main landing page
- `styles.css` - Global CSS styles
- `script.js` - Main JavaScript functionality
- `film-shes-dating-the-gangster.html` - Film detail page
- `film-seven-sundays.html` - Film detail page  
- `film-100-tula-para-kay-stella.html` - Film detail page
- `film-detail.css` - Film page specific styles
- `film-detail.js` - Film page JavaScript functionality

### Development Environment
- Express.js server configured to serve static files from root directory
- Live development server with hot reload capabilities
- TypeScript infrastructure maintained for potential future React upgrade

## Recent Changes

**January 2025:**
- ✓ Converted React application to static HTML/CSS for prototype simplicity
- ✓ Created individual film detail pages for three authentic Filipino films
- ✓ Implemented responsive design with Filipino cinema theme colors
- ✓ Added interactive gallery functionality and mobile navigation
- ✓ Configured server to serve static HTML files properly

## Deployment Strategy

**Development Environment**:
- Express.js server serving static files from root directory
- Node.js environment with TypeScript support maintained
- Live reload and development server capabilities

**Production Build**:
- Static HTML files can be served from any web server
- No build process required - files are deployment-ready
- Images sourced externally (no local asset management needed)

**Key Commands**:
- `npm run dev`: Development server with static file serving
- Static files accessible directly via file paths
- No compilation or build step required

The website is designed for easy deployment on any static hosting platform while maintaining the development infrastructure for potential future React/JavaScript upgrades.