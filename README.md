# IMDb Clone - Movie Database Explorer

![IMDb Clone Banner](public/hero-background.jpg)

A modern, responsive IMDb-inspired movie database application built with Next.js, TypeScript, and Tailwind CSS. This application allows users to browse popular movies, search for specific titles, filter by genre, view detailed movie information, and save favorites to a watchlist.

## 🎬 Features

- **Movie Discovery**: Browse popular movies with an IMDb-style interface
- **Search Functionality**: Find movies by title
- **Genre Filtering**: Filter movies by genre
- **Detailed Movie Pages**: View comprehensive information about each movie including:
  - Cast and crew
  - Ratings
  - Release date, runtime, budget, and revenue
  - Production companies
  - Similar movies
- **Watchlist**: Save favorite movies to a personal watchlist
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Dark Mode**: IMDb-inspired dark theme for comfortable viewing
- **Accessibility**: Built with accessibility in mind

## 🛠️ Technology Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components inspired by [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Data Source**: [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)
- **State Management**: React Hooks and Context API
- **Deployment**: Ready for deployment on Vercel or similar platforms

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/imdb-clone.git
cd imdb-clone
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory and add your TMDb API key:

```
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
NEXT_PUBLIC_TMDB_API_URL=https://api.themoviedb.org/3
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── api/                # API routes
│   ├── favorites/          # Watchlist page
│   ├── movies/             # Movie details pages
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # UI components
│   ├── header.tsx          # Header component
│   ├── footer.tsx          # Footer component
│   ├── movie-card.tsx      # Movie card component
│   └── ...                 # Other components
├── lib/                    # Utility functions and types
│   ├── api.ts              # API functions
│   ├── types.ts            # TypeScript types
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
└── ...                     # Config files
```

## 🔍 Features in Detail

### Home Page
- Hero section with search functionality
- Genre filtering
- Responsive movie grid
- Pagination for browsing more movies

### Movie Details Page
- Hero section with backdrop image
- Movie information (title, release date, runtime, etc.)
- Cast and crew information
- Production companies
- External links (IMDb)

### Watchlist
- Grid and list view options
- Remove movies from watchlist
- Persistent storage using localStorage

## 🎨 Customization

The application uses Tailwind CSS for styling, making it easy to customize:

- Edit `globals.css` to change the color scheme
- Modify the components in the `components` directory to change the UI
- Update the theme in `app/layout.tsx` to change the default theme

## 📱 Responsive Design

The application is fully responsive and works on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## 🌙 Dark Mode

The application comes with a beautiful dark mode inspired by IMDb's dark theme. Users can toggle between light and dark mode using the theme switcher in the header.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the API
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for UI component inspiration
- [Lucide Icons](https://lucide.dev/) for the beautiful icons
- [IMDb](https://www.imdb.com/) for design inspiration

---

Built with ❤️ by [Your Name]

*Note: This is a demo project and is not affiliated with IMDb or Amazon.*# IMDb Clone - Movie Database Explorer

![IMDb Clone Banner](public/hero-background.jpg)

A modern, responsive IMDb-inspired movie database application built with Next.js, TypeScript, and Tailwind CSS. This application allows users to browse popular movies, search for specific titles, filter by genre, view detailed movie information, and save favorites to a watchlist.

## 🎬 Features

- **Movie Discovery**: Browse popular movies with an IMDb-style interface
- **Search Functionality**: Find movies by title
- **Genre Filtering**: Filter movies by genre
- **Detailed Movie Pages**: View comprehensive information about each movie including:
  - Cast and crew
  - Ratings
  - Release date, runtime, budget, and revenue
  - Production companies
  - Similar movies
- **Watchlist**: Save favorite movies to a personal watchlist
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Dark Mode**: IMDb-inspired dark theme for comfortable viewing
- **Accessibility**: Built with accessibility in mind

## 🛠️ Technology Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components inspired by [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Data Source**: [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)
- **State Management**: React Hooks and Context API
- **Deployment**: Ready for deployment on Vercel or similar platforms

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/imdb-clone.git
cd imdb-clone
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory and add your TMDb API key:

```
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
NEXT_PUBLIC_TMDB_API_URL=https://api.themoviedb.org/3
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── api/                # API routes
│   ├── favorites/          # Watchlist page
│   ├── movies/             # Movie details pages
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # UI components
│   ├── header.tsx          # Header component
│   ├── footer.tsx          # Footer component
│   ├── movie-card.tsx      # Movie card component
│   └── ...                 # Other components
├── lib/                    # Utility functions and types
│   ├── api.ts              # API functions
│   ├── types.ts            # TypeScript types
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
└── ...                     # Config files
```

## 🔍 Features in Detail

### Home Page
- Hero section with search functionality
- Genre filtering
- Responsive movie grid
- Pagination for browsing more movies

### Movie Details Page
- Hero section with backdrop image
- Movie information (title, release date, runtime, etc.)
- Cast and crew information
- Production companies
- External links (IMDb)

### Watchlist
- Grid and list view options
- Remove movies from watchlist
- Persistent storage using localStorage

## 🎨 Customization

The application uses Tailwind CSS for styling, making it easy to customize:

- Edit `globals.css` to change the color scheme
- Modify the components in the `components` directory to change the UI
- Update the theme in `app/layout.tsx` to change the default theme

## 📱 Responsive Design

The application is fully responsive and works on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## 🌙 Dark Mode

The application comes with a beautiful dark mode inspired by IMDb's dark theme. Users can toggle between light and dark mode using the theme switcher in the header.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the API
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for UI component inspiration
- [Lucide Icons](https://lucide.dev/) for the beautiful icons
- [IMDb](https://www.imdb.com/) for design inspiration

---

Built with ❤️ by [Your Name]

*Note: This is a demo project and is not affiliated with IMDb or Amazon.*# Movie Database Explorer

A modern IMDb-like interface for browsing movies built with Next.js and TheMovieDB API.

## Important API Configuration Note

This application uses TheMovieDB API v3, which requires an API access token. You need to:

1. Register at [TheMovieDB](https://www.themoviedb.org/signup) and get an API token
2. Set the token as an environment variable named `TMDB_API_KEY`

**Note:** TheMovieDB API uses Bearer token authentication. You need to use an API Read Access Token (v3 auth), not the older API key. The token should be added to the Authorization header as shown in their documentation.

## Features

- Browse popular movies in a responsive grid layout
- Filter movies by genre
- Search for movies by title
- View detailed movie information including plot, rating, release date, and cast
- Save favorite movies to localStorage
- Dark/light mode toggle

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Create a `.env.local` file with your TMDB API token:
   \`\`\`
   TMDB_API_KEY=eyJhbGciOiJIUzI1NiJ9... (your v3 auth token)
   \`\`\`
4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Get a TMDB API Token

1. Create an account on [TheMovieDB](https://www.themoviedb.org/signup)
2. Go to your account settings
3. Click on the "API" section
4. Request an API key by filling out the form
5. Once approved, you'll get a v3 auth token to use with this application

## Deployment

This application can be deployed to Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your TMDB API token as an environment variable named `TMDB_API_KEY`
4. Deploy!

## Technologies Used

- Next.js 14 with App Router
- React
- Tailwind CSS
- shadcn/ui components
- TheMovieDB API

