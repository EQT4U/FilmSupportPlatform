import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'wouter';
import type { Film } from '@shared/schema';

export default function FilmPage() {
  const { id } = useParams<{ id: string }>();
  const filmId = parseInt(id || '1', 10);

  const { data: film, isLoading, error } = useQuery<Film>({
    queryKey: ['/api/films', filmId],
    queryFn: async () => {
      const response = await fetch(`/api/films/${filmId}`);
      if (!response.ok) throw new Error('Film not found');
      return response.json();
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-black text-white flex items-center justify-center">
        <div className="text-center">Loading film details...</div>
      </div>
    );
  }

  if (error || !film) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-300 mb-4">Film Not Found</h2>
          <Link href="/">
            <button className="bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold py-2 px-6 rounded-full">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const fundingPercentage = film.funding_goal && film.funding_current 
    ? (film.funding_current / film.funding_goal) * 100 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-black text-white">
      {/* Navigation */}
      <nav className="p-4">
        <Link href="/">
          <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
            ← Back to Films
          </button>
        </Link>
      </nav>

      {/* Film Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400 mb-4">
            {film.title}
          </h1>
          <div className="text-xl text-gray-300 mb-2">
            {film.year} • {film.genre}
          </div>
          <div className="text-lg text-gray-400">
            Starring: {film.stars.join(', ')}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Synopsis */}
          <section className="bg-black/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-red-800/30">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Synopsis</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {film.description}
            </p>
          </section>

          {/* Funding Progress */}
          {film.funding_goal && film.funding_current && (
            <section className="bg-black/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-red-800/30">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">Funding Progress</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">
                    ₱{film.funding_current.toLocaleString()}
                  </span>
                  <span className="text-xl font-bold text-yellow-400">
                    {Math.round(fundingPercentage)}% Funded
                  </span>
                  <span className="text-lg text-gray-400">
                    Goal: ₱{film.funding_goal.toLocaleString()}
                  </span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-red-400 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
                  ></div>
                </div>
                
                <div className="text-center">
                  <button className="bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 text-lg">
                    Support This Film
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Film Details */}
          <section className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-red-800/30">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Film Details</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-200 mb-2">Release Year</h3>
                <p className="text-gray-400">{film.year}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-200 mb-2">Genre</h3>
                <p className="text-gray-400">{film.genre}</p>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold text-gray-200 mb-2">Cast</h3>
                <p className="text-gray-400">{film.stars.join(', ')}</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}