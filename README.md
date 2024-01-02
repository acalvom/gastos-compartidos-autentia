# 💻 Gestión de gastos 💰

> Code challenge proposed by Autentia - Andrea Calvo Moreno

This repository contains the frontend code for the application. Project management has been carried out using Agile Kanban methodology on GitHub, with the project board available. [here](https://github.com/users/acalvom/projects/2).



## ➕ App Improvements:

- Custom hook to handle local storage.
- Not Found page.
- Delete expenses feature
- Routing system with `react-router`
- Unit tests for components using `React Testing Library` and `Vitest`.
- Hook tests for the custom Oompa Loompa Hook using `React Testing Library`.
- E2E tests with `Cypress 12` suite for app workflows.
- Incorporate linters and guards like `husky`, `commitlint`, `eslint`, and `prettier`.

## 🧭 Technical Decisions:

- Minimum transaction workflow is not implemented, work in progress.

## 🫀 How It Works

Once the app is running, the user sees the home page displaying the stored expenses in the local storage.

To add more expenses or friends, the user navigates to `/create` link and fills the forms on the page.

Clicking on an expense X card the espense is removed from the app and local storage so it is not taken into consideration any more.

If the user attempts to access a non-existing page, they will be redirected to a `Not Found` page. Clicking the button returns the user to the home page.

## ⚙️ Tech Stack

▪️ `Git` `GitHub` `Docker` `Vite` `Vercel`  
▪️ `React` `TypeScript` `React-Router`  
▪️ `Cypress 12` `React Testing Library` `Vitest`

### 👣 A Little Further On:

- App development progress has been tracked with a [Kanban project](https://github.com/users/acalvom/projects/2) on Github.
- Tickets associated with requirements and app features have been created and labeled based on priority:
  - 🔴 P0: High Priority
  - 🟠 P1: Mid Priority
  - 🟡 P2: Low Priority
- Three boards (To do, In progress, and Done) display tickets based on their resolution status.
- Workflow:
  - `git` has been used to handle the workflow and version control.
  - A main workflow associated with the `main` branch is established, and finished tickets are merged into it via `pull requests`.
  - Ticket branches follow the `feat/xxx` and `test/yyy` patterns.
  - Once a ticket is resolved, the branch with the resolved issue is merged with `main` using a `pull request` with a `squash` approach.

## 🏁 **Getting Started**

### 🛠 **System Requirements**

- `node: v18`
- `npm: v8`

### 🏗 **Project Installation**

```bash
# Clone this repository
$ git clone https://github.com/acalvom/gastos-compartidos-autentia.git

# Navigate to the repository
$ cd gastos-compartidos-autentia
```

➡️ **_Option 🅰️: Run in local environment_**

```bash
# Install dependencies
$ gastos-compartidos-autentia > npm install

# Run the app
$ npm run dev
```


➡️ **_Option 🅱️: Run in Docker_**

⚠️ Note: Docker must be installed on your machine.

```bash
# Build the Docker image with the name `gastos-compartidos-autentia`. This might take some time.
$ docker build -t gastos-compartidos-autentia .

# Check the created image
$ docker image ls

# Run the image `gastos-compartidos-autentia` in the container `gastos-compartidos-autentia-container`, exposing port 3000
$ docker run --name gastos-compartidos-autentia-container -p 3000:3000 -d gastos-compartidos-autentia

# Open `http://localhost:3000/` to access the app running in the Docker container
```

### 🧾 Hightlighted scripts in `package.json`

```bash
# Run the app in localhost (PORT: 3000)
$ npm run dev

# Build the app
$ npm run build

# Run unit tests
$ npm run test

# Run e2e tests
$ npm run cypress:open
```

### [☁ Vercel deployment](https://gastos-compartidos-autentia.vercel.app/)

### 🫂 **You can reach me at:**

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/acalvom"><img src="https://avatars.githubusercontent.com/u/34605171?s=88&v=4" width="100px;" alt="acalvom"/><br /><sub><b>acalvom
      </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<br>
