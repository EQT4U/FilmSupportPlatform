# Production Deployment Configuration

## Required .replit File Changes

To fix the deployment errors, you need to manually update your `.replit` file with the following configuration:

### 1. Change Deployment Section
Replace the current deployment section:
```toml
[deployment]
deploymentTarget = "gce"
run = ["sh", "-c", "npm run dev"]
```

With the production configuration:
```toml
[deployment]
deploymentTarget = "gce"
build = ["sh", "-c", "npm run build"]
run = ["sh", "-c", "npm start"]
```

### 2. Add Production Environment Variables
Add these environment variables in the Replit Secrets panel (not in files):
- `NODE_ENV=production`
- `SESSION_SECRET=your-secure-production-secret`

### 3. Verify Commands Work
The following commands are already configured in package.json:
- ✅ `npm run build` - Builds both frontend (Vite) and backend (ESBuild)
- ✅ `npm start` - Starts production server with NODE_ENV=production

## How to Apply These Changes

1. **Edit .replit file manually** in the Replit IDE (file explorer)
2. **Add secrets** via Replit's Secrets panel in the sidebar
3. **Deploy** using Replit's Deploy button

## Build Process Details

The production build:
1. **Frontend**: Vite builds React app to `dist/public/`
2. **Backend**: ESBuild bundles Express server to `dist/index.js`
3. **Static Files**: Production server serves built files from `dist/public/`
4. **Routing**: SPA routing handled by Express catch-all in production

## Verification

Test the build locally:
```bash
npm run build  # Should complete without errors
npm start      # Should start production server
```

The build output should show:
- Frontend assets in `dist/public/`
- Backend bundle at `dist/index.js`
- Server running on port 5000