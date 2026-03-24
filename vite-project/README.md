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

Last focus area:
- shared UI and landing-page status buttons

Last file I was around:
- `src/components/shared/ButtonState.tsx`

Last known good state:
- `npm run build` passes
- `npm run lint` passes

Next likely step:
- build the real `create-exercise` flow, or connect the landing page buttons to meaningful behavior

## Restart Checklist

When I come back after a break:
1. Read this README first.
2. Run `npm install` if dependencies are missing.
3. Run `npm run dev`.
4. Check the "Where I Stopped" section.
5. Pick the "Next likely step" or replace it with the new real task.
6. After coding, update this README before closing the project.

## Update Rules

Every coding session should update these parts:
- `Last checked`
- `What already works`
- `What is still unfinished`
- `Where I Stopped`
- `Next likely step`
- `Session Log`

Keep updates short and honest.
This file does not need to be polished like documentation every time.
It needs to be useful.

## Session Log

Use this format every time you finish a work session.

### 2026-03-24

Worked on:
- scanned the existing project structure
- replaced the default Vite README with a project-focused progress README

Current result:
- README now acts as both public project context and personal restart notes

Next step:
- start building the real exercise creation flow

Files touched:
- `README.md`

Commands checked:
- `npm run build`
- `npm run lint`

Notes to future me:
- start here before opening random files
- if you are unsure what to do next, begin with `CreateExercise.tsx`

## Session Template

Copy this block and replace the values:

```md
### YYYY-MM-DD

Worked on:
- 

Current result:
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
