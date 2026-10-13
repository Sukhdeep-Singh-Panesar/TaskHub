# To-Do List App

A simple, modern, and responsive To-Do List web application built with **React, TypeScript, Vite, and Tailwind CSS**. It helps users manage daily tasks efficiently with a clean UI and persistent storage.

## Live Demo

[View Live Demo](https://to-do-list-app-yjj4.vercel.app/)

## Features

- **Task management:** Create, edit, delete, and mark tasks as completed.
- **Task filtering:** Switch between All, Pending, and Completed tasks.
- **Progress tracking:** See a live completion percentage and progress bar.
- **Dashboard statistics:** View completed, pending, and total task counts.
- **Calendar:** Browse dates in an integrated calendar view.
- **Persistent tasks:** Save task data in your browser's Local Storage.
- **Responsive interface:** Layouts designed to adapt to smaller and larger screens.
- **Input validation:** Receive feedback when required fields are empty.
- **Accessible controls:** Task actions and the progress indicator include descriptive labels.

## Tech Stack

| Category | Technologies |
| --- | --- |
| Frontend | React, TypeScript |
| Build tooling | Vite |
| Styling | Tailwind CSS |
| UI components | shadcn/ui, Radix UI |
| Icons | React Icons, Lucide React |
| Calendar | React DayPicker |
| Data persistence | Browser Local Storage |
| Deployment | Vercel |

## Getting Started

### Prerequisites

Install a compatible version of **Node.js** and **npm**.

### 1. Clone the repository

```bash
git clone https://github.com/Sukhdeep-Singh-Panesar/To-Do-List-App.git
cd To-Do-List-App
```

> The repository must be public (or you must have GitHub access) to clone it.

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open the local URL printed in your terminal.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## How It Works

1. Enter a task title and description, then click **Add Task**.
2. Use the task card controls to edit, complete, or delete tasks.
3. Select **All**, **Pending**, or **Completed** to filter the list.
4. Watch the task counts and completion progress update automatically.
5. Reload the page: your tasks remain stored in the same browser.

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── ui/
│   ├── Alert.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
├── context/
│   └── AlertContext.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Current Limitations

TaskHub is a **frontend-only application**. Task data is saved in each browser's Local Storage, rather than a cloud database. Tasks are not automatically synchronized across devices or browsers, and clearing site data can remove saved tasks.

The calendar currently displays dates; tasks cannot be scheduled against specific calendar dates.

## Deployment

TaskHub is deployed using **Vercel**. Visit the [Live Demo](https://to-do-list-app-rust-five.vercel.app/) to try it.

## License

This project is licensed under the MIT License.
See the [LICENSE](https://github.com/Sukhdeep-Singh-Panesar/TaskHub/blob/main/LICENSE) file for details.

## Author

**Sukhdeep Singh**  
[GitHub Profile](https://github.com/Sukhdeep-Singh-Panesar)

