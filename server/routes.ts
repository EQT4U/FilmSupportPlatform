import { Router } from 'express';
import type { Request, Response } from 'express';

const router = Router();

// Health check endpoint
router.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Get individual film
router.get('/films/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const films = [
    {
      id: 1,
      title: "She's Dating the Gangster",
      year: 2014,
      genre: "Romance/Drama",
      stars: ["Kathryn Bernardo", "Daniel Padilla"],
      description: "A romantic drama about love, sacrifice, and the complexities of young relationships.",
      funding_goal: 500000,
      funding_current: 325000,
    },
    {
      id: 2,
      title: "Seven Sundays",
      year: 2017,
      genre: "Family/Drama",
      stars: ["Aga Muhlach", "Cristine Reyes", "Enrique Gil"],
      description: "A heartwarming family drama about siblings reuniting to care for their ailing father.",
      funding_goal: 750000,
      funding_current: 480000,
    },
    {
      id: 3,
      title: "100 Tula Para Kay Stella",
      year: 2017,
      genre: "Romance/Poetry",
      stars: ["JC Santos", "Bela Padilla"],
      description: "A unique love story told through poetry and the power of words.",
      funding_goal: 400000,
      funding_current: 290000,
    }
  ];
  
  const film = films.find(f => f.id === id);
  if (!film) {
    return res.status(404).json({ error: 'Film not found' });
  }
  
  res.json(film);
});

// Get all films
router.get('/films', (req: Request, res: Response) => {
  const films = [
    {
      id: 1,
      title: "She's Dating the Gangster",
      year: 2014,
      genre: "Romance/Drama",
      stars: ["Kathryn Bernardo", "Daniel Padilla"],
      description: "A romantic drama about love, sacrifice, and the complexities of young relationships.",
      funding_goal: 500000,
      funding_current: 325000,
    },
    {
      id: 2,
      title: "Seven Sundays",
      year: 2017,
      genre: "Family/Drama",
      stars: ["Aga Muhlach", "Cristine Reyes", "Enrique Gil"],
      description: "A heartwarming family drama about siblings reuniting to care for their ailing father.",
      funding_goal: 750000,
      funding_current: 480000,
    },
    {
      id: 3,
      title: "100 Tula Para Kay Stella",
      year: 2017,
      genre: "Romance/Poetry",
      stars: ["JC Santos", "Bela Padilla"],
      description: "A unique love story told through poetry and the power of words.",
      funding_goal: 400000,
      funding_current: 290000,
    }
  ];
  
  res.json(films);
});

export default router;