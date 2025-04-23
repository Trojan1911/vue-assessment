# Coding Assessment Description

**Before starting the task**, please **fork the repository** on GitHub. Once you have completed the application, push your changes to your forked repository and send the link to your forked repository to the recruiter.

The objective of this task is to develop a simple application that displays and manages comments. You will need to retrieve a list of comments from the endpoint (https://jsonplaceholder.typicode.com/comments) and display the ten most recent comments. Each comment should clearly display the name and message associated with it.

Create a form that is conditionally rendered if the user has not yet submitted a comment. This form will be used to add a new comment through the same endpoint (https://jsonplaceholder.typicode.com/comments). It should consist of three fields: name, email, and message.

When a comment is successfully added, it should be stored **(using already installed Pinia)** in such a way that it remains visible even after the page is refreshed. The newly added comment should then be displayed as the latest comment.

Please apply basic styling to the components using your preferred method, whether it's simple CSS or a framework such as Tailwind CSS, Bootstrap, or another CSS library of your choice.

This revision emphasizes that candidates have the freedom to be creative in their design choices.

**Note:** Please refrain from using tools like ChatGPT or other AI assistance while completing this task to ensure a fair assessment of your skills.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
