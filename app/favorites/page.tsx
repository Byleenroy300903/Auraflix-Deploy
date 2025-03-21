"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import type { Movie } from "@/lib/types"
import MovieCard from "@/components/movie-card"
import { Button } from "@/components/ui/button"
import { Heart, Star, Trash2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Movie[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [view, setView] = useState<"grid" | "list">("grid")

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavorites(storedFavorites)
    setIsLoaded(true)
  }, [])

  const removeFromFavorites = (movieId: number) => {
    const updatedFavorites = favorites.filter(movie => movie.id !== movieId)
    setFavorites(updatedFavorites)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  }

  if (!isLoaded) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Watchlist</h1>
        <div className="text-center py-20">Loading watchlist...</div>
      </div>
    )
  }

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Watchlist</h1>
        <div className="text-center py-20">
          <Heart className="h-16 w-16 mx-auto text-primary/50 mb-4" />
          <h2 className="text-xl font-medium mb-2">Your watchlist is empty</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Add movies and shows to your watchlist to keep track of what you want to watch.
          </p>
          <Button asChild>
            <Link href="/">Browse Popular Movies</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold">Your Watchlist</h1>

        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            {favorites.length} {favorites.length === 1 ? 'title' : 'titles'}
          </div>

          <Separator orientation="vertical" className="h-6" />

          <div className="flex items-center gap-2">
            <Button
              variant={view === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setView("grid")}
            >
              Grid View
            </Button>
            <Button
              variant={view === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setView("list")}
            >
              List View
            </Button>
          </div>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {favorites.map((movie) => (
            <div key={movie.id} className="flex gap-4 bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-4">
              <div className="flex-shrink-0 w-20 h-30 relative">
                {movie.poster_path ? (
                  <Link href={`/movies/${movie.id}`}>
                    <Image
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                      alt={movie.title}
                      width={92}
                      height={138}
                      className="rounded-md object-cover"
                    />
                  </Link>
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center rounded-md">
                    <span className="text-muted-foreground text-xs">{movie.title}</span>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <Link href={`/movies/${movie.id}`} className="hover:text-primary">
                      <h3 className="font-semibold text-lg">{movie.title}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      {movie.release_date?.split("-")[0] || "N/A"}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-medium">{movie.vote_average.toFixed(1)}</span>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromFavorites(movie.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove from watchlist</span>
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {movie.overview}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

