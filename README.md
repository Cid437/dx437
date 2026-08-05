# Study Reviewer

A simple, static study reviewer with **Notes** and **Quizzes** sections, built with
plain HTML/CSS/JS so it works directly on GitHub Pages — no build step, no backend.

## Folder structure

```
├── index.html                 Home page (links into Notes and Quizzes)
├── .nojekyll                  Tells GitHub Pages not to run Jekyll processing
├── assets/
│   ├── css/style.css          Shared stylesheet for the whole site
│   └── js/quiz-engine.js      Shared quiz logic — used by every quiz topic
├── notes/
│   ├── index.html             Notes hub (lists every note topic)
│   ├── javascript/index.html  JavaScript Fundamentals notes
│   └── nodejs/index.html      Node.js notes
└── quizzes/
    ├── index.html             Quizzes hub (lists every quiz topic)
    ├── javascript/
    │   ├── index.html         Thin page that loads data.js + quiz-engine.js
    │   └── data.js            JavaScript Fundamentals questions (data only)
    └── nodejs/
        ├── index.html
        └── data.js            Node.js questions (data only)
```

Every page uses **relative paths** (`../assets/...`, `../../assets/...` etc.),
so the site works whether it's opened from a local folder, hosted at the root
of a domain, or hosted under a GitHub Pages project URL like
`https://<username>.github.io/<repo-name>/`.

## How the quiz system works

- `assets/js/quiz-engine.js` is the **only** file with quiz logic (shuffling,
  scoring, rendering questions, showing results). It is completely generic —
  it knows nothing about JavaScript or Node.js specifically.
- Each topic has its own `data.js` that defines `window.QUIZ_DATA` — just a
  title and a set of question sets. No logic lives in these files.
- A topic's `index.html` is a thin shell: it includes `data.js`, then
  `quiz-engine.js`, and has two empty containers (`#set-selection`, `#quiz`)
  that the engine fills in.

Because logic and content are separated, adding a new topic or new questions
never requires touching `quiz-engine.js`.

## Adding new notes

1. Create a folder under `notes/`, e.g. `notes/python/`.
2. Copy `notes/javascript/index.html` into it as a starting template.
3. Update the `<title>`, breadcrumb, page heading, and the content inside
   `.notes-content` (plain HTML — headings, paragraphs, lists, `<pre><code>`
   blocks for code samples).
4. Add a link to the new page in `notes/index.html` and, optionally, in the
   "Notes" section of the root `index.html`.

## Adding a new quiz topic

1. Create a folder under `quizzes/`, e.g. `quizzes/python/`.
2. Add a `data.js` file following the same shape as
   `quizzes/nodejs/data.js`:

   ```js
   window.QUIZ_DATA = {
     title: "Python",
     sets: {
       A: {
         label: "Set A — Fundamentals",
         questions: [
           { q: "Question text?", options: ["a", "b", "c", "d"], answer: 0 }
         ]
       }
       // add more sets (B, C, ...) the same way
     }
   };
   ```

3. Copy `quizzes/nodejs/index.html` into the new folder and update the
   `<title>`, breadcrumb, and page heading. The `<script>` tags at the bottom
   stay the same — you don't need to touch `quiz-engine.js`.
4. Link the new topic from `quizzes/index.html` and, optionally, from the
   root `index.html`.

## Adding new quiz questions to an existing topic

Open the topic's `data.js` and add an object to the relevant set's
`questions` array:

```js
{ q: "Which method removes the last item from an array?", options: ["pop()", "push()", "shift()", "slice()"], answer: 0 }
```

`answer` is the zero-based index of the correct option. That's it — no other
file needs to change.

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch",
   pick your branch (e.g. `main`) and the `/ (root)` folder.
4. Save. GitHub will publish the site at
   `https://<username>.github.io/<repo-name>/`.

No further configuration is needed — all paths are relative, and
`.nojekyll` prevents GitHub's Jekyll processor from ignoring files/folders
that start with an underscore (not currently used here, but this keeps the
project safe if that ever changes).
