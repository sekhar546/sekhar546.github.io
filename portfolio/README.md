# Portfolio Website

This is a portfolio website built with Next.js.

## Technologies Used

*   Next.js
*   React
*   CSS Modules

## Project Structure

*   `src/app/page.js`: This is the main page component that displays all the content of the portfolio website.
*   `src/app/layout.js`: This is the root layout component that wraps the entire application.
*   `portfolio/next.config.js`: This file contains the Next.js configuration.

## Configuration

The `next.config.js` file contains the following configuration options:

*   `reactStrictMode`: Enables strict mode for React.
*   `pageExtensions`: Defines the file extensions that should be considered as pages.

## Notes

The individual page files (`about.js`, `skills.js`, `experience.js`, `education.js`, `courses.js`, `languages.js`) were removed and their content was moved to the `src/app/page.js` file.
The menu bar was also removed from the `src/app/layout.js` file.
