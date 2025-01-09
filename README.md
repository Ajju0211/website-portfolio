# Portfolio Website

This is my personal portfolio website built using **React**, **Vite**, and **Tailwind CSS**. It showcases my skills, projects, education, and other professional information. The website is designed to be simple, clean, and responsive.

---

## Features

- **Landing Page**: A welcoming home page with a brief introduction.
- **About Me Section**: A section that describes who I am and my professional background.
- **Projects Section**: Displays a list of projects with detailed information and links to live demos or GitHub repositories.
- **Resume Section**: A downloadable resume in PDF format.
- **Contact Section**: A contact form to reach out for inquiries.
- **Smooth Animations**: Interactive and smooth animations for transitions and components.
- **Responsive Design**: Fully responsive layout that works on all screen sizes.

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI design.
- **JavaScript**: Programming language for building interactive web elements.
- **HTML/CSS**: Standard web technologies for structure and styling.
- **ESLint**: Linting tool for ensuring code quality.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins.

---

## Folder Structure

The project is structured as follows:

- **public/**: Contains public assets such as the `vite.svg` logo.
- **src/**: Contains all source code for the React app.
  - **assets/**: Images, icons, and other static assets.
  - **components/**: Reusable UI components such as buttons and profile cards.
  - **pages/**: Different pages of the website like HomePage, About, Contact, etc.
    - **About/**: The "About Me" section of the website.
    - **Contact/**: Contact form section for reaching out.
    - **HomePage/**: The landing page with introductory content.
    - **Project/**: The section that showcases projects.
    - **Resume/**: A section for displaying or downloading your resume.
    - **Technologies/**: Displays technologies you are proficient in.
    - **Personal-Info/**: Section for personal details like name and title.
  - **App.jsx**: Main React component that ties everything together.
  - **index.css**: Global styles for the project.
  - **main.jsx**: The entry point for the React application.

- **.gitignore**: Specifies which files should be ignored by Git.
- **package.json**: Contains project metadata and dependencies.
- **eslint.config.js**: Configuration file for ESLint to enforce code quality.
- **index.html**: The main HTML file that is rendered by Vite.
- **tailwind.config.js**: Tailwind CSS configuration file.
- **vite.config.js**: Vite configuration for building and serving the app.

---

## Installation

### Prerequisites

- **Node.js** (v14 or higher) should be installed.

### Steps to Install

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/portfolio-website.git
    cd portfolio-website
    ```

2. Install the dependencies:

    If you're using **npm**:

    ```bash
    npm install
    ```

    Or if you're using **Yarn**:

    ```bash
    yarn install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

    Or with **Yarn**:

    ```bash
    yarn dev
    ```

    This will start the application at `http://localhost:3000`.

---

## Features

- **HomePage**: The main page that introduces who you are.
- **About**: A section dedicated to explaining your professional background and skills.
- **Projects**: A section where you can showcase your work, including descriptions and links to live demos or GitHub.
- **Resume**: A section that allows visitors to view or download your resume.
- **Contact**: A contact form where users can get in touch with you.
- **Technologies**: A section that displays the technologies you are skilled in, such as React, Node.js, etc.
- **Dark/Light Mode**: Tailwind's dark mode feature that toggles based on the user's system preference or manual selection.

---

## Styling

This project uses **Tailwind CSS** for styling, and the design is mobile-first and fully responsive.

### To customize the styles:

- You can modify the `tailwind.config.js` file to customize colors, fonts, and breakpoints.
- The `index.css` file contains the global styles, including Tailwind’s base styles and custom overrides.

---

## How to Contribute

1. Fork the repository.
2. Clone your forked repository:

    ```bash
    gh repo clone Ajju0211/website-portfolio
    ```

3. Create a new branch for your feature:

    ```bash
    git checkout -b feature-name
    ```

4. Make your changes, commit them, and push the branch:

    ```bash
    git add .
    git commit -m "Your commit message"
    git push origin feature-name
    ```

5. Create a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- **React** for making interactive UIs easy to build.
- **Tailwind CSS** for making responsive and customizable design fast.
- **Vite** for its fast development build and build tools.

---
