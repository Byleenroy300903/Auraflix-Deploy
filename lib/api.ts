import type { Movie, Genre } from "./types"

// Using the direct API URL you provided
export const MOVIE_POPULAR_URL = "https://developer.themoviedb.org/reference/movie-popular-list"
const BASE_URL = "https://api.themoviedb.org/3"

// For demo purposes, we'll use mock data since we're using a documentation URL
// rather than an actual API token
const USE_MOCK_DATA = true

// Mock data for demonstration purposes
function getMockMovies(): Movie[] {
  return [
    {
      id: 1,
      title: "The Shawshank Redemption",
      poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
      release_date: "1994-09-23",
      vote_average: 8.7,
      overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      genre_ids: [18, 80]
    },
    {
      id: 2,
      title: "The Godfather",
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      release_date: "1972-03-14",
      vote_average: 8.7,
      overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      genre_ids: [18, 80]
    },
    {
      id: 3,
      title: "The Dark Knight",
      poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      backdrop_path: "/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
      release_date: "2008-07-16",
      vote_average: 8.5,
      overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      genre_ids: [28, 80, 18]
    },
    {
      id: 4,
      title: "Pulp Fiction",
      poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      backdrop_path: "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      release_date: "1994-09-10",
      vote_average: 8.5,
      overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      genre_ids: [53, 80]
    },
    {
      id: 5,
      title: "Forrest Gump",
      poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      backdrop_path: "/3h1JZGDhZ8nzxdgvkxha0qBqi05.jpg",
      release_date: "1994-06-23",
      vote_average: 8.5,
      overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
      genre_ids: [35, 18, 10749]
    },
    {
      id: 6,
      title: "Inception",
      poster_path: "/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      release_date: "2010-07-15",
      vote_average: 8.4,
      overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
      genre_ids: [28, 878, 12]
    },
    {
      id: 7,
      title: "Fight Club",
      poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      backdrop_path: "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
      release_date: "1999-10-15",
      vote_average: 8.4,
      overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
      genre_ids: [18, 53]
    },
    {
      id: 8,
      title: "The Matrix",
      poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      backdrop_path: "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
      release_date: "1999-03-30",
      vote_average: 8.2,
      overview: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
      genre_ids: [28, 878]
    },
    {
      id: 9,
      title: "Interstellar",
      poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      backdrop_path: "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
      release_date: "2014-11-05",
      vote_average: 8.4,
      overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      genre_ids: [12, 18, 878]
    },
    {
      id: 10,
      title: "Parasite",
      poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      backdrop_path: "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
      release_date: "2019-05-30",
      vote_average: 8.5,
      overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      genre_ids: [35, 53, 18]
    }
  ];
}

function getMockGenres(): Genre[] {
  return [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 18, name: "Drama" },
    { id: 27, name: "Horror" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 53, name: "Thriller" }
  ];
}

// Fetch popular movies with optional search query and genre filter
export async function fetchMovies(query: string, genreId: string): Promise<Movie[]> {
  try {
    // Since we're using a documentation URL instead of an actual API endpoint,
    // we'll always return mock data
    console.log("Using mock movie data for demonstration purposes")

    // Get our mock movies
    let movies = getMockMovies();

    // Apply filtering based on query and genre if provided
    if (query) {
      // Filter by query (case-insensitive search in title)
      movies = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (genreId && genreId !== "all") {
      // Filter by genre
      const genreIdNum = parseInt(genreId);
      movies = movies.filter(movie =>
        movie.genre_ids?.includes(genreIdNum)
      );
    }

    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error)
    return []
  }
}

// Fetch movie genres
export async function fetchGenres(): Promise<Genre[]> {
  try {
    // Since we're using a documentation URL instead of an actual API endpoint,
    // we'll always return mock data
    console.log("Using mock genre data for demonstration purposes")
    return getMockGenres()
  } catch (error) {
    console.error("Error fetching genres:", error)
    return []
  }
}

