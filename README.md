# Portfolio Website

A modern, interactive portfolio website built with React, Vite, and Tailwind CSS featuring smooth animations and a functional contact form.

## ✨ Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive UI**: Built with Radix UI primitives for accessible components
- **Functional Contact Form**: Integrated with Resend for email sending
- **Responsive Design**: Works on all device sizes
- **Dark/Light Theme**: Using next-themes for system preference detection
- **Developer Experience**: ESLint configured and fast Vite dev server

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible primitives
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **React Router** - Client-side routing
- **Lucide Icons** - Beautiful icon set
- **Sonner** - Toast notifications

### Backend/Services
- **Resend** - Email sending service (via Vercel serverless function)

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm, yarn, or pnpm
- [Resend API key](https://resend.com) (for contact form functionality)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env   # Create if .env.example doesn't exist
   # OR copy from the existing .env file if present
   ```

   Edit `.env` and add your Resend API key:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   FROM_EMAIL=onboarding@resend.dev
   TO_EMAIL=your-email@example.com
   ```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
# or
yarn build
# or
pnpm build
```

Preview the production build:
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
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   │   ├── orbital/      # Orbital-themed sections (hero, skills, experience, etc.)
│   │   └── ui/           # Reusable UI components (buttons, inputs, etc.)
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── api/                  # Vercel serverless functions
│   └── contact.js        # Contact form handler (uses Resend)
├── public/               # Static assets
├── .env                  # Environment variables
├── .env.local            # Vercel environment variables
├── eslint.config.js      # ESLint configuration
├── .gitignore            # Git ignore rules
├── index.html            # HTML template
├── jsconfig.json         # JavaScript/TypeScript configuration
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

## 📱 Contact Form

The contact form uses Resend to send emails. To make it work:

1. Get a free API key from [Resend.com](https://resend.com)
2. Add it to your `.env` file:
   ```env
   RESEND_API_KEY=re_your_actual_key_here
   FROM_EMAIL=onboarding@resend.dev
   TO_EMAIL=your-email@example.com
   ```

When the form is submitted:
- Frontend sends data to `/api/contact` endpoint
- In development, Vite proxies this request (configured in vite.config.js)
- In production, Vercel serverless function handles the request
- The function uses Resend to send an email
- Success/error responses are handled gracefully with UI feedback

## 🛠️ Available Scripts

In `package.json`:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run typecheck` - Type-check with TypeScript

## 🔧 Configuration

### Vite Configuration (`vite.config.js`)
- Proxy configured to forward `/api` requests to `http://localhost:5001` (useful if using a separate backend server)
- React plugin for Fast Refresh
- Path alias `@` pointing to `/src`

### Tailwind Configuration (`tailwind.config.js`)
- Custom color scheme
- Animation configurations
- Content paths for CSS purging

## 🌐 Deployment

This project is configured for easy deployment to Vercel:

1. Push to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Add environment variables:
   - `RESEND_API_KEY`
   - `FROM_EMAIL`
   - `TO_EMAIL`
4. Vercel will automatically detect and use the `api/contact.js` serverless function

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `RESEND_API_KEY` | Your Resend API key | `re_{xxxxx}` |
| `FROM_EMAIL` | Sender email address | `{xxxx}@resend.dev` |
| `TO_EMAIL` | Recipient email address | `your-email@example.com` |

> **Note**: Never commit your `.env` file with real API keys to public repositories. The `.env` file should be in your `.gitignore`.

## 🎯 Features in Detail

### Home/Landing
- Animated hero section with particle effects
- Smooth scroll navigation
- Responsive layout

### Skills/Constellation
- Interactive skills visualization
- Hover effects and animations

### Experience
- Timeline-style experience display
- Detailed project descriptions

### Projects
- Project showcase with filtering capabilities
- Live demo and source code links

### Contact
- Functional form with validation
- Loading and success states
- Error handling and user feedback
- Real email sending via Resend when API key is valid

## 📄 License

This project is [MIT](LICENSE) licensed.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
- [Resend](https://resend.com)
- [Lucide Icons](https://lucide.dev/)