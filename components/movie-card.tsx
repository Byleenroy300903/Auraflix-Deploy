"use client"

import Image from "next/image"
import Link from "next/link"
import type { Movie } from "@/lib/types"
import { useState } from "react"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function MovieCard({ movie }: { movie: Movie }) {
  const [imageError, setImageError] = useState(false)

  const releaseYear = movie.release_date?.split("-")[0] || "N/A"

  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
      <Link href={`/movies/${movie.id}`} className="block h-full">
        <div className="aspect-[2/3] relative overflow-hidden">
          {movie.poster_path && !imageError ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center p-4 text-center">
              <span className="text-muted-foreground">{movie.title}</span>
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Rating badge */}
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-sm font-medium px-2 py-1 rounded-md flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
            <span className="text-white">{movie.vote_average.toFixed(1)}</span>
          </div>
        </div>

        <CardContent className="p-3">
          <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">
            {movie.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{releaseYear}</p>
        </CardContent>
      </Link>
    </Card>
  )
}

