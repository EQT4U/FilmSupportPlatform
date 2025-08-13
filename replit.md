# Kwento - Filipino Cinema Crowdfunding Platform

## Overview

Kwento is a static HTML/CSS website designed to support Filipino filmmakers through crowdfunding. The platform showcases authentic Filipino film projects, connecting passionate filmmakers with supportive audiences. The website features a modern, responsive design with individual project pages for three authentic Filipino films: "She's Dating the Gangster" (2014), "Seven Sundays" (2017), and "100 Tula Para Kay Stella" (2017).

## User Preferences

Preferred communication style: Simple, everyday language.
Project approach: Static HTML/CSS prototype (can be upgraded to React/JavaScript in the future).

## System Architecture

**Current Architecture (Static Website):**
- **Frontend**: Static HTML/CSS with vanilla JavaScript
- **Styling**: Custom CSS with responsive design
- **Backend**: Express.js server for static file serving
- **Build Process**: ESBuild for backend bundling
- **Development**: Express server serving static files from root directory

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
- Live development server capabilities
- Simple static file serving architecture

## Recent Changes

**August 13, 2025:**
- ✓ **CLEANED UP UNUSED REACT COMPONENTS**: Removed React app directories and references
- ✓ **FIXED DEPLOYMENT INCONSISTENCY**: Updated server to serve static HTML in both preview and deployment
- ✓ Resolved deployment vs preview differences - now both environments serve identical static site
- ✓ Modified server configuration to always serve static files from root directory
- ✓ Simplified server routing to consistently serve static HTML index.html
- ✓ Verified both development and production modes now show the same "Screenshare PH" site
- ✓ Updated documentation to reflect static-only architecture
- ✓ Removed references to React "Philippine Cinema Collective" app
- ✓ Confirmed build and start commands work properly for deployment

**August 2025:**
- ✓ Simplified deployment configuration for static file serving
- ✓ Updated server to serve static files from root directory
- ✓ Removed React dependencies and complexity
- ✓ Streamlined build process for static website
- ✓ Updated documentation for static deployment

**January 2025:**
- ✓ Built static HTML/CSS website for Filipino cinema crowdfunding
- ✓ Created individual film detail pages for three authentic Filipino films
- ✓ Implemented responsive design with Filipino cinema theme colors
- ✓ Added interactive gallery functionality and mobile navigation
- ✓ Configured server to serve static HTML files properly

## Deployment Strategy

**Development Environment**:
- Run `npm run dev` to start the development server
- Express.js serves static HTML/CSS files from root directory
- Server runs on port 5000 with website accessible at root path

**Production Build**:
- `npm run build`: Builds Express backend server (to `dist/index.js`)
- `npm start`: Runs production server with `NODE_ENV=production`
- Server serves static HTML/CSS files from root directory
- No frontend build needed - uses static files directly

**Deployment Configuration**:

⚠️ **DEPLOYMENT CONFIGURATION UPDATE REQUIRED**: The application is production-ready, but the .replit deployment configuration needs manual updates through the Replit UI. The following fixes address all deployment errors:

**Steps to Fix Deployment:**

1. **Open Replit Deployment Settings**:
   - Click the "Deploy" button in Replit
   - Navigate to deployment configuration

2. **Update Build Command**:
   - Change from: Not set
   - Change to: `npm run build`

3. **Update Run Command**:
   - Change from: `npm run dev` (currently failing)
   - Change to: `npm start`

4. **Set Environment Variables**:
   - Add: `NODE_ENV=production`

5. **Verify Port Settings**:
   - Ensure port is set to: 5000

**Required Settings Summary:**
- **Build Command**: `npm run build`
- **Run Command**: `npm start`
- **Environment Variables**: `NODE_ENV=production`
- **Port**: 5000 (server listens on 0.0.0.0:5000)

**DEPLOYMENT STATUS SUMMARY:**

✅ **Application Layer (Fixed)**:
- Build command: `npm run build` - Works correctly, generates optimized assets
- Start command: `npm start` - Properly configured for production
- Server configuration: Handles NODE_ENV=production correctly
- Static file serving: Routes correctly between dist/public and API endpoints
- Port configuration: Listens on 0.0.0.0:5000 as required

⚠️ **Deployment Configuration (Manual Update Required)**:
- Build command setting: Must be set to `npm run build` in Replit UI
- Run command setting: Must be changed from `npm run dev` to `npm start` in Replit UI  
- Environment variables: Must add `NODE_ENV=production` in Replit UI
- Port setting: Should be confirmed as 5000 in Replit UI

**All application code is deployment-ready. Only the .replit configuration needs manual updates through the Replit deployment interface.**

**Important:** The deployment will fail if you use `npm run dev` as the run command since it contains 'dev' which is flagged as a security risk. Always use `npm start` for production deployments.

**Key Commands**:
- `npm run dev`: Development server (both frontend and backend)
- `npm run build`: Production build process
- `npm start`: Production server
- `npm run check`: TypeScript checking

**Important Notes**:
- Development command `npm run dev` is blocked in production deployments for security
- Production build creates optimized assets in `dist/` directory
- Server automatically detects environment and serves appropriate files