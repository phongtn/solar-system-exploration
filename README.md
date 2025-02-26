# Solar System Visualization

This project is a web-based interactive 3D visualization of our solar system. Explore the planets, learn about their properties, and experience the vastness of space from your browser!

## Features

*   **3D Solar System Model:**  A dynamic, interactive 3D model of the solar system built with Three.js.
*   **Realistic Planet Representations:** Each planet is represented with detailed textures and models.
*   **Interactive Exploration:** Users can pan, zoom, and rotate the view to explore the solar system from different perspectives.
*   **Backend API:** A Node.js/Express.js backend provides data and potentially handles user interactions (e.g., user accounts, saved views).
* **Authentication:** Users can create an account to save their preferences and interact with the app.
*   **Responsive Design:** The application adapts to various screen sizes, providing a good experience on both desktop and mobile devices.
* **User-Friendly Interface:** The use of `shadcn/ui` makes for an attractive and easy-to-use interface.

## Technologies Used

**Frontend:**

*   **React:** A JavaScript library for building user interfaces.
*   **Three.js:** A JavaScript library for creating and displaying 3D graphics in the browser.
*   **@react-three/fiber:** A React renderer for Three.js.
*   **@react-three/drei:** A collection of useful helpers and abstractions for Three.js and React.
*   **TypeScript:** A typed superset of JavaScript that enhances code quality and maintainability.
*   **Vite:** A fast build tool for modern web development.
*   **Tailwind CSS:** A utility-first CSS framework for styling.
*   **Radix UI:** A headless UI component library.
* **Shadcn/ui:** A set of ui components built on top of radix ui.
*   **React-Query:** Library for fetching, caching, synchronizing and updating server state.
* **Wouter:** A minimal routing library
* **Lucide-react:** Used for icons.

**Backend:**

*   **Node.js:** A JavaScript runtime environment for server-side development.
*   **Express.js:** A minimal and flexible Node.js web application framework.
*   **TypeScript:** Used for type safety on the server-side.
*   **Drizzle ORM:** A lightweight TypeScript ORM for database interactions.
* **Express-session:** Used for sessions
* **Passport:** Used for user authentication.

**Deployment & Other:**

*   **Fly.io:** The platform for deploying and hosting the application.
*   **Docker:** Containerization technology for consistent and reproducible deployments.
* **Zod:** For validation
* **ESBuild:** Used in the build process
* **Replit:** Used as a developemtn environment

## Getting Started

### Prerequisites

*   **Node.js:** Make sure you have Node.js (version 20 or later recommended) and npm (or yarn) installed.
*   **Docker:** If you intend to use the Docker setup, make sure Docker is installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd solar-system-visualization
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running in Development Mode

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
2.  **Open your browser:** Navigate to `http://localhost:8080` to view the application.

### Building for Production

1.  **Build the application:**
    ```bash
    npm run build
    ```
    This will create optimized builds of the frontend and backend in the `dist` directory.

### Running in Production Mode

1.  **Start the production server:**
    ```bash
    npm run start
    ```
2.  The server will start on port 8080.

### Using Docker

1.  **Build the Docker image:**
    ```bash
    docker build -t solar-system-visualization .
    ```
2.  **Run the Docker container:**
    ```bash
    docker run -p 8080:8080 solar-system-visualization
    ```
3.  The application will be accessible at `http://localhost:8080`.

### Deploying to Fly.io

1.  **Install Flyctl:** If you don't have it, follow the instruction in the Fly.io website.
2. **Login:** `flyctl auth login`
3.  **Deploy the application:**
    ```bash
    flyctl deploy
    ```