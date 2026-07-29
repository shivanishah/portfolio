# 🚀 Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS showcasing projects, skills, and professional experience.

## ✨ Features

- **Modern & Responsive Design** - Beautiful UI that adapts to all screen sizes
- **Interactive Animations** - Smooth animations powered by Framer Motion
- **Project Showcase** - Filterable project gallery with detailed views
- **Skills Visualization** - Interactive skill charts and progress bars
- **Contact Form** - Working contact form with validation
- **Blog Section** - Markdown-based blog with syntax highlighting
- **Performance Optimized** - Fast loading with Vite and code splitting

## 🛠️ Tech Stack

- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** React Query (for API integrations)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shivanishah/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   The application will automatically open at http://localhost:5173
   If not, click the URL shown in your terminal.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 📁 Project Structure

```
portfolio-website/
├── node_modules/         # Dependencies
├── public/               # Static assets
├── src/                  # Source code
│   ├── assets/           # Images, icons, media files
│   ├── components/       # Reusable UI components
│   │   ├── ui/           # Reusable UI primitives (Radix-based)
│   │   ├── layout/       # Layout components
│   │   └── orbital/      # 3D orbital background components
│   ├── lib/              # Utility functions and helpers
│   ├── pages/            # Page components
│   │   └── Home.jsx      # Main homepage
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global CSS styles
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # Git ignore rules
├── index.html            # HTML template
├── jsconfig.json         # JavaScript configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🛠️ Available Scripts

In the project directory, you can run:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (output to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run lint:fix` | Automatically fix ESLint issues |
| `npm run typecheck` | Type-check with TypeScript (if configured) |

## 📱 Responsive Breakpoints

The website uses Tailwind's responsive breakpoints:

- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com/)

---

⭐ **If you like this portfolio template, please consider giving it a star!** Built with ❤️ by [Shivani]

## Live 
- https://shivanishah-dev.vercel.app/