"use client"

import { useRouter } from "next/navigation"
import { useTransition } from "react"
import type { Genre } from "@/lib/types"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GenreFilter({
  genres,
  selectedGenre,
}: {
  genres: Genre[]
  selectedGenre: string
}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleGenreChange = (value: string) => {
    startTransition(() => {
      const params = new URLSearchParams(window.location.search)

      if (value) {
        params.set("genre", value)
      } else {
        params.delete("genre")
      }

      router.push(`/?${params.toString()}`)
    })
  }

  return (
    <Select value={selectedGenre} onValueChange={handleGenreChange} disabled={isPending}>
      <SelectTrigger>
        <SelectValue placeholder="Filter by genre" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Genres</SelectItem>
        {genres.map((genre) => (
          <SelectItem key={genre.id} value={genre.id.toString()}>
            {genre.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