// Fetch detailed movie information
export async function fetchMovieDetails(movieId: string): Promise<any> {
  try {
    console.log("Using mock movie details for demonstration purposes")

    // Return a mock movie detail if the ID matches one of our mock movies
    const mockId = parseInt(movieId);
    const mockMovies = getMockMovies();
    const movie = mockMovies.find(m => m.id === mockId);

    if (movie) {
      // Movie details with additional information
      const movieDetails = {
        ...movie,
        genres: getMockGenres().filter(g => movie.genre_ids?.includes(g.id)),
        runtime: mockId === 1 ? 142 : mockId === 2 ? 175 : mockId === 3 ? 152 : 120,
        tagline: getMovieTagline(mockId),
        budget: getMovieBudget(mockId),
        revenue: getMovieRevenue(mockId),
        production_companies: getProductionCompanies(mockId),
        spoken_languages: [{ english_name: "English" }],
        status: "Released",
        imdb_id: `tt${100000 + mockId}`,
        popularity: movie.vote_average * 10,
        vote_count: mockId * 1000 + 5000
      };

      return movieDetails;
    }

    return null;
  } catch (error) {
    console.error(`Error fetching movie ${movieId} details:`, error)
    return null
  }
}

// Helper functions for movie details
function getMovieTagline(movieId: number): string {
  const taglines: Record<number, string> = {
    1: "Fear can hold you prisoner. Hope can set you free.",
    2: "An offer you can't refuse.",
    3: "Why So Serious?",
    4: "Just because you are a character doesn't mean you have character.",
    5: "Life is like a box of chocolates... you never know what you're gonna get.",
    6: "Your mind is the scene of the crime.",
    7: "Mischief. Mayhem. Soap.",
    8: "Welcome to the Real World.",
    9: "Mankind was born on Earth. It was never meant to die here.",
    10: "Act like you own the place."
  };

  return taglines[movieId] || "Every great story has a beginning.";
}

function getMovieBudget(movieId: number): number {
  const budgets: Record<number, number> = {
    1: 25000000,
    2: 6000000,
    3: 185000000,
    4: 8000000,
    5: 55000000,
    6: 160000000,
    7: 63000000,
    8: 63000000,
    9: 165000000,
    10: 11400000
  };

  return budgets[movieId] || 50000000;
}

function getMovieRevenue(movieId: number): number {
  const revenues: Record<number, number> = {
    1: 28341469,
    2: 245066411,
    3: 1005973645,
    4: 213928762,
    5: 677387716,
    6: 836836967,
    7: 101209702,
    8: 466364645,
    9: 701729206,
    10: 258773556
  };

  return revenues[movieId] || 100000000;
}

function getProductionCompanies(movieId: number): any[] {
  const companies = [
    { id: 1, name: "Warner Bros. Pictures", logo_path: "/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png" },
    { id: 2, name: "Paramount Pictures", logo_path: "/fycMZt242LVjagMByZOLUGbCvv3.png" },
    { id: 3, name: "Universal Pictures", logo_path: "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png" },
    { id: 4, name: "Columbia Pictures", logo_path: "/71BqEFAF4V3qjjMPCpLuyJFB9A.png" },
    { id: 5, name: "20th Century Fox", logo_path: "/31MIq0e4wR7mUfp0RKQSbVwyv6W.png" }
  ];

  // Return 1-3 random companies for each movie
  const numCompanies = 1 + (movieId % 3);
  const shuffled = [...companies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numCompanies);
}

// Fetch movie credits (cast and crew)
export async function fetchMovieCredits(movieId: string): Promise<any> {
  try {
    console.log("Using mock movie credits for demonstration purposes")

    // Return movie-specific credits based on the movie ID
    const mockId = parseInt(movieId);

    // Get the appropriate cast and crew for the movie
    return {
      cast: getMovieCast(mockId),
      crew: getMovieCrew(mockId)
    };
  } catch (error) {
    console.error(`Error fetching movie ${movieId} credits:`, error)
    return { cast: [], crew: [] }
  }
}

