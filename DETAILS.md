
## 🚀 Deployment

This portfolio can be deployed to any static hosting platform:

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on Vercel
3. Vercel auto-detects Vite config and deploys

### Netlify
1. Push code to GitHub
2. Connect repo on Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages
1. Add `"homepage": "https://username.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run: `npm run deploy`

### Other Platforms
Simply build the project (`npm run build`) and deploy the contents of the `dist/` folder.

## 🔧 Development Tools

### ESLint
Code quality is maintained with ESLint:
- `npm run lint` - Check for issues
- `npm run lint:fix` - Automatically fix fixable issues

### Type Checking
JavaScript type checking with JSDoc:
- `npm run typecheck` - Run TypeScript type checking


## 🎨 Customization

### Personal Information

Update your personal information in the respective components:

- **About Me:** Edit `src/components/About.jsx` or relevant section
- **Experience:** Update `src/components/Experience.jsx`
- **Projects:** Modify `src/components/Projects.jsx` or individual project data
- **Skills:** Adjust `src/components/Skills.jsx`
- **Contact:** Modify form fields in `src/components/ContactForm.jsx`

### Styling

- **Colors:** Modify `tailwind.config.js` to change the color scheme
- **Fonts:** Update font imports in `index.css` or `tailwind.config.js`
- **Theme:** Dark/light mode is handled automatically via `next-themes`

### Images and Media

Place your images in:
- `images/public` for content images