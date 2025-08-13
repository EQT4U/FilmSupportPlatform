import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import session from 'express-session';
import passport from 'passport';
import { createServer } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from dist/public in production, root in development
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist/public')));
} else {
  // In development, Vite handles the frontend
  app.use(express.static(join(__dirname, '../')));
}

// Import and use routes
import routesModule from './routes.js';
app.use('/api', routesModule);

// Catch-all handler for SPA routing in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/public/index.html'));
  });
} else {
  // In development, serve the index.html from root for now
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../index.html'));
  });
}

const server = createServer(app);

server.listen(Number(port), '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});

export default app;