// Helper function to get movie cast
function getMovieCast(movieId: number): any[] {
  // Default cast that will be used if no specific cast is defined
  const defaultCast = [
    { id: 101, name: "John Smith", character: "Main Character", profile_path: "/fSCl0zQi5cGGOumuzXUxmDGfIGT.jpg", order: 0 },
    { id: 102, name: "Jane Doe", character: "Supporting Role", profile_path: "/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg", order: 1 },
    { id: 103, name: "Michael Johnson", character: "Villain", profile_path: "/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg", order: 2 },
    { id: 104, name: "Sarah Williams", character: "Love Interest", profile_path: "/2LvmKCeFp5RGUiejFE9C73LS4KE.jpg", order: 3 }
  ];

  // Movie-specific casts
  const casts: Record<number, any[]> = {
    1: [
      { id: 504, name: "Tim Robbins", character: "Andy Dufresne", profile_path: "/hsCu1JUzQQ4pl7uFxAVFLOs9yHh.jpg", order: 0 },
      { id: 192, name: "Morgan Freeman", character: "Ellis Boyd 'Red' Redding", profile_path: "/oIciQWrRl4OyEtKC70S3gQOEJZl.jpg", order: 1 },
      { id: 4029, name: "Bob Gunton", character: "Warden Norton", profile_path: "/zOjUtFmnOQYbhHFpwUxLY9xVqjz.jpg", order: 2 },
      { id: 5081, name: "William Sadler", character: "Heywood", profile_path: "/sBxmSxRCwf0GoiOhGLYNa0kOMUI.jpg", order: 3 }
    ],
    2: [
      { id: 3084, name: "Marlon Brando", character: "Don Vito Corleone", profile_path: "/fuTEPMsBtV1zE98ujPONbKiYDc2.jpg", order: 0 },
      { id: 1158, name: "Al Pacino", character: "Michael Corleone", profile_path: "/sLsUtxxU8YPdnEFkbeqsMAmnPD5.jpg", order: 1 },
      { id: 3085, name: "James Caan", character: "Sonny Corleone", profile_path: "/vgBLIVlNMR0Jf2Jh0VCwVCiVYkD.jpg", order: 2 },
      { id: 3087, name: "Robert Duvall", character: "Tom Hagen", profile_path: "/1aBC7NxPy10ofng7mLVDB5KdOgn.jpg", order: 3 }
    ],
    3: [
      { id: 3894, name: "Christian Bale", character: "Bruce Wayne / Batman", profile_path: "/AcfW3p5D6ov573fABLyoiVQqQlB.jpg", order: 0 },
      { id: 2888, name: "Heath Ledger", character: "Joker", profile_path: "/5Y9HnYYa9jF4NunY9lSgJGjSe8Z.jpg", order: 1 },
      { id: 323, name: "Aaron Eckhart", character: "Harvey Dent / Two-Face", profile_path: "/5EFQvRHlpP1hJAk4rUko5hHYr9o.jpg", order: 2 },
      { id: 5132, name: "Michael Caine", character: "Alfred", profile_path: "/hZruclwEPCKw3e83rnQenC9t1hq.jpg", order: 3 }
    ],
    4: [
      { id: 138, name: "John Travolta", character: "Vincent Vega", profile_path: "/ns8uZHmXAdGQZRAYzLpnQfXlEKY.jpg", order: 0 },
      { id: 139, name: "Samuel L. Jackson", character: "Jules Winnfield", profile_path: "/nCJJ3NVksYNxIzEKcAYVAiD9L5u.jpg", order: 1 },
      { id: 140, name: "Uma Thurman", character: "Mia Wallace", profile_path: "/6SuOc2R7hzVXXsGFQGBdMFWXuKr.jpg", order: 2 },
      { id: 62, name: "Bruce Willis", character: "Butch Coolidge", profile_path: "/A1KJdBGQjkXXcIg6GfjXzjYQDk2.jpg", order: 3 }
    ],
    5: [
      { id: 31, name: "Tom Hanks", character: "Forrest Gump", profile_path: "/xndWFsBlClOJFRdhziIRG0gqwQY.jpg", order: 0 },
      { id: 206, name: "Robin Wright", character: "Jenny Curran", profile_path: "/8SWAGtDKEKWz3O5xV5Q31MZXvGr.jpg", order: 1 },
      { id: 2157, name: "Gary Sinise", character: "Lieutenant Dan Taylor", profile_path: "/gPuFgANGfkPDotLu7CTlkXQJBQJ.jpg", order: 2 },
      { id: 2159, name: "Sally Field", character: "Mrs. Gump", profile_path: "/zfY5Q9XGqJAjwI5QlCCXyMQbgpQ.jpg", order: 3 }
    ]
  };

  return casts[movieId] || defaultCast;
}

