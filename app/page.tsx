import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import MovieGrid from "@/components/movie-grid"
import SearchBar from "@/components/search-bar"
import GenreFilter from "@/components/genre-filter"
import { fetchGenres } from "@/lib/api"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Film, Star } from "lucide-react"
import type { Genre } from "@/lib/types"
import { Button } from "@/components/ui/button"

// Import the URL constant from the API file
import { MOVIE_POPULAR_URL } from "@/lib/api"

export default async function HomePage({
  searchParams,
}: {
  searchParams: { query?: string; genre?: string }
}) {
  let genres: Genre[] = []
  let error = null

  try {
    genres = await fetchGenres()
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load genres"
    console.error("Error in HomePage:", error)
  }

  // In Next.js 13+, searchParams is already available and doesn't need to be awaited
  const query = searchParams.query || "";
  const genre = searchParams.genre || "";
  const selectedGenre = genre;

  return (
    <main>
      {/* Hero section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/hero-background.jpg"
          alt="Movie background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <Film className="h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Movie Database Explorer
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Discover and explore your favorite movies. Search by title, filter by genre, and save your favorites.
          </p>

          <div className="w-full max-w-2xl">
            <SearchBar initialQuery={query} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was a problem loading movie data. Please check your API configuration.
            </AlertDescription>
          </Alert>
        )}

        <Alert className="mb-6 bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-900">
          <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <AlertTitle className="text-blue-800 dark:text-blue-300">Demo Mode</AlertTitle>
          <AlertDescription className="text-blue-700 dark:text-blue-400">
            You're viewing mock movie data for demonstration purposes.
            The application is using the URL you provided: {MOVIE_POPULAR_URL}
          </AlertDescription>
        </Alert>

        {/* Genre filter bar */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            <Button
              variant={!selectedGenre ? "default" : "outline"}
              size="sm"
              asChild
            >
              <Link href="/">All Genres</Link>
            </Button>

            {genres.map((genre) => (
              <Button
                key={genre.id}
                variant={selectedGenre === genre.id.toString() ? "default" : "outline"}
                size="sm"
                asChild
              >
                <Link href={`/?genre=${genre.id}`}>{genre.name}</Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Section title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            {query
              ? `Search Results for "${query}"`
              : selectedGenre
                ? `${genres.find(g => g.id.toString() === selectedGenre)?.name || ''} Movies`
                : 'Popular Movies'}
          </h2>

          {/* Mobile filter button */}
          <div className="md:hidden">
            <GenreFilter genres={genres} selectedGenre={selectedGenre} />
          </div>
        </div>

        <Suspense fallback={<div className="text-center py-20">Loading movies...</div>}>
          <MovieGrid query={query} genreId={selectedGenre} />
        </Suspense>
      </div>
    </main>
  )
}
