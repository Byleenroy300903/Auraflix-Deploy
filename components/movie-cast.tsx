import Image from "next/image"
import type { Cast } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"

export default function MovieCast({ cast }: { cast: Cast[] }) {
  // Limit to top 8 cast members for the main display
  const topCast = cast.slice(0, 8)

  if (topCast.length === 0) {
    return <p className="text-muted-foreground">No cast information available.</p>
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {topCast.map((person) => (
          <Card key={person.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-[2/3] relative">
              {person.profile_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">{person.name}</span>
                </div>
              )}
            </div>
            <CardContent className="p-3">
              <h3 className="font-semibold line-clamp-1">{person.name}</h3>
              {person.character && (
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {person.character}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show additional cast in a more compact list if there are more than 8 */}
      {cast.length > 8 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Additional Cast</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
            {cast.slice(8).map((person) => (
              <div key={person.id} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
                  {person.profile_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w45${person.profile_path}`}
                      alt={person.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-muted-foreground text-xs">{person.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm line-clamp-1">{person.name}</p>
                  {person.character && (
                    <p className="text-xs text-muted-foreground line-clamp-1">{person.character}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

