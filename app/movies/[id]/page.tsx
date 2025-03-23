import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { fetchMovieDetails, fetchMovieCredits } from "@/lib/api"
import FavoriteButton from "@/components/favorite-button"
import MovieCast from "@/components/movie-cast"
import { formatDate, formatRuntime, formatMoney } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { Star, Clock, Calendar, DollarSign, TrendingUp, Award, ExternalLink } from "lucide-react"
import ReviewButton from "@/components/ReviewButton";


export async function generateMetadata({ params }: { params: { id: string } }) {
  const movie = await fetchMovieDetails(params.id)

  if (!movie) {
    return {
      title: "Movie Not Found",
    }
  }
  

  return {
    title: `${movie.title} (${movie.release_date?.split("-")[0] || "N/A"}) - Movie Database`,
    description: movie.overview,
  }
}

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await fetchMovieDetails(params.id)
  
  
  if (!movie) {
    notFound()
  }

  const credits = await fetchMovieCredits(params.id)
  const directors = credits?.crew?.filter(person => person.job === "Director") || []
  const writers = credits?.crew?.filter(person => person.department === "Writing") || []
  
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero section with backdrop */}
      <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
        {movie.backdrop_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">No backdrop available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

        {/* Movie title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
            {movie.title}
          </h1>
          {movie.tagline && (
            <p className="mt-2 text-lg md:text-xl italic text-white/80 drop-shadow-md">
              {movie.tagline}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - Poster and quick info */}
        <div className="md:col-span-1">
          <div className="sticky top-8">
            {/* Movie poster */}
            <div className="rounded-lg overflow-hidden shadow-xl mb-6">
              {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={500}
                  height={750}
                  className="w-full h-auto"
                />
              ) : (
                <div className="w-full aspect-[2/3] bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">No poster</span>
                </div>
              )}
            </div>

            {/* Favorite button */}
            <div className="mb-6">
              <FavoriteButton movie={movie} />
            </div>
            

            

            {/* Quick info */}
            <div className="bg-card rounded-lg shadow-md p-4">
              <h3 className="font-semibold text-lg mb-3">Details</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Release Date</p>
                    <p className="text-sm text-muted-foreground">{formatDate(movie.release_date)}</p>
                  </div>
                </div>

                {movie.runtime > 0 && (
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Runtime</p>
                      <p className="text-sm text-muted-foreground">{formatRuntime(movie.runtime)}</p>
                    </div>
                  </div>
                )}

                {movie.budget > 0 && (
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Budget</p>
                      <p className="text-sm text-muted-foreground">{formatMoney(movie.budget)}</p>
                    </div>
                  </div>
                )}

                {movie.revenue > 0 && (
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Revenue</p>
                      <p className="text-sm text-muted-foreground">{formatMoney(movie.revenue)}</p>
                    </div>
                  </div>
                )}

                {movie.status && (
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Status</p>
                      <p className="text-sm text-muted-foreground">{movie.status}</p>
                    </div>
                  </div>
                )}

                {movie.imdb_id && (
                  <div className="flex items-start gap-3">
                    <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">External Links</p>
                      <a
                        href={`https://www.imdb.com/title/${movie.imdb_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        View on IMDb
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Movie details */}
        <div className="md:col-span-2">
          {/* Year, genres, and rating */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xl text-muted-foreground">
              {movie.release_date?.split("-")[0] || "N/A"}
            </span>

            <Separator orientation="vertical" className="h-6" />

            <div className="flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <Link
                  key={genre.id}
                  href={`/?genre=${genre.id}`}
                  className="px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm transition-colors"
                >
                  {genre.name}
                </Link>
              ))}
            </div>
            

            <Separator orientation="vertical" className="h-6" />

            {movie.vote_average > 0 && (
              <div className="flex items-center gap-1.5">
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold">{movie.vote_average.toFixed(1)}</span>
                <span className="text-muted-foreground text-sm">/10</span>
                {movie.vote_count > 0 && (
                  <span className="text-muted-foreground text-sm">({movie.vote_count.toLocaleString()} votes)</span>
                )}
              </div>
            )}
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{movie.overview || "No overview available."}</p>
          </div>

          {/* Directors */}
          {directors.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                {directors.length === 1 ? "Director" : "Directors"}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {directors.map((director) => (
                  <span key={`${director.id}-${director.job}`} className="text-muted-foreground">
                    {director.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Writers */}
          {writers.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Writers</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {writers.map((writer) => (
                  <span key={`${writer.id}-${writer.job}`} className="text-muted-foreground">
                    {writer.name} {writer.job !== "Screenplay" ? `(${writer.job})` : ""}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Separator className="my-8" />

          {/* Cast section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Top Cast</h2>
            <MovieCast cast={credits?.cast || []} />
          </div>

          {/* Production companies */}
          {movie.production_companies && movie.production_companies.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Production</h2>
              <div className="flex flex-wrap gap-6">
                {movie.production_companies.map((company) => (
                  <div key={company.id} className="flex flex-col items-center">
                    {company.logo_path ? (
                      <div className="h-16 w-32 relative mb-2">
                        <Image
                          src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                          alt={company.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="h-16 w-32 bg-muted flex items-center justify-center mb-2 rounded">
                        <span className="text-xs text-center text-muted-foreground px-2">{company.name}</span>
                      </div>
                    )}
                    <span className="text-sm text-muted-foreground">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="mt-6">
  <ReviewButton movieTitle={movie.title} />
</div>
        </div>
      </div>
    </main>
  )
}

