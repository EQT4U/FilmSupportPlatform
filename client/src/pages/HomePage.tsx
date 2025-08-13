import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import type { Film } from '@shared/schema';

export default function HomePage() {
  const { data: films, isLoading, error } = useQuery<Film[]>({
    queryKey: ['/api/films'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-black text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-black text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-300">Error loading films</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-black text-white">
      {/* Header */}
      <header className="py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-4">
            <img src="/logo.png" alt="Philippine Cinema Collective" className="h-16 md:h-24 w-auto object-contain" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400 mb-4">
            Philippine Cinema Collective
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Supporting authentic Filipino storytelling through independent film funding
          </p>
        </div>
      </header>

      {/* Featured Films */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
          Featured Films Seeking Funding
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {films?.map((film) => (
            <Link key={film.id} href={`/film/${film.id}`}>
              <div className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-red-800/30">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">
                    {film.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{film.description}</p>
                  <div className="text-sm text-gray-400 mb-4">
                    <div>{film.year} • {film.genre}</div>
                    <div>Starring: {film.stars.join(', ')}</div>
                  </div>
                  
                  {film.funding_goal && film.funding_current && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Funding Progress</span>
                        <span>{Math.round((film.funding_current / film.funding_goal) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-yellow-400 to-red-400 h-2 rounded-full"
                          style={{ width: `${(film.funding_current / film.funding_goal) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>₱{film.funding_current.toLocaleString()}</span>
                        <span>₱{film.funding_goal.toLocaleString()}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Contact Section */}
      <section className="bg-black/30 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8">
            Support Philippine Cinema
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Help us bring authentic Filipino stories to life. Every contribution supports
            independent filmmakers in creating meaningful cinema that represents our culture.
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}