# **Personal Portfolio - React & Tailwind CSS**

Welcome to the repository for my personal portfolio website! This project is a modern, fully responsive single-page application (SPA) built from the ground up to showcase my journey, skills, and projects as a software developer. It serves as a central hub for anyone interested in my work and professional background.

*You can see this website by clicking [here](https://www.alicelik.dev)*

![Home Page](https://i.hizliresim.com/p9expng.png)

## **✨ Features**

This portfolio is packed with modern features designed to provide a seamless and engaging user experience.

* **🎨 Modern & Responsive Design**: Built with a mobile-first approach using **Tailwind CSS**, the entire website is fully responsive and provides an optimal viewing experience on all devices.
* **🚀 Dynamic Project Pages**: The portfolio dynamically fetches public repositories from the **GitHub API**. Clicking on a project leads to a dedicated detail page.
* **📄 High-Fidelity README Rendering**: Project detail pages render the `README.md` file by fetching the HTML directly from GitHub's `/markdown` API endpoint. This content is then styled with a custom CSS file to perfectly replicate GitHub's own presentation, including syntax highlighting for code blocks.
* **🔍 Advanced Project Filtering**: The main projects page includes a robust search and filtering system, allowing users to find projects by name, description, topics, or date ranges.
* **✉️ Functional Contact Form**: A fully functional contact form powered by **EmailJS** allows visitors to send messages directly from the website without needing a dedicated backend.
* **🛡️ Client-Side Spam Protection**: The contact form includes a cooldown timer after a successful submission to prevent spam and accidental duplicate messages, improving user experience.
* **☀️ Dark/Light Mode Toggle**: A theme toggle allows users to switch between light and dark modes. Built with **React Context API**, this feature respects the user's system preference on their first visit and persists their choice in `localStorage`.
* **🎬 Smooth Animations & Transitions**: The UI is brought to life with meaningful animations powered by **Framer Motion**, including page transitions and scroll-triggered section reveals.
* **📈 Site Analytics**: Integrated with **Google Analytics (gtag.js)** using a custom React hook to track page views and user interactions across the single-page application.
* **⚡️ Blazing Fast Performance**: Built with **Vite**, the portfolio benefits from an incredibly fast development server and an optimized production build.
* **⚙️ API Caching Strategy**: To optimize performance and avoid hitting GitHub API rate limits, API responses are cached in the browser's `sessionStorage` for 30 minutes.

## **🛠️ Technology Stack**

This project was built using a curated selection of modern web development technologies to ensure performance, scalability, and a great developer experience.

| Category             | Technology                                                                                                  |
| :------------------- | :---------------------------------------------------------------------------------------------------------- |
| **Core Framework** | **[React](https://react.dev/)** (v19) - A powerful JavaScript library for building user interfaces.         |
| **Build Tool** | **[Vite](https://vitejs.dev/)** - A next-generation frontend tooling for a faster development experience.     |
| **Styling** | **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapid UI development.      |
| **Routing** | **[React Router DOM](https://reactrouter.com/)** - The standard library for routing in React applications.    |
| **Animations** | **[Framer Motion](https://www.framer.com/motion/)** - A production-ready motion library for React.          |
| **API Communication**| **[Axios](https://axios-http.com/)** - A promise-based HTTP client for making requests to the GitHub API. |
| **Services & APIs** | **[EmailJS](https://www.emailjs.com/)**, **[Google Analytics](https://analytics.google.com/)**, **[GitHub API](https://docs.github.com/en/rest)** |
| **State Management** | **[React Context API](https://react.dev/learn/passing-data-deeply-with-context)** - Used for managing the global theme state. |
| **Linting** | **[ESLint](https://eslint.org/)** - For ensuring code quality and consistency.                             |
| **Deployment** | **[Vercel](https://vercel.com/)** - A cloud platform for static sites and Serverless Functions.             |

## **📂 Project Structure**

The project follows a logical and organized folder structure to keep the codebase clean and maintainable.
```shell
/
├── public/
├── src/
│   ├── assets/         # Static assets, images, and custom CSS files (e.g., github-markdown-styles.css)
│   ├── components/     # Reusable React components (Header, Footer, ProjectCard, etc.)
│   ├── context/        # React Context providers (e.g., ThemeContext)
│   ├── pages/          # Page-level components (Home, Projects, ProjectDetail, etc.)
│   ├── utils/          # Utility functions (e.g., GithubUtils.jsx)
│   ├── App.jsx         # Main application component with routing logic
│   ├── index.css       # Global CSS and Tailwind directives
│   └── main.jsx        # Application entry point
├── .env                # Environment variables
├── package.json
├── README.md
├── vercel.json         # Vercel deployment configuration for SPA routing
└── vite.config.js
```

## **🚀 Getting Started**

To get a local copy up and running, follow these simple steps.

### **Prerequisites**

Make sure you have Node.js (version 18 or higher) and npm installed on your machine.

### **Installation**

1.  **Clone the repository**
    ```shell
    git clone https://github.com/pordarman/personal-portfolio.git
    ```
2.  **Navigate to the project directory**
    ```shell
    cd personal-portfolio
    ```
3.  **Install NPM packages**
    ```shell
    npm install
    ```

### **Environment Variables**

This project uses several external services that require API keys.

1.  Create a `.env` file in the root of the project.
2.  Add your secret keys and IDs to the `.env` file as shown below:

    ```shell
    # For fetching your projects from GitHub without hitting rate limits
    # Needs `public_repo` scope.
    VITE_GITHUB_TOKEN="your_github_personal_access_token"

    # For the functional contact form via EmailJS
    VITE_EMAILJS_SERVICE_ID="your_emailjs_service_id"
    VITE_EMAILJS_TEMPLATE_ID="your_emailjs_template_id"
    VITE_EMAILJS_PUBLIC_KEY="your_emailjs_public_key"
    ```

### **Running the Application**

Once the dependencies are installed and the environment variables are set, you can run the development server:
```shell
npm run dev
```

This will start the Vite development server, and you can view the application at `http://localhost:5173`.

## **🌐 Deployment**

This project is deployed on **Vercel**. The deployment process is automated via GitHub integration, meaning any push to the main branch triggers a new build and deployment.

For the client-side routing to work correctly on Vercel, a `vercel.json` file is included with a rewrite rule. This rule ensures that all requests are redirected to `index.html`, allowing React Router to handle the routing.

## **📬 Contact**

Ali İhsan Çelik - [LinkedIn](https://linkedin.com/in/ali-ihsan-celik-thk/) - ali.taha.celik@gmail.com

Project Link: [https://github.com/pordarman/personal-portfolio](https://github.com/pordarman/personal-portfolio)

Web site: [https://alicelik.dev](https://alicelik.dev)