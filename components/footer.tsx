import Link from "next/link"
import { Github, Film } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <Film className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl text-white ml-2">Rating Application</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-300 font-medium mb-3">Movies</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary text-sm">Popular</Link></li>
              <li><Link href="/?genre=28" className="text-gray-400 hover:text-primary text-sm">Action</Link></li>
              <li><Link href="/?genre=35" className="text-gray-400 hover:text-primary text-sm">Comedy</Link></li>
              <li><Link href="/?genre=18" className="text-gray-400 hover:text-primary text-sm">Drama</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-300 font-medium mb-3">Account</h3>
            <ul className="space-y-2">
              <li><Link href="/favorites" className="text-gray-400 hover:text-primary text-sm">Watchlist</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary text-sm">Sign In</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary text-sm">Register</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-300 font-medium mb-3">Community</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary text-sm">Guidelines</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary text-sm">Discussions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary text-sm">Leaderboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-300 font-medium mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-primary text-sm">Terms of Use</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            <p>© {new Date().getFullYear()} This is a Rating application used for reducing spam ratings</p>
            <p className="mt-1">
              Powered by{" "}
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                TheMovieDB API
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/yourusername/movie-database"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

