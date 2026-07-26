# Frontend Handbook

This handbook defines how frontend collaborators should set up the project and contribute code safely.

## 1) Clone and Setup on Your Local Machine

1. Copy the repository URL from GitHub.
2. Clone the repository:

```bash
git clone <repo-url>
```

3. Move into the project folder:

```bash
cd zintrasolutions-fe
```

4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

6. Open the app in your browser:

```text
http://localhost:3000
```

## 2) Required Git Workflow

Follow these rules for every task:

1. Always pull the latest `main` branch before starting any work.
2. Always create a new feature branch for your implementation.
3. Never push directly to `main`.
4. Push your feature branch and open a Pull Request to `main`.
5. Wait for admin review before merge.

### Step-by-step commands

1. Make sure you are on `main`:

```bash
git checkout main
```

2. Pull latest changes:

```bash
git pull origin main
```

3. Create and switch to a feature branch:

```bash
git checkout -b feature/yourFeatureName
```

4. Do your work, then commit:

```bash
git add .
git commit -m "feat: short description of your change"
```

5. Push the feature branch:

```bash
git push -u origin feature/yourFeatureName
```

6. Open a Pull Request from `feature/yourFeatureName` to `main`.

## 3) Naming and Component Conventions

### Component naming

- Use camelCase component names (project rule).
- Keep naming consistent across files, imports, and exports.

### Functional component style

- Always use arrow functions for functional components.

Example:

```javascript
const Sample = () => {
  return <div>Sample</div>;
};

export default Sample;
```

## 4) Separation of Concerns

Use clear separation between UI and logic:

1. Components should focus mainly on UI/presentation.
2. Pages should handle page-level logic, orchestration, and composition.
3. Keep reusable UI pieces inside components, not duplicated in pages.

## 5) Pull Request Checklist

Before creating a PR:

1. You pulled latest `main` before starting.
2. You worked in a feature branch (not `main`).
3. Your branch is pushed to remote.
4. Your PR targets `main`.
5. Your changes follow component and separation-of-concerns conventions.
