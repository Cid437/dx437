// reviewer.js

const sets = {
  A: [
  {
    q: "Which keyword declares a block-scoped variable?",
    options: ["var", "let", "function", "new"],
    answer: 1
  },
  {
    q: "Which keyword is used to declare a constant?",
    options: ["var", "let", "const", "static"],
    answer: 2
  },
  {
    q: "What does '===' compare?",
    options: ["Value only", "Type only", "Value and type", "References only"],
    answer: 2
  },
  {
    q: "Which value represents 'no value assigned' in JavaScript?",
    options: ["null", "false", "undefined", "0"],
    answer: 2
  },
  {
    q: "Which function prints output to the console?",
    options: ["print()", "console.log()", "echo()", "write()"],
    answer: 1
  },
  {
    q: "Which method converts a JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "parseJSON()", "toObject()"],
    answer: 1
  },
  {
    q: "Which method converts a JavaScript object into a JSON string?",
    options: ["JSON.parse()", "JSON.object()", "JSON.stringify()", "toJSON()"],
    answer: 2
  },
  {
    q: "Which symbol is used for single-line comments?",
    options: ["/* */", "//", "#", "<!-- -->"],
    answer: 1
  },
  {
    q: "Which keyword is used to create a function?",
    options: ["func", "method", "function", "define"],
    answer: 2
  },
  {
    q: "Which keyword is used to return a value from a function?",
    options: ["break", "exit", "return", "yield"],
    answer: 2
  },
  {
    q: "Which data type is returned by typeof 'Hello'?",
    options: ["text", "string", "char", "word"],
    answer: 1
  },
  {
    q: "Which operator is used to assign a value to a variable?",
    options: ["==", "===", "=", ":"],
    answer: 2
  },
  {
    q: "Which array method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0
  },
  {
    q: "Which array method removes the last element of an array?",
    options: ["push()", "shift()", "splice()", "pop()"],
    answer: 3
  },
  {
    q: "Which keyword is used to create a class?",
    options: ["object", "class", "prototype", "new"],
    answer: 1
  },
  {
    q: "Which keyword is used to create an object from a class?",
    options: ["new", "class", "create", "instance"],
    answer: 0
  },
  {
    q: "Which Node.js module is commonly used for file operations?",
    options: ["path", "fs", "http", "os"],
    answer: 1
  },
  {
    q: "Which Node.js module is commonly used to create web servers?",
    options: ["fs", "http", "url", "os"],
    answer: 1
  },
  {
    q: "Which global object provides information about the currently running Node.js process?",
    options: ["global", "module", "process", "runtime"],
    answer: 2
  },
  {
    q: "Which keyword is used to define an asynchronous function?",
    options: ["await", "promise", "async", "defer"],
    answer: 2
  }
  ],

  B: [
  {
    q: "You have an array of numbers and want to create a new array where each number is doubled. Which method should you use?",
    options: ["filter()", "map()", "forEach()", "find()"],
    answer: 1
  },
  {
    q: "You want to keep only students with grades above 75 from an array. Which method is most appropriate?",
    options: ["map()", "reduce()", "filter()", "join()"],
    answer: 2
  },
  {
    q: "You need to execute code exactly 5 seconds after a user clicks a button. Which function should you use?",
    options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
    answer: 1
  },
  {
    q: "You want a function to run repeatedly every second. Which function should you use?",
    options: ["setTimeout()", "setInterval()", "repeat()", "loop()"],
    answer: 1
  },
  {
    q: "A configuration file contains JSON text. Which function should you use before accessing its properties?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
    answer: 1
  },
  {
    q: "You need to read the contents of a file in a Node.js application. Which module should you use?",
    options: ["path", "http", "fs", "os"],
    answer: 2
  },
  {
    q: "You need to build a basic web server in Node.js. Which module is commonly used?",
    options: ["path", "fs", "http", "crypto"],
    answer: 2
  },
  {
    q: "You want to combine two arrays into one array. Which method should you use?",
    options: ["join()", "concat()", "push()", "merge()"],
    answer: 1
  },
  {
    q: "You need to find the first user whose username is 'admin'. Which array method is most appropriate?",
    options: ["filter()", "map()", "find()", "reduce()"],
    answer: 2
  },
  {
    q: "You need to calculate the total sum of all numbers in an array. Which method is designed for this task?",
    options: ["reduce()", "filter()", "map()", "find()"],
    answer: 0
  },
  {
    q: "You want to load a local CommonJS module named 'user.js'. Which statement should you use?",
    options: ["import user", "require('./user')", "load('user')", "include('user')"],
    answer: 1
  },
  {
    q: "You need to export a function from a CommonJS module. Which approach should you use?",
    options: ["module.exports", "require()", "import", "load()"],
    answer: 0
  },
  {
    q: "You need to access an environment variable called PORT. Which expression should you use?",
    options: ["env.PORT", "global.PORT", "process.env.PORT", "os.env.PORT"],
    answer: 2
  },
  {
    q: "You want to create a copy of an array without modifying the original. Which method should you use?",
    options: ["splice()", "slice()", "pop()", "shift()"],
    answer: 1
  },
  {
    q: "You need to sort an array of values alphabetically. Which method should you use?",
    options: ["arrange()", "order()", "sort()", "sequence()"],
    answer: 2
  },
  {
    q: "A user uploads a file and you need to determine its path information. Which Node.js module would be most useful?",
    options: ["path", "http", "crypto", "timers"],
    answer: 0
  },
  {
    q: "You need to securely generate a random token for password resets. Which Node.js module should you use?",
    options: ["fs", "crypto", "path", "http"],
    answer: 1
  },
  {
    q: "You want to pause execution until a Promise resolves inside an async function. Which keyword should you use?",
    options: ["yield", "pause", "await", "wait"],
    answer: 2
  },
  {
    q: "You need to handle an operation that might throw an error. Which structure should you use?",
    options: ["if/else", "switch", "try/catch", "while"],
    answer: 2
  },
  {
    q: "You want to remove the first item from an array of queued tasks. Which method should you use?",
    options: ["shift()", "pop()", "push()", "unshift()"],
    answer: 0
  }
  ],

  C: [
  {
    q: "What is wrong with this code?\n\nconst age = 18;\nage = 20;",
    options: [
      "Nothing is wrong",
      "const variables cannot be reassigned",
      "age must be a string",
      "const is deprecated"
    ],
    answer: 1
  },

  {
    q: "What will this code output?\n\nconsole.log(2 + '2');",
    options: [
      "4",
      "22",
      "NaN",
      "Error"
    ],
    answer: 1
  },

  {
    q: "Spot the bug:\n\nif (score = 100) {\n console.log('Perfect');\n}",
    options: [
      "Should use == or === instead of =",
      "if statements cannot use numbers",
      "console.log is invalid",
      "score must be declared with const"
    ],
    answer: 0
  },

  {
    q: "What will be printed?\n\nconsole.log(typeof null);",
    options: [
      "null",
      "object",
      "undefined",
      "boolean"
    ],
    answer: 1
  },

  {
    q: "A developer writes:\n\nfs.readFile('data.txt');\n\nbut gets 'fs is not defined'. What is missing?",
    options: [
      "npm install fs",
      "const fs = require('fs');",
      "JSON.parse(fs)",
      "process.fs()"
    ],
    answer: 1
  },

  {
    q: "Which method should replace the blank?\n\nconst adults = users.____(u => u.age >= 18);",
    options: [
      "map",
      "find",
      "filter",
      "reduce"
    ],
    answer: 2
  },

  {
    q: "What will this code return?\n\n[1,2,3].map(x => x * 2)",
    options: [
      "[1,2,3]",
      "[2,4,6]",
      "6",
      "Error"
    ],
    answer: 1
  },

  {
    q: "A developer wants to wait for a Promise before continuing execution. Which line should replace the blank?\n\nasync function load() {\n ____ fetchData();\n}",
    options: [
      "yield",
      "pause",
      "await",
      "return"
    ],
    answer: 2
  },

  {
    q: "What is the output?\n\nconsole.log(Boolean(''));",
    options: [
      "true",
      "false",
      "null",
      "undefined"
    ],
    answer: 1
  },

  {
    q: "What happens when this code runs?\n\nconst arr = [1,2,3];\narr.push(4);",
    options: [
      "Error",
      "arr becomes [1,2,3,4]",
      "arr becomes [4,1,2,3]",
      "Nothing happens"
    ],
    answer: 1
  },

  {
    q: "A server crashes due to an uncaught error. Which structure could help handle the error safely?",
    options: [
      "switch",
      "if",
      "try/catch",
      "for loop"
    ],
    answer: 2
  },

  {
    q: "What is printed?\n\nconsole.log([1,2,3].length);",
    options: [
      "2",
      "3",
      "4",
      "undefined"
    ],
    answer: 1
  },

  {
    q: "A developer wants the first matching user only. Which method should be used?",
    options: [
      "filter()",
      "find()",
      "map()",
      "reduce()"
    ],
    answer: 1
  },

  {
    q: "What will this code output?\n\nconsole.log(5 == '5');",
    options: [
      "true",
      "false",
      "Error",
      "undefined"
    ],
    answer: 0
  },

  {
    q: "What will this code output?\n\nconsole.log(5 === '5');",
    options: [
      "true",
      "false",
      "Error",
      "undefined"
    ],
    answer: 1
  },

  {
    q: "A Node.js application needs to read PORT from environment variables. Which line is correct?",
    options: [
      "process.env.PORT",
      "env.PORT",
      "global.PORT",
      "os.PORT"
    ],
    answer: 0
  },

  {
    q: "What is the output?\n\nconsole.log('3' * 2);",
    options: [
      "32",
      "6",
      "NaN",
      "Error"
    ],
    answer: 1
  },

  {
    q: "Which statement correctly imports a CommonJS module named math.js?",
    options: [
      "require('./math')",
      "import('./math')",
      "load('./math')",
      "include('./math')"
    ],
    answer: 0
  },

  {
    q: "What is wrong with this code?\n\nconst user = { name: 'John' };\nuser = { name: 'Jane' };",
    options: [
      "Objects cannot be stored in const",
      "name is reserved",
      "const variables cannot be reassigned",
      "Nothing is wrong"
    ],
    answer: 2
  },

  {
    q: "A developer expects this code to stop a loop immediately:\n\nfor(let i=0;i<10;i++){\n if(i===5){\n  ____;\n }\n}\n\nWhich keyword should replace the blank?",
    options: [
      "stop",
      "exit",
      "break",
      "return"
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