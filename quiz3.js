// node js focused questions

const sets = {
  A: [
  {
    q: "Which core Node.js module is used to read and write files?",
    options: ["http", "path", "fs", "os"],
    answer: 2
  },
  {
    q: "Which core Node.js module is used to create an HTTP server?",
    options: ["net", "http", "url", "stream"],
    answer: 1
  },
  {
    q: "Which function is used to load a module in CommonJS?",
    options: ["import()", "load()", "require()", "fetch()"],
    answer: 2
  },
  {
    q: "Which object is used to export functions or values from a CommonJS module?",
    options: ["exports.module", "module.exports", "export.default", "module.require"],
    answer: 1
  },
  {
    q: "Which Node.js global object provides information about the current process?",
    options: ["global", "runtime", "process", "system"],
    answer: 2
  },
  {
    q: "How do you access an environment variable called PORT in Node.js?",
    options: ["env.PORT", "global.PORT", "process.env.PORT", "os.env.PORT"],
    answer: 2
  },
  {
    q: "Which method of the 'fs' module reads a file asynchronously?",
    options: ["fs.openFile()", "fs.readFile()", "fs.getFile()", "fs.loadFile()"],
    answer: 1
  },
  {
    q: "Which method of the 'fs' module writes to a file asynchronously?",
    options: ["fs.saveFile()", "fs.putFile()", "fs.writeFile()", "fs.exportFile()"],
    answer: 2
  },
  {
    q: "Which Node.js module is used to work with file and directory paths?",
    options: ["dir", "path", "url", "fs"],
    answer: 1
  },
  {
    q: "Which 'path' method joins multiple path segments into one?",
    options: ["path.resolve()", "path.merge()", "path.join()", "path.concat()"],
    answer: 2
  },
  {
    q: "Which Node.js module provides cryptographic functionality?",
    options: ["hash", "secure", "crypto", "cipher"],
    answer: 2
  },
  {
    q: "Which command installs a package locally using npm?",
    options: ["npm get <package>", "npm add <package>", "npm fetch <package>", "npm install <package>"],
    answer: 3
  },
  {
    q: "Which file lists all npm dependencies for a Node.js project?",
    options: ["node.config.js", "package.json", "dependencies.json", "npm.lock"],
    answer: 1
  },
  {
    q: "Which npm command saves a package as a development-only dependency?",
    options: ["npm install <pkg> --dev", "npm install <pkg> --save-dev", "npm install <pkg> --development", "npm install <pkg> --optional"],
    answer: 1
  },
  {
    q: "What does the 'node_modules' folder contain?",
    options: ["Your project's source code", "Node.js core files", "Installed npm packages", "Compiled binaries"],
    answer: 2
  },
  {
    q: "Which HTTP method is typically used to create a new resource in a REST API?",
    options: ["GET", "PUT", "DELETE", "POST"],
    answer: 3
  },
  {
    q: "Which HTTP method is typically used to retrieve data from a REST API?",
    options: ["POST", "PATCH", "GET", "HEAD"],
    answer: 2
  },
  {
    q: "Which HTTP status code indicates a successful response?",
    options: ["404", "500", "301", "200"],
    answer: 3
  },
  {
    q: "Which keyword is used to declare an asynchronous function in Node.js?",
    options: ["defer", "await", "promise", "async"],
    answer: 3
  },
  {
    q: "Which keyword pauses execution inside an async function until a Promise resolves?",
    options: ["yield", "pause", "await", "hold"],
    answer: 2
  }
  ],

  B: [
  {
    q: "You need to read the contents of 'config.json' in a Node.js app. Which module should you use?",
    options: ["http", "path", "os", "fs"],
    answer: 3
  },
  {
    q: "A teammate shares a Node.js project and you need to install its dependencies. Which command should you run?",
    options: ["npm start", "npm run build", "npm install", "node install"],
    answer: 2
  },
  {
    q: "You need to create a basic HTTP server that responds with 'Hello World'. Which module should you use?",
    options: ["fs", "path", "http", "net"],
    answer: 2
  },
  {
    q: "You need to generate a random, cryptographically secure token for a password reset feature. Which Node.js module should you use?",
    options: ["fs", "os", "path", "crypto"],
    answer: 3
  },
  {
    q: "You want to check the current operating system your Node.js app is running on. Which module provides this information?",
    options: ["process", "os", "sys", "runtime"],
    answer: 1
  },
  {
    q: "You are building a REST API and need to handle a route that creates a new user. Which HTTP method should you use?",
    options: ["GET", "DELETE", "POST", "PATCH"],
    answer: 2
  },
  {
    q: "Your Node.js server receives a request body as a JSON string. Which method should you call before accessing its properties?",
    options: ["JSON.stringify()", "Buffer.from()", "JSON.parse()", "decodeURI()"],
    answer: 2
  },
  {
    q: "You want to build a URL path safely across different operating systems. Which method should you use?",
    options: ["path.join()", "url.resolve()", "fs.buildPath()", "path.merge()"],
    answer: 0
  },
  {
    q: "You need to store a database password for a Node.js app without hardcoding it. What is the recommended approach?",
    options: ["Hardcode it in server.js", "Store it in package.json", "Use an environment variable", "Put it in node_modules"],
    answer: 2
  },
  {
    q: "A package you only need during development (e.g., a test runner) should be installed how?",
    options: ["npm install <pkg>", "npm install <pkg> --save-dev", "npm install <pkg> --global", "npm install <pkg> --prod"],
    answer: 1
  },
  {
    q: "You want to share a utility function from 'helpers.js' so other files can use it. What should you do?",
    options: ["Use import helpers", "Write module.exports = { yourFunction }", "Declare it with global.yourFunction", "Add it to package.json"],
    answer: 1
  },
  {
    q: "You want to use the helper function from 'helpers.js' inside 'app.js'. Which statement should you use?",
    options: ["import { yourFunction } from './helpers'", "const { yourFunction } = require('./helpers')", "load('./helpers')", "include './helpers'"],
    answer: 1
  },
  {
    q: "Your async function calls a database and might fail. Which structure should you wrap it in?",
    options: ["if/else", "switch", "try/catch", "for loop"],
    answer: 2
  },
  {
    q: "You need to wait for a file to be read before processing its contents in an async function. Which keyword should you use?",
    options: ["then", "yield", "defer", "await"],
    answer: 3
  },
  {
    q: "Your Express app receives a POST request and you cannot access req.body — it shows as undefined. What is most likely missing?",
    options: ["A response header", "A middleware to parse JSON like express.json()", "A GET route for the same path", "A crypto token"],
    answer: 1
  },
  {
    q: "You want to run a script called 'start' defined in package.json. Which command should you use?",
    options: ["node start", "npm run start", "require('start')", "node package.json start"],
    answer: 1
  },
  {
    q: "You need to send a 404 status with a message when a route is not found in your Node.js HTTP server. Which method sets the status code?",
    options: ["res.code(404)", "res.status = 404", "res.writeHead(404)", "res.send(404)"],
    answer: 2
  },
  {
    q: "You want to find the directory name of a file path like '/home/user/app/server.js'. Which path method gives you '/home/user/app'?",
    options: ["path.basename()", "path.extname()", "path.dirname()", "path.resolve()"],
    answer: 2
  },
  {
    q: "A Node.js app needs to handle many concurrent requests without blocking. What feature of Node.js enables this?",
    options: ["Multi-threading", "Child processes", "The event loop and non-blocking I/O", "The V8 garbage collector"],
    answer: 2
  },
  {
    q: "You want to delete a file from the filesystem in Node.js. Which fs method should you use?",
    options: ["fs.removeFile()", "fs.deleteFile()", "fs.unlink()", "fs.destroy()"],
    answer: 2
  }
  ],

  C: [
  {
    q: "What is wrong with this code?\n\nconst data = fs.readFile('info.txt', 'utf8');\nconsole.log(data);",
    options: [
      "readFile doesn't accept a string path",
      "fs.readFile is asynchronous — data will be undefined without a callback or await",
      "utf8 is not a valid encoding",
      "Nothing is wrong"
    ],
    answer: 1
  },
  {
    q: "A developer writes this but gets 'fs is not defined'. What is missing?\n\nfs.readFile('notes.txt', 'utf8', (err, data) => {\n  console.log(data);\n});",
    options: [
      "npm install fs",
      "import fs from 'node:fs'",
      "const fs = require('fs');",
      "global.fs = true"
    ],
    answer: 2
  },
  {
    q: "What will this server always respond with, and is it correct behavior?\n\nconst http = require('http');\nhttp.createServer((req, res) => {\n  res.end('OK');\n}).listen(3000);",
    options: [
      "Error — res.end() is not a valid method",
      "It responds to every request with 'OK' and status 200 — valid but no status control",
      "It only handles GET requests",
      "It will crash because listen() needs a callback"
    ],
    answer: 1
  },
  {
    q: "Spot the bug:\n\napp.get('/users', (req, res) => {\n  const users = getUsers();\n  res.json(users);\n});\n\ngetUsers() calls a database asynchronously but is not awaited.",
    options: [
      "res.json() doesn't accept arrays",
      "getUsers() must be declared before app.get()",
      "The function should be async and getUsers() should be awaited",
      "app.get() should be app.post() for database calls"
    ],
    answer: 2
  },
  {
    q: "What is wrong with this export?\n\n// math.js\nfunction add(a, b) { return a + b; }\n\nmodule.export = { add };",
    options: [
      "You cannot export a function this way",
      "It should be module.exports (plural), not module.export",
      "add() must use arrow function syntax",
      "Nothing is wrong"
    ],
    answer: 1
  },
  {
    q: "A developer wants to read PORT from the environment but always gets undefined. What is wrong?\n\nconst port = process.PORT;",
    options: [
      "PORT must be uppercase in the .env file",
      "process.PORT is incorrect — it should be process.env.PORT",
      "You must import process before using it",
      "Nothing is wrong"
    ],
    answer: 1
  },
  {
    q: "What will happen when this code runs?\n\nconst fs = require('fs');\nfs.readFile('missing.txt', 'utf8', (err, data) => {\n  console.log(data);\n});",
    options: [
      "It throws a fatal error and crashes",
      "data will be null and err will contain the error — but the crash can be prevented by checking err",
      "It creates missing.txt automatically",
      "Nothing — callbacks are ignored"
    ],
    answer: 1
  },
  {
    q: "What is the output?\n\nconst path = require('path');\nconsole.log(path.join('/home', 'user', 'app'));",
    options: [
      "/home/user/app",
      "home\\user\\app",
      "/home user app",
      "Error"
    ],
    answer: 0
  },
  {
    q: "A developer writes this and wonders why req.body is undefined in Express:\n\napp.post('/data', (req, res) => {\n  console.log(req.body);\n});",
    options: [
      "POST routes don't support req.body",
      "They forgot to add app.use(express.json()) middleware",
      "req.body only works with GET requests",
      "They need to install the 'body' npm package"
    ],
    answer: 1
  },
  {
    q: "What does this code do?\n\nmodule.exports = function greet(name) {\n  return `Hello, ${name}`;\n};",
    options: [
      "It defines a greet variable globally",
      "It creates a class named greet",
      "It exports a greet function so other files can require() and use it",
      "It throws an error — functions cannot be exported this way"
    ],
    answer: 2
  },
  {
    q: "What is wrong?\n\nasync function fetchData() {\n  const result = fetch('https://api.example.com/data');\n  console.log(result);\n}",
    options: [
      "fetch() is not available in Node.js older than v18",
      "await is missing before fetch() — result will be a Promise, not the data",
      "async functions cannot use fetch()",
      "Both A and B could be issues depending on context"
    ],
    answer: 3
  },
  {
    q: "A developer runs 'node app.js' and gets: 'Cannot find module ./config'. What is the most likely cause?",
    options: [
      "config.js does not exist or the path is wrong",
      "Node.js cannot import local files",
      "require() is deprecated",
      "config.js must be in node_modules"
    ],
    answer: 0
  },
  {
    q: "What HTTP status code should be returned when a requested resource does not exist?",
    options: [
      "200",
      "401",
      "500",
      "404"
    ],
    answer: 3
  },
  {
    q: "What will this output?\n\nconst path = require('path');\nconsole.log(path.extname('server.js'));",
    options: [
      "server",
      ".js",
      "js",
      "server.js"
    ],
    answer: 1
  },
  {
    q: "A developer uses try/catch with async/await but errors are still unhandled. What is wrong?\n\napp.get('/', async (req, res) => {\n  const data = await getData();\n  res.json(data);\n});",
    options: [
      "async route handlers are not supported in Express",
      "There is no try/catch — if getData() throws, the error is uncaught",
      "res.json() should be res.send()",
      "Nothing is wrong"
    ],
    answer: 1
  },
  {
    q: "What is wrong?\n\nnpm install express --save-development",
    options: [
      "express cannot be installed with npm",
      "The flag should be --save-dev, not --save-development",
      "npm install requires sudo",
      "Nothing is wrong"
    ],
    answer: 1
  },
  {
    q: "What will this code output?\n\nconst os = require('os');\nconsole.log(os.platform());",
    options: [
      "The Node.js version",
      "The current working directory",
      "The name of the current operating system platform (e.g., 'linux', 'win32')",
      "The hostname of the machine"
    ],
    answer: 2
  },
  {
    q: "What is wrong with this CommonJS import?\n\nconst { add } = require('./math');\n\n// math.js exports:\nmodule.exports = add;",
    options: [
      "require() doesn't support destructuring",
      "math.js exports add directly, not as an object — it should be: const add = require('./math')",
      "add must be declared with const inside math.js",
      "Nothing is wrong"
    ],
    answer: 1
  },
  {
    q: "What will happen if you call fs.writeFile() with a filename that doesn't exist yet?",
    options: [
      "It throws an error — the file must already exist",
      "It creates the file and writes the content",
      "It writes to a temp file instead",
      "Nothing — writeFile only updates existing files"
    ],
    answer: 1
  },
  {
    q: "A developer wants their Express app to serve static files from a 'public' folder. Which line should they add?\n\napp.____(__dirname + '/public');",
    options: [
      "app.static()",
      "app.files()",
      "app.use(express.static())",
      "app.send()"
    ],
    answer: 2
  }
  ]
};

