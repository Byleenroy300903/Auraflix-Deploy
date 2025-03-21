"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Movie } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"

export default function FavoriteButton({ movie }: { movie: Movie }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const { toast } = useToast()

  // Check if movie is in favorites on component mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setIsFavorite(favorites.some((fav: Movie) => fav.id === movie.id))
  }, [movie.id])

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((fav: Movie) => fav.id !== movie.id)
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
      setIsFavorite(false)

      toast({
        title: "Removed from favorites",
        description: `"${movie.title}" has been removed from your favorites.`,
      })
    } else {
      // Add to favorites
      const movieToSave = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
      }

      const updatedFavorites = [...favorites, movieToSave]
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
      setIsFavorite(true)

      toast({
        title: "Added to favorites",
        description: `"${movie.title}" has been added to your favorites.`,
      })
    }
  }

  return (
    <Button onClick={toggleFavorite} variant={isFavorite ? "default" : "outline"} className="w-full">
      <Heart className={`mr-2 h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </Button>
  )
}

