# Travels Mogul – Soulful Travel Website

A beautiful, production-ready travel website built with React, TypeScript, Vite, and Tailwind CSS. This site is designed to inspire journeys, showcase curated travel packages, and share stories from travelers. It features a modern UI, interactive sections, and AI-powered demo bots.

## Features

- **Hero Section:** Stunning rotating backgrounds, inspirational messaging, and quick access to planning your trip or sharing your story.
- **Curated Packages:** Browse featured travel packages with smooth scrolling and booking modal.
- **Explore by Soul:** Discover journeys by category (Africa, Europe, Asia, Culture, Romance, Budget).
- **About Section:** Learn about the brand's philosophy and mission.
- **Instagram Gallery:** Social proof and inspiration from real journeys.
- **Story Upload:** Travelers can share their experiences and photos.
- **AI Demo Bot:** Try out a conversational bot inspired by real AI assistants.
- **Responsive Design:** Fully responsive and dark mode ready.
- **Modern Stack:** Built with React 18, TypeScript, Vite, Tailwind CSS, and Lucide React icons.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/travels-mogul.git
   cd travels-mogul
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) to view the site.

### Build for Production

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

## Project Structure

- `src/` – Main source code
  - `components/` – Reusable UI components (Hero, FeaturedPackages, ExploreSection, etc.)
  - `pages/` – Route-based pages (Login, Profile)
- `public/` – Static assets
- `index.html` – Main HTML entry
- `tailwind.config.js` – Tailwind CSS configuration
- `vite.config.ts` – Vite configuration

## Customization

- **Add/Edit Packages:** Update the packages array in [`FeaturedPackages.tsx`](src/components/FeaturedPackages.tsx).
- **Change Branding:** Edit text, images, and colors in the respective components.
- **AI Bot Logic:** Modify demo bot logic in [`BotDemo.tsx`](src/components/sections/BotDemo.tsx).

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

**Made with ❤️ by Wallace Okeke**
