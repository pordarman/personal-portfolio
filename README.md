# **Personal Portfolio \- React & Tailwind CSS**

Welcome to the repository for my personal portfolio website\! This project is a modern, fully responsive single-page application (SPA) built from the ground up to showcase my journey, skills, and projects as a software developer. It serves as a central hub for anyone interested in my work and professional background.

*You can see this website by clicking [here](https://www.alicelik.dev)*

![Home Page](https://i.hizliresim.com/p9expng.png)

## **✨ Features**

This portfolio is packed with modern features designed to provide a seamless and engaging user experience.

* **🎨 Modern & Responsive Design**: Built with a mobile-first approach using **Tailwind CSS**, the entire website is fully responsive and provides an optimal viewing experience on all devices, from large desktop monitors to small mobile screens.  
* **🚀 Dynamic Project Fetching**: The "Projects" page isn't static. It dynamically fetches my latest public repositories directly from the **GitHub API** using Axios. This ensures the portfolio is always up-to-date with my latest work without requiring manual updates.  
* **☀️ Dark/Light Mode Toggle**: To enhance user comfort, a theme toggle allows users to switch between a light and a dark mode. This feature is built using **React Context API** for global state management and persists the user's choice in `localStorage`. It also respects the user's system-level preference (`prefers-color-scheme`) on their first visit. 
* **🎬 Smooth Animations & Transitions**: The user interface is brought to life with subtle and meaningful animations powered by **Framer Motion**. This includes smooth page transitions, animated section reveals on scroll, and interactive feedback on buttons and links, creating a fluid and polished user experience.  
* **⚡️ Blazing Fast Performance**: Built with **Vite**, the portfolio benefits from an incredibly fast development server with Hot Module Replacement (HMR) and an optimized production build, resulting in fast load times.  
* **🔗 Client-Side Routing**: As a Single-Page Application (SPA), navigation is handled by **React Router DOM**. This means that page transitions are almost instantaneous, as the browser doesn't need to perform a full-page reload.  
* **📄 Custom 404 Page**: A custom-designed "Not Found" page provides a user-friendly experience for broken links or mistyped URLs, maintaining the site's aesthetic and guiding the user back to safety.  
* **⚙️ API Caching Strategy**: To optimize performance and avoid hitting GitHub API rate limits, API responses are cached in the browser's `sessionStorage` for 10 minutes. Subsequent visits to the projects page within this timeframe will load data instantly from the cache.  
* **🔼 "Back to Top" Button**: A convenient "Back to Top" button appears after the user scrolls down the page, improving navigation on content-heavy pages.

## **🛠️ Technology Stack**

This project was built using a curated selection of modern web development technologies to ensure performance, scalability, and a great developer experience.

| Category | Technology |
| :---- | :---- |
| **Core Framework** | **[React](https://react.dev/)** (v19) \- A powerful JavaScript library for building user interfaces. |
| **Build Tool** | **[Vite](https://vitejs.dev/)** \- A next-generation frontend tooling that provides a faster and leaner development experience. |
| **Styling** | **[Tailwind CSS](https://tailwindcss.com/)** \- A utility-first CSS framework for rapidly building custom designs. |
| **Routing** | **[React Router DOM](https://reactrouter.com/)** \- The standard library for routing in React applications. |
| **Animations** | **[Framer Motion](https://www.framer.com/motion/)** \- A production-ready motion library for React. |
| **API Communication** | **[Axios](https://axios-http.com/)** \- A promise-based HTTP client for making requests to the GitHub API. |
| **State Management** | **[React Context API](https://react.dev/learn/passing-data-deeply-with-context)** \- Used for managing the global theme state (light/dark mode). |
| **Linting** | **[ESLint](https://eslint.org/)** \- To find and fix problems in the JavaScript code, ensuring code quality and consistency. |
| **Deployment** | **[Vercel](https://vercel.com/)** \- A cloud platform for static sites and Serverless Functions that fits perfectly with the project's workflow. |

## **📂 Project Structure**

The project follows a logical and organized folder structure to keep the codebase clean and maintainable.
```shell
/  
├── public/  
├── src/  
│   ├── assets/         # Static assets like images and SVGs  
│   ├── components/     # Reusable React components (Header, Footer, ProjectCard, etc.)  
│   ├── context/        # React Context providers (e.g., ThemeContext)  
│   ├── pages/          # Page-level components (Home, About, Projects, etc.)  
│   ├── utils/          # Utility functions (e.g., fetchProjectsGithub)  
│   ├── App.jsx         # Main application component with routing logic  
│   ├── index.css       # Global CSS and Tailwind directives  
│   └── main.jsx        # Application entry point  
├── .env  
├── .eslintrc.cjs  
├── .gitignore  
├── index.html  
├── package.json  
├── README.md  
├── vercel.json         # Vercel deployment configuration for SPA routing  
└── vite.config.js
```

## **🚀 Getting Started**

To get a local copy up and running, follow these simple steps.

### **Prerequisites**

Make sure you have Node.js (version 18 or higher) and npm installed on your machine.

* [Node.js](https://nodejs.org/)  
* [npm](https://www.npmjs.com/get-npm)

### **Installation**

1. **Clone the repository**  
   ```shell
   git clone https://github.com/pordarman/personal-portfolio.git
   ```

2. **Navigate to the project directory**  
   ```shell
   cd personal-portfolio
   ```

3. **Install NPM packages**  
   ```shell
   npm install
   ```

### **Environment Variables**

To fetch data from the GitHub API, you need to create a Personal Access Token (PAT) to avoid rate-limiting issues.

1. Create a `.env` file in the root of the project.  
2. Add your GitHub PAT to the `.env` file as shown below:  
   ```shell
   GITHUB_TOKEN=your_github_personal_access_token  
   ```
   You can generate a new token from your GitHub settings: [GitHub Developer Settings](https://github.com/settings/tokens). The token only needs `public_repo` scope.
3. Add your EmailJS variable to the `.env` file as shown below:
   ```shell
   EMAILJS_SERVICE_ID=service_id
   EMAILJS_TEMPLATE_ID=template_id
   EMAILJS_PUBLIC_KEY=your_public_key
   ```
   ### **EmailJS Integration**

   This project uses [EmailJS](https://www.emailjs.com/) to enable contact form submissions directly from the frontend without a backend server. You need to set up your EmailJS account and configure the following environment variables:

   - `EMAILJS_SERVICE_ID`: Your EmailJS service ID.
   - `EMAILJS_TEMPLATE_ID`: The template ID for your email.
   - `EMAILJS_PUBLIC_KEY`: Your EmailJS public key.

   Refer to the [EmailJS documentation](https://www.emailjs.com/docs/) for detailed setup instructions.

### **Running the Application**

Once the dependencies are installed and the environment variable is set, you can run the development server:
```shell
npm run dev
```
This will start the Vite development server, and you can view the application at `http://localhost:5173`.

## **🌐 Deployment**

This project is deployed on **Vercel**. The deployment process is automated via GitHub integration, meaning any push to the main branch triggers a new build and deployment.

For the client-side routing to work correctly on Vercel, a vercel.json file is included with a rewrite rule. This rule ensures that all requests to non-existent paths are redirected to index.html, allowing React Router to handle the routing.
```json
{  
  "rewrites": [  
    {  
      "source": "/(.*)",  
      "destination": "/index.html"  
    }  
  ]  
}
```
## **📬 Contact**

Ali İhsan Çelik \- [LinkedIn](https://linkedin.com/in/ali-ihsan-celik-thk/) - ali.taha.celik@gmail.com

Project Link: [https://github.com/pordarman/personal-portfolio](https://www.google.com/search?q=https://github.com/pordarman/personal-portfolio)