// Helper function to get movie crew
function getMovieCrew(movieId: number): any[] {
  // Default crew that will be used if no specific crew is defined
  const defaultCrew = [
    { id: 201, name: "John Director", job: "Director", department: "Directing", profile_path: "/fSCl0zQi5cGGOumuzXUxmDGfIGT.jpg" },
    { id: 202, name: "Jane Writer", job: "Screenplay", department: "Writing", profile_path: "/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg" },
    { id: 203, name: "Michael Producer", job: "Producer", department: "Production", profile_path: "/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg" },
    { id: 204, name: "Sarah Composer", job: "Original Music Composer", department: "Sound", profile_path: "/2LvmKCeFp5RGUiejFE9C73LS4KE.jpg" }
  ];

  // Movie-specific crews
  const crews: Record<number, any[]> = {
    1: [
      { id: 4027, name: "Frank Darabont", job: "Director", department: "Directing", profile_path: "/CrM8ggdGmRWkeLEzQ9r8fWLCe5.jpg" },
      { id: 4027, name: "Frank Darabont", job: "Screenplay", department: "Writing", profile_path: "/CrM8ggdGmRWkeLEzQ9r8fWLCe5.jpg" },
      { id: 7705, name: "Thomas Newman", job: "Original Music Composer", department: "Sound", profile_path: "/j5FHCF9LZmvYxjgPxh5JfATD7K0.jpg" }
    ],
    2: [
      { id: 1776, name: "Francis Ford Coppola", job: "Director", department: "Directing", profile_path: "/mDLDvsx8PaZoEThkBdyaG1JxPdf.jpg" },
      { id: 1776, name: "Francis Ford Coppola", job: "Screenplay", department: "Writing", profile_path: "/mDLDvsx8PaZoEThkBdyaG1JxPdf.jpg" },
      { id: 1873, name: "Mario Puzo", job: "Screenplay", department: "Writing", profile_path: "/7XECnBUGIjSLYVntLpHqCJDtVxU.jpg" },
      { id: 1525, name: "Nino Rota", job: "Original Music Composer", department: "Sound", profile_path: "/uQJylm4MDW8urgEZxfWBXlbwmbF.jpg" }
    ],
    3: [
      { id: 525, name: "Christopher Nolan", job: "Director", department: "Directing", profile_path: "/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg" },
      { id: 525, name: "Christopher Nolan", job: "Screenplay", department: "Writing", profile_path: "/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg" },
      { id: 1223, name: "Jonathan Nolan", job: "Screenplay", department: "Writing", profile_path: "/nCP1SlWP1bRVOrJQe8ZQJC2YZm.jpg" },
      { id: 583, name: "Hans Zimmer", job: "Original Music Composer", department: "Sound", profile_path: "/tpQnDeHY15szIXvpnhlprufz4d.jpg" }
    ]
  };

  return crews[movieId] || defaultCrew;
}

