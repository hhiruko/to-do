# To-do

A simple to-do list PWA because nothing else worked for me, and I use this one every day.

**Live**: [hhiruko.github.io/to-do](https://hhiruko.github.io/to-do)

### 🚀 Core Features
- Full CRUD functionality for managing tasks
- Offline support via caching
- Build-time manifest & icon generation (just provide one `.svg`)
- Light/Dark/System theme preference support
- `localStorage` wrapper classes: `Storage`, `CollectionStorage`
- GitHub Actions workflow for Pages deployment
- Icon system based on `lucide-preact`
- Import/Export to JSON

---

### ⚡ Tech Stack / Dependencies
- [Vite](https://vitejs.dev/)
- [Preact](https://preactjs.com/)
- [Glob](https://github.com/isaacs/node-glob)
- [Favicons](https://github.com/itgalaxy/favicons)
- [Lucide-preact](https://lucide.dev/guide/packages/lucide-preact)
- [Water.css](https://watercss.kognise.dev/)

---

### 🔧 Getting Started

1. Install dependencies:
    ```bash
    npm install
    ```
2. Start dev server:
    ```bash
    npm run dev
    ```
3. Build production-ready static site:
    ```bash
    npm run build
    ```

### 📦 Deployment

This project includes a **GitHub Actions** workflow that automatically deploys your production build to **GitHub Pages** on push.

To enable deployment:

1. Go to **Settings → Actions → General**  
    → Under **Workflow permissions**, select **"Read and write permissions"**.

2. Go to **Settings → Pages → Build and deployment**  
    → Under **Source**, choose **"Deploy from a branch"**, then select the `gh-pages` branch (after the first push creates it).


### 📝 License
MIT

