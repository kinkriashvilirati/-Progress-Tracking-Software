# Momentum

This repository is public, but this README is written first for me.

Its job is simple:

- tell other people what this project is,
- remind future me where I stopped,
- make restarting after a break fast and easy.

Rule for myself: every time I write code, I update this README before I stop.

## Project Overview

Momentum is a React + TypeScript + Vite frontend with routing, shared layout, responsive navigation, theme support, and a landing page that shows exercise states.

Current stack:

- React 19
- TypeScript
- Vite
- React Router 7
- Tailwind CSS 4
- Font Awesome

## Current Structure

Important files:

- `src/App.tsx` wires the router and navbar context together.
- `src/app/routing/Router.tsx` defines the app routes.
- `src/components/layout/AppLayout.tsx` renders the fixed nav and page outlet.
- `src/components/layout/nav/Nav.tsx` contains desktop and mobile navigation.
- `src/components/layout/nav/Theme.tsx` handles the theme toggle UI.
- `src/context/TopContext.tsx` stores navbar open/close state.
- `src/pages/LandingPage.tsx` renders the main landing screen.
- `src/components/shared/ButtonState.tsx` renders the status buttons.
- `src/data/frontData.ts` holds current static button/nav data.
- `src/index.css` contains theme tokens, color variables, and breakpoints.

Current routes:

- `/` -> landing page
- `/create-exercise` -> placeholder page
- `/exercises` -> placeholder page

## Current State

Last checked: 2026-03-24

What already works:

- app bootstraps correctly
- router is connected
- layout shell is in place
- navbar opens/closes on smaller screens
- landing page renders status buttons from data
- build passes
- lint passes

What is still unfinished:

- `CreateExercise` page is still placeholder content
- `ExercisesInside` page is still placeholder content
- data is still static and not connected to real logic
- the README workflow starts now and should be maintained from this point on

Things to keep in mind:

- theme toggle exists, but if theme behavior feels off, re-check the state/DOM attribute flow in `Theme.tsx`
- `ButtonState.tsx` uses a dynamic status class name, so if Tailwind styles stop applying correctly, replace that string with an explicit status-to-class mapping

## Where I Stopped

Building filters with its modules and state.

### 2026-03-24

Worked on: fixing the bag of navigation + buttons and then started the filter creation
Current result: finished stling the filter component with its responsive;
Next step: finish filter module with interactive open and shut down
Files touched: index.css filter.tsx filterModule.tsx landingPage.ts commonTypes

```
### YYYY-MM-DD 2026-03-25

Worked on: filter and its styling
-

Current result: left getting data from backend and dynamic appear of filter
-

Next step:
-

Files touched:
-

Commands checked:
-

Notes to future me:
-
```
