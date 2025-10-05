# No Grout Tiling Projects – Next.js App

This is a custom tiling showcase web application built with [Next.js](https://nextjs.org), featuring server-side data fetching, interactive project galleries, and a modern, responsive design.

## Features

- **Project Gallery:** Browse recent tiling projects with images, dates, and details.
- **Server-Side Data Fetching:** Project data is loaded server-side for fast, SEO-friendly pages.
- **Interactive UI:** Smooth scrolling, sticky headers, and image galleries powered by GSAP and React.
- **Custom Fonts:** Uses [Geist](https://vercel.com/font) and [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans) for a clean look.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Sanity Integration:** Project data is managed via [Sanity.io](https://www.sanity.io/).

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `app/` – Next.js App Router structure
  - `layout.tsx` – Global layout and font setup
  - `projects/` – Project gallery pages and layout
    - `page.tsx` – Server component, fetches project data
    - `ProjectsClient.tsx` – Client component for interactive gallery logic
- `components/` – Reusable UI components (Header, Footer, ProjectSection, etc.)
- `sanity/` – Sanity client and schema setup

## Customization

- **Add/Edit Projects:** Update your Sanity dataset to manage projects.
- **Styling:** Modify Tailwind CSS classes in components for custom styles.
- **Interactivity:** Enhance gallery features in `ProjectsClient.tsx` or `ProjectSection.tsx`.

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [GSAP Documentation](https://gsap.com/docs/)

---

© 2025 No Grout Tiling Projects
