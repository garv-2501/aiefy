48:26 / 5:33:29 : This is were I stoped

# Aiefy - Open Source AI Tools Web Application

Welcome to the README documentation for Aiefy, a web application designed to provide free access to the latest open source AI tools. Aiefy allows users to contribute their own AI tools through GitHub repositories, which can then be accessed and utilized by anyone through the website's user-friendly interface.

## Table of Contents

- [Introduction](#aiefy---open-source-ai-tools-web-application)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Auth](#auth)
- [Dashboard](#dashboard)
- [Landing Page](#landing-page)
- [Components](#components)
- [Public Assets](#public-assets)

## Installation

To get Aiefy up and running on your local machine, follow these steps:

1. Clone the repository:

```bash
https://github.com/garv-2501/aiefy.git
```

2. Navigate to the project directory:

```bash
cd aiefy
```

3. Install the necessary dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your web browser and access Aiefy at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
app
|-- auth/
|   |-- sign-in/
|   |-- sign-up/
|-- dashboard/
|   |-- layout.tsx
|   |-- routes/
|       |-- dashboard/
|       |   |-- page.tsx
|-- landing/
|   |-- page.tsx
|-- layout/
|-- globals.css
components/
|-- ui/
|   |-- button.tsx
|   |-- navbar.tsx
|   |-- sidebar.tsx
lib/
|-- utils.ts
public/
|-- logo.png
```

## Auth

The **auth** folder contains the sign-in and sign-up functionality. It leverages [Clerk.io](https://clerk.io/) for authentication services.

## Dashboard

The **dashboard** folder encompasses the main layout and routing of the dashboard interface. It includes a **layout.tsx** file that serves as the basic dashboard structure, and a **routes** folder that can house various dashboard routes. The current route setup involves a **dashboard** folder with a **page.tsx** file for routing.

## Landing Page

The **landing** folder is responsible for styling the landing page of the web application. It consists of a **page.tsx** file containing the primary landing page code.

## Components

The **components** folder is dedicated to various reusable components used in the application's UI:

- **ui/**: This sub-folder contains components from the Shadcn-UI library, such as buttons and other UI elements.
- **navbar.tsx**: Custom component for the navigation bar.
- **sidebar.tsx**: Custom component for the sidebar.

## Public Assets

The **public** folder contains all the assets, including images like **logo.png**, used in the web application.

Feel free to explore and contribute to Aiefy's codebase to enhance its features and capabilities!

---

_Note: This README.md template is meant to provide a general overview and guidance for the Aiefy codebase. It's recommended to keep the document up-to-date as the project evolves._
