# React Portfolio Projects

This contains all my React Portfolio Projects.

This repository contains multiple independent React projects. Each project lives in its own folder and keeps its own `package.json` and lockfile.

## Projects

- [`goal-tracker`](./goal-tracker): Goal tracker React app

## Run a project

```powershell
cd goal-tracker
npm install
npm run dev
```

Run `npm install` inside a project folder only when setting it up locally. The root `.gitignore` excludes `node_modules` and build output in every project, so dependencies are never uploaded to the repository.

To add another app, create a sibling folder such as `weather-dashboard` and give it its own `package.json`, lockfile, and source files.
