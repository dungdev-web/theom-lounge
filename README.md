# 🌸 Theom Lounge 🌸

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: Unspecified](https://img.shields.io/badge/License-Unspecified-lightgrey.svg?style=for-the-badge)](https://choosealicense.com/)
[![GitHub Stars](https://img.shields.io/github/stars/dungdev-web/theom-lounge?style=for-the-badge&color=yellow)](https://github.com/dungdev-web/theom-lounge/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/dungdev-web/theom-lounge?style=for-the-badge&color=blue)](https://github.com/dungdev-web/theom-lounge/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/dungdev-web/theom-lounge?style=for-the-badge&color=red)](https://github.com/dungdev-web/theom-lounge/issues)

> ✨ Experience elegance and seamless service booking with Theom Lounge – your gateway to relaxation and beauty. ✨

Theom Lounge is a modern, beautifully crafted web application designed to provide an intuitive and engaging online presence for beauty salons, wellness centers, or exclusive lounges. Built with Next.js, React, and TypeScript, it offers a smooth user experience for browsing services, adding them to a cart, and initiating a booking process. With a focus on aesthetic appeal and user-friendliness, Theom Lounge aims to elevate the digital experience for both businesses and their clients.

## 🚀 Live Demo

Explore the live application to see Theom Lounge in action:

👉 [**theom-lounge.vercel.app**](https://theom-lounge.vercel.app)

## 🌟 Key Features

Theom Lounge comes packed with features to provide a delightful user experience:

*   **🎨 Visually Stunning UI:** A modern and elegant design, complemented by beautiful banner images and service showcases.
*   **🛒 Interactive Service Catalog:** Browse a wide range of services categorized for easy navigation.
*   **➕ Seamless Cart Experience:** Add desired services to a dynamic cart panel, review selections, and proceed to booking.
*   **🗓️ Intuitive Booking Flow:** A dedicated booking panel to guide users through the reservation process.
*   **✨ Dynamic UI Effects:** Enhance user engagement with subtle parallax scrolling and other interactive elements.
*   **📱 Fully Responsive Design:** Optimized for a flawless experience across all devices, from desktops to mobile phones, thanks to Tailwind CSS.
*   **⚡ Blazing Fast Performance:** Leverages Next.js for server-side rendering (SSR) or static site generation (SSG) to deliver a swift browsing experience.
*   **🔧 Modern Tech Stack:** Built with cutting-edge technologies like Next.js, React, and TypeScript for robust and maintainable code.

## 🎯 Use Cases

*   **Beauty Salons & Spas:** Provide an online platform for clients to discover services, view pricing, and book appointments.
*   **Wellness & Massage Centers:** Showcase therapy options and allow customers to schedule sessions conveniently.
*   **Exclusive Lounges:** Offer a digital storefront for unique experiences, membership sign-ups, or event bookings.
*   **Portfolio Project:** A great example of a modern web application built with a robust frontend stack.

## 📚 Table of Contents

*   [🚀 Live Demo](#--live-demo)
*   [🌟 Key Features](#--key-features)
*   [🎯 Use Cases](#-use-cases)
*   [📚 Table of Contents](#-table-of-contents)
*   [🛠️ Technologies Used](#%EF%B8%8F-technologies-used)
*   [📦 Installation](#-installation)
    *   [Prerequisites](#prerequisites)
    *   [Getting Started](#getting-started)
*   [🚀 Usage](#-usage)
    *   [Running the Development Server](#running-the-development-server)
    *   [Building for Production](#building-for-production)
*   [📂 Project Structure](#-project-structure)
*   [🤝 Contributing](#-contributing)
*   [📝 License](#-license)
*   [🙏 Acknowledgments](#-acknowledgments)

## 🛠️ Technologies Used

Theom Lounge is built using a powerful and modern stack:

*   **[Next.js](https://nextjs.org/)** (v16.1.6) - React framework for production.
*   **[React](https://react.dev/)** (v19.2.3) - A JavaScript library for building user interfaces.
*   **[TypeScript](https://www.typescriptlang.org/)** (v5) - A typed superset of JavaScript that compiles to plain JavaScript.
*   **[Tailwind CSS](https://tailwindcss.com/)** (v4) - A utility-first CSS framework for rapidly building custom designs.
*   **[ESLint](https://eslint.org/)** (v9) - Pluggable linter for JavaScript and JSX.

## 📦 Installation

To get a local copy of Theom Lounge up and running, follow these simple steps.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **Node.js**: [LTS version recommended](https://nodejs.org/en/download/) (e.g., v18.x or v20.x)
*   **npm** or **yarn**: npm comes with Node.js, or you can install yarn globally:
    ```bash
    npm install -g yarn
    ```

### Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/dungdev-web/theom-lounge.git
    cd theom-lounge/theom-lounge # Navigate into the project directory
    ```

2.  **Install dependencies:**

    Using npm:
    ```bash
    npm install
    ```

    Or using yarn:
    ```bash
    yarn install
    ```

    > [!TIP]
    > If you encounter issues with `next@16.1.6` or `react@19.2.3` due to them being very new/experimental, consider checking for updates to Next.js and React or trying a slightly older stable version if this project is a placeholder. However, for this README, we stick to the `package.json` versions.

## 🚀 Usage

Once installed, you can run Theom Lounge in development mode or build it for production.

### Running the Development Server

To start the development server:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

The application will be accessible at `http://localhost:3000`. Any changes you make to the code will automatically hot-reload in your browser.

### Building for Production

To build the application for production:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

This command optimizes the application for best performance. After building, you can start the production server:

```bash
npm run start
```

Or using yarn:

```bash
yarn start
```

The production application will also be accessible at `http://localhost:3000`.

## 📂 Project Structure

The project follows a standard Next.js application structure with logical separation of concerns:

```
theom-lounge/
├── app/
│   ├── components/                 # Reusable UI components (e.g., Navbar, Footer, BookingPanel)
│   ├── hooks/                      # Custom React hooks (e.g., useParallax)
│   ├── lib/                        # Utility functions
│   ├── styles/                     # Global CSS and Tailwind directives
│   ├── favicon.ico                 # Favicon for the application
│   ├── layout.tsx                  # Root layout for the application
│   └── page.tsx                    # Main homepage component
├── public/
│   ├── banner/                     # Images for hero banners and sections
│   ├── logo/                       # Project logo
│   └── products/                   # Images for services/products
├── data/
│   └── services.ts                 # Local data source for services
├── Booking, Modal/                 # (Unusual directory name) Likely contains booking-related logic, modals, sitemap, and robots.
├── times, cart/                    # (Unusual directory name) Likely contains types and logic related to time slots and cart management.
├── .gitignore                      # Specifies intentionally untracked files to ignore
├── next.config.ts                  # Next.js configuration
├── package.json                    # Project metadata and dependencies
├── tsconfig.json                   # TypeScript configuration
└── vercel.json                     # Vercel deployment configuration
```

> [!NOTE]
> The directories `Booking, Modal/` and `times, cart/` contain important files like `robots.ts`, `sitemap.ts`, and `types/index.ts`. While functional, their naming convention is unconventional and might be refactored for clarity in future development.

## 🤝 Contributing

We welcome contributions to Theom Lounge! If you have suggestions for improvements, new features, or bug fixes, please follow these steps:

1.  **Fork** the repository on GitHub.
2.  **Clone** your forked repository to your local machine.
3.  **Create a new branch** for your feature or fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
    or
    ```bash
    git checkout -b bugfix/issue-description
    ```
4.  **Make your changes** and ensure they follow the existing code style.
5.  **Test your changes** thoroughly.
6.  **Commit your changes** with a clear and descriptive commit message.
7.  **Push your branch** to your forked repository.
8.  **Open a Pull Request** to the `main` branch of the original repository.

Please provide a detailed description of your changes in the pull request.

## 📝 License

This project is currently **Unlicensed**. You are free to fork and modify it for personal use, but for commercial use or distribution, please clarify licensing with the original author.

## 🙏 Acknowledgments

*   **[Vercel](https://vercel.com/)**: For providing an excellent platform for seamless deployment of Next.js applications.
*   **[Next.js Community](https://nextjs.org/community)**: For the fantastic framework and continuous innovation.
*   **[React Community](https://react.dev/community)**: For the powerful UI library.
*   **[Tailwind CSS Team](https://tailwindcss.com/community)**: For making styling a breeze.
