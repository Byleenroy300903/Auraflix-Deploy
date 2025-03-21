import { fetchMovies } from "@/lib/api"
import MovieCard from "./movie-card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default async function MovieGrid({
  query,
  genreId,
}: {
  query: string
  genreId: string
}) {
  try {
    const movies = await fetchMovies(query, genreId)

    if (movies.length === 0) {
      return (
        <div className="text-center py-20">
          <h2 className="text-xl font-medium mb-2">No movies found</h2>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    )
  } catch (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to load movies. Please check your API configuration.</AlertDescription>
      </Alert>
    )
  }
}

