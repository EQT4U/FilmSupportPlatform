import type { Film, InsertFilm, Contact, InsertContact } from '@shared/schema.js';

export interface IStorage {
  // Film operations
  getFilms(): Promise<Film[]>;
  getFilm(id: number): Promise<Film | null>;
  createFilm(film: InsertFilm): Promise<Film>;
  updateFilm(id: number, film: Partial<InsertFilm>): Promise<Film | null>;
  deleteFilm(id: number): Promise<boolean>;

  // Contact operations
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

// In-memory storage implementation
class MemoryStorage implements IStorage {
  private films: Film[] = [
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

  private contacts: Contact[] = [];
  private nextFilmId = 4;
  private nextContactId = 1;

  async getFilms(): Promise<Film[]> {
    return [...this.films];
  }

  async getFilm(id: number): Promise<Film | null> {
    return this.films.find(film => film.id === id) || null;
  }

  async createFilm(film: InsertFilm): Promise<Film> {
    const newFilm: Film = {
      ...film,
      id: this.nextFilmId++,
    };
    this.films.push(newFilm);
    return newFilm;
  }

  async updateFilm(id: number, filmUpdate: Partial<InsertFilm>): Promise<Film | null> {
    const index = this.films.findIndex(film => film.id === id);
    if (index === -1) return null;

    this.films[index] = { ...this.films[index], ...filmUpdate };
    return this.films[index];
  }

  async deleteFilm(id: number): Promise<boolean> {
    const index = this.films.findIndex(film => film.id === id);
    if (index === -1) return false;

    this.films.splice(index, 1);
    return true;
  }

  async getContacts(): Promise<Contact[]> {
    return [...this.contacts];
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const newContact: Contact = {
      ...contact,
      id: this.nextContactId++,
      created_at: new Date(),
    };
    this.contacts.push(newContact);
    return newContact;
  }
}

export const storage = new MemoryStorage();