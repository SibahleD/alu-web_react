# Mini Blog Platform - Dev Insights

A lightweight internal blog platform built with React, TypeScript, and Vite. This project demonstrates modern React patterns, component-based architecture, and performance optimization techniques.

## Table of Contents

1. [Installation & Setup](#installation--setup)
2. [Running the Application](#running-the-application)
3. [Project Structure](#project-structure)
4. [Component Overview](#component-overview)
5. [Styling Approach](#styling-approach)
6. [Optimization Strategies](#optimization-strategies)
7. [Challenges & Solutions](#challenges--solutions)
8. [External Libraries & Packages](#external-libraries--packages)

---

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mini-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```


Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` and automatically refresh when you make changes.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The bundled files will be in the `dist/` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
mini-blog/
├── src/
│   ├── components/              # React components
│   │   ├── Header.tsx           # Navigation header with logo
│   │   ├── Post.tsx             # Individual post card component
│   │   ├── PostList.tsx         # Container for displaying multiple posts
│   │   └── ...
│   ├── styles/                  # CSS styling files
│   │   ├── header.css           # Header styling
│   │   ├── post.css             # Post card styling (with featured variant)
│   │   ├── postList.css         # PostList container styling
│   │   ├── app.css              # App-wide styling
│   │   └── index.css            # Global styles and CSS variables
│   ├── types/                   # TypeScript type definitions
│   │   └── postType.ts          # Post interface definition
│   ├── utils/                   # Utility functions and HOCs
│   │   └── withLogger.tsx       # Higher-order component for logging
│   ├── App.tsx                  # Root component
│   └── main.tsx                 # Application entry point
├── public/                      # Static assets
├── index.html                   # HTML template
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

### Folder Purpose

- **components/** - Reusable React components
- **styles/** - External CSS files for component styling
- **types/** - TypeScript interfaces and type definitions
- **utils/** - Helper functions and HOCs
- **public/** - Static files served as-is

---

## Component Overview

### Header Component

**Purpose:** Displays the application header with the "Dev Insights" logo and navigation.

**Props:** None (content is hardcoded)

**Features:**
- Functional component wrapped with `React.memo()`
- Static logo and "New Post" navigation link
- Responsive flexbox layout

**Code:**
```tsx
<Header />
```

---

### Post Component

**Purpose:** Renders a single blog post with title, author, preview, and date.

**Props:**
- `title` (string) - Post title
- `author` (string) - Author name
- `preview` (string) - Post preview text
- `datePosted` (string) - Publication date

**Features:**
- Functional component wrapped with `React.memo()` for optimization
- Inline styles for title (green background with teal borders)
- Conditional styling: Posts by "John Doe" are highlighted with warmer background and golden text
- Uses the `Post` type from `postType.ts`

**Code:**
```tsx
<Post 
  title="Getting Started with React"
  author="John Doe"
  preview="Learn the basics..."
  datePosted="2025-05-19"
/>
```

---

### PostList Component

**Purpose:** Container component that manages and displays a list of blog posts.

**Props:** None (hardcodes sample data)

**Features:**
- Functional component
- Contains 3 sample posts with realistic content
- Maps over posts array to render multiple `Post` components
- Each post has a unique `key` prop (using `post.id`)
- Wrapped with `withLogger` HOC for lifecycle logging
- Logs "PostList mounted" and "PostList unmounted" to console

**Code:**
```tsx
<PostList />
```

---

### Why Functional Components?

We chose **functional components** over class components for the following reasons:

1. **Modern React Pattern** - Functional components are the current standard
2. **Hooks Support** - Enable the use of `useEffect`, `useState`, and other React hooks
3. **Simpler Syntax** - Less boilerplate code compared to class components
4. **Easier to Test** - Pure functions are easier to unit test
5. **Better Performance** - Functional components can be optimized more easily
6. **Code Reusability** - Custom hooks and HOCs provide better composability

---

## Styling Approach

### Methods Used

We implemented **two styling methods** to demonstrate different approaches:

#### 1. External CSS Files

**Files:**
- `header.css` - Header navigation styling
- `post.css` - Post card styling with featured variant
- `postList.css` - Post list container layout
- `app.css` - Application container styling

**Why External CSS?**
- ✅ Easy to maintain and scale
- ✅ Separation of concerns (styling separate from logic)
- ✅ Reusable class-based selectors
- ✅ Good performance
- ✅ Familiar conventional approach

**Example:**
```css
.post-item {
  background-color: #08060d;
  border-radius: 15px;
  padding: 20px;
  color: #ffffff;
}
```

---

#### 2. Inline Styles

**Where Used:**
- `Post` component: Title styling with green background and teal borders

**Why Inline Styles?**
- ✅ Component-scoped styling
- ✅ Dynamic styling capability
- ✅ No CSS class name conflicts
- ✅ Clear relationship between style and component

**Example:**
```tsx
const titleStyles = {
  backgroundColor: "#3e3e3e",
  borderBottom: "3px solid #4b8d8c",
  borderLeft: "3px solid #4b8d8c",
}

<h1 style={titleStyles}>{props.title}</h1>
```

---

### Conditional Styling

**Implementation:**
Posts by "John Doe" receive special styling to highlight featured posts.

**How It Works:**
```tsx
className={props.author === "John Doe" ? "post-featured" : "post-item"}
```

**CSS Classes:**
- `.post-item` - Default post styling (dark background, white text)
- `.post-featured` - Featured post styling (warmer background, golden text)

**Benefits:**
- Visual distinction for important posts
- Demonstrates conditional logic in React
- Easy to extend for other authors

---

## Optimization Strategies

### 1. React.memo

Applied to `Header` and `Post` components.

**Purpose:** Prevent unnecessary re-renders when component props haven't changed.

**How It Works:**
```tsx
export default React.memo(Post);
```

**Why These Components?**
- `Post` - Receives props from parent; memoization prevents re-renders when post data is unchanged
- `Header` - Static content; memoization prevents unnecessary re-renders

**Impact:**
- Improved rendering performance
- Reduced unnecessary DOM updates

---

### 2. Higher-Order Component (withLogger)

Created a custom HOC to log component lifecycle events.

**Purpose:** Track when components mount and unmount (useful for debugging).

**Implementation:**
```tsx
function withLogger(Component) {
  return (props) => {
    useEffect(() => {
      console.log(`${Component.name} mounted`);
      return () => {
        console.log(`${Component.name} unmounted`);
      }
    }, []);

    return <Component {...props} />;
  }
}
```

**Applied To:**
- `PostList` component - Enhanced with lifecycle logging

**Usage:**
```tsx
export default withLogger(PostList);
```

**Console Output:**
```
PostList mounted
PostList unmounted
```

**Benefits:**
- Demonstrates HOC pattern knowledge
- Useful for performance monitoring
- Helps debug component lifecycle issues

---

### 3. Proper Key Props

Each post in the list has a unique key:

```tsx
{samplePosts.map(post => (
  <Post key={post.id} {...post} />
))}
```

**Why Not Index?**
- ❌ Using array index as key causes issues when list changes
- ✅ Using `post.id` ensures each post maintains its identity

**Benefits:**
- React properly identifies which items changed
- Prevents bugs with form inputs and component state
- Improves rendering performance for dynamic lists

---

## Challenges & Solutions

### Challenge 1: TypeScript Import/Export Confusion

**Problem:**
Initial errors when importing the Post type: `"does not provide an export named 'Post'"`

**Solution:**
- Renamed `post.ts` to `postType.ts` for clarity
- Ensured proper `export` keyword on the type definition
- Used aliased imports to avoid name conflicts: `import { Post as PostType }`

**Learning:**
Clear file naming conventions help prevent import path confusion and make the codebase more maintainable.

---

### Challenge 2: Understanding HOCs and Their Structure

**Problem:**
Uncertain how to structure the `withLogger` function and how it should interact with components.

**Solution:**
- Learned that HOCs return a wrapper component, not components themselves
- Understood that useEffect needs to be inside the wrapper, not in the HOC function itself
- Implemented the cleanup function to handle unmounting

**Learning:**
HOCs are functions that enhance components with additional functionality. The pattern is: `HOC(Component) → EnhancedComponent`

---

### Challenge 3: CSS Caching Issues During Development

**Problem:**
CSS changes made in files weren't appearing in the browser despite saving.

**Solution:**
- Cleared `node_modules/.vite` cache
- Restarted the development server
- Performed a hard browser refresh (`Ctrl+Shift+R`)

**Learning:**
Vite caches files for performance; sometimes clearing the cache is necessary when making CSS changes during development.

---

### Challenge 4: Implementing Conditional Styling Logic

**Problem:**
Needed to apply different CSS classes based on the post author prop.

**Solution:**
- Used a ternary operator in the className prop
- Created two CSS classes: `.post-item` and `.post-featured`
- Implemented the condition: `className={props.author === "John Doe" ? "post-featured" : "post-item"}`

**Learning:**
React allows dynamic class names through JavaScript expressions, enabling powerful conditional styling patterns.

---

## External Libraries & Packages

### Core Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | v18+ | UI library for building components |
| `react-dom` | v18+ | React rendering for the web |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `vite` | Latest | Fast build tool and development server |
| `typescript` | Latest | Type checking and type safety |
| `@vitejs/plugin-react` | Latest | React plugin for Vite |
| `eslint` | Latest | Code linting and quality checking |

## How to Check Console Logs

To verify that the `withLogger` function is working, follow the below steps:

1. Open the application in your browser
2. Press `F12` to open Developer Tools
3. Go to the **Console** tab
4. You should see: `PostList mounted`
5. Refresh the page
6. You should see: `PostList unmounted` followed by `PostList mounted`

