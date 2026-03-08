# Kinfolk Project

Frontend for a family tree management app built with React + Vite.

## Tech Stack

- React 19
- Vite 7
- React Router DOM
- Axios
- React Toastify

## Current Features

- Home page with family tree UI and member management sections
- Add member form
- Update member page (`/update-tree/:_id`)
- Login and Sign Up pages
- Global React Error Boundary in app root

## Routing

Defined in `src/router.jsx`:

- `/` -> Main app (`App`)
- `/login` -> Login page
- `/signup` -> Signup page
- `/update-tree/:_id` -> Update member page
- `*` -> Not found fallback page

## Temporary Auth Bypass (Frontend-Only Mode)

Backend auth is not fully connected yet, so temporary bypass is enabled.

Set `AUTH_BYPASS` in these files:

- `src/component/Header/Header.jsx`
- `src/component/FamilyForm.jsx`
- `src/component/FamilyTree/FamilyTree.jsx`

Current value:

```js
const AUTH_BYPASS = true;
```

When backend auth is ready, switch all to:

```js
const AUTH_BYPASS = false;
```

The previous login redirect behavior is already preserved in comments near those checks.

## Project Setup

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

## Environment Notes

API calls currently reference:

```js
process.env.REACT_APP_API_URL
```

If needed, make sure your runtime/build setup provides this value for API requests.

## Main Entry

`src/main.jsx` renders the app with:

- `StrictMode`
- `ErrorBoundary`
- `Router`