// Shuffle helper
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let chosenSet = null;
let questions = [];
let current = 0;
let score = 0;

function startQuiz(setName) {

  chosenSet = setName;

  questions = [...sets[setName]];
  shuffle(questions);

  current = 0;
  score = 0;

  document.getElementById("result").textContent = "";
  document.getElementById("setSelection").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  showQuestion();
}

function showQuestion() {

  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  if (current < questions.length) {

    const q = questions[current];

    const qElem = document.createElement("div");
    qElem.className = "question";

    // Show question number
    qElem.textContent =
      `Question ${current + 1} of ${questions.length}: ${q.q}`;

    quizDiv.appendChild(qElem);

    const optsDiv = document.createElement("div");
    optsDiv.className = "options";

    q.options.forEach((opt, i) => {

      const btn = document.createElement("button");
      btn.textContent = opt;

      btn.onclick = () => checkAnswer(i);

      optsDiv.appendChild(btn);
    });

    quizDiv.appendChild(optsDiv);

  } else {

  const quizDiv = document.getElementById("quiz");

  quizDiv.innerHTML = `
    <h2>🎉 Quiz Finished!</h2>
    <p>Your Score: ${score}/${questions.length}</p>

    <h3>Would you like to try another set?</h3>

    <button onclick="showSetSelection()">
      Choose Another Set
    </button>
  `;
}
}

function showSetSelection() {

  document.getElementById("quiz").innerHTML = "";

  document.getElementById("setSelection").style.display = "block";

  current = 0;
  score = 0;
  questions = [];
}

function checkAnswer(selected) {

  if (selected === questions[current].answer) {

    alert("✅ Correct!");
    score++;

  } else {

    alert(
      "❌ Wrong! Correct answer: " +
      questions[current].options[questions[current].answer]
    );
  }

  current++;
  showQuestion();
}

document.getElementById("quiz").innerHTML =
  "<h3>Select a quiz set to begin.</h3>";