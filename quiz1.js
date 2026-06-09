// reviewer.js

const sets = {
  A: [
    { q: "Which keyword declares a block-scoped variable?", options: ["var","let","const","function"], answer: 1 },
    { q: "What does '===' check?", options: ["Value only","Type only","Value and Type","None"], answer: 2 },
    { q: "Which method converts JSON string to object?", options: ["JSON.parse()","JSON.stringify()","toObject()","parseJSON()"], answer: 0 },
    { q: "What is the default value of 'this' in Node.js modules?", options: ["global","module.exports","window","undefined"], answer: 1 },
    { q: "Which Node.js module is used to create a server?", options: ["fs","http","url","net"], answer: 1 },
    { q: "Which array method returns a new array with elements that pass a test?", options: ["map()","filter()","reduce()","forEach()"], answer: 1 },
    { q: "In Node.js, which object is used to handle events?", options: ["EventEmitter","Listener","Callback","Promise"], answer: 0 },
    { q: "Which keyword stops execution in a loop?", options: ["stop","break","exit","return"], answer: 1 },
    { q: "Which operator spreads elements of an array?", options: ["...","=>","??","**"], answer: 0 },
    { q: "Which Node.js module is used for file operations?", options: ["path","fs","os","util"], answer: 1 },
    { q: "Which function schedules code after a delay?", options: ["setTimeout()","setInterval()","delay()","wait()"], answer: 0 },
    { q: "Which keyword defines a constant in JavaScript?", options: ["let","var","const","static"], answer: 2 },
    { q: "Which Node.js global object represents the current process?", options: ["process","global","console","module"], answer: 0 },
    { q: "Which array method executes a function for each element?", options: ["map()","forEach()","filter()","reduce()"], answer: 1 },
    { q: "Which Node.js module provides utilities for working with file paths?", options: ["fs","path","url","os"], answer: 1 },
    { q: "Which keyword creates a class in JavaScript?", options: ["object","class","prototype","new"], answer: 1 },
    { q: "Which Node.js method reads environment variables?", options: ["process.env","os.env","global.env","env.get()"], answer: 0 },
    { q: "Which array method reduces values to a single result?", options: ["map()","filter()","reduce()","concat()"], answer: 2 },
    { q: "Which Node.js module provides operating system info?", options: ["os","fs","path","net"], answer: 0 },
    { q: "Which keyword is used for asynchronous functions?", options: ["async","await","promise","defer"], answer: 0 }
  ],

  B: [
    { q: "Which Node.js function writes to console?", options: ["log()","console.log()","print()","echo()"], answer: 1 },
    { q: "Which array method adds elements at the end?", options: ["push()","pop()","shift()","unshift()"], answer: 0 },
    { q: "Which Node.js module handles URLs?", options: ["path","url","fs","net"], answer: 1 },
    { q: "Which keyword is used to handle errors?", options: ["try/catch","error","throw","handle"], answer: 0 },
    { q: "Which Node.js method exits the process?", options: ["process.exit()","exit()","stop()","quit()"], answer: 0 },
    { q: "Which array method removes the last element?", options: ["pop()","push()","shift()","splice()"], answer: 0 },
    { q: "Which Node.js module provides cryptographic functions?", options: ["crypto","fs","net","util"], answer: 0 },
    { q: "Which keyword is used to export modules?", options: ["export","module.exports","require","include"], answer: 1 },
    { q: "Which Node.js function imports modules?", options: ["import()","require()","include()","load()"], answer: 1 },
    { q: "Which array method creates a shallow copy?", options: ["slice()","splice()","concat()","copy()"], answer: 0 },
    { q: "Which array method finds the first matching element?", options: ["find()","filter()","map()","reduce()"], answer: 0 },
    { q: "Which Node.js module provides networking capabilities?", options: ["net","fs","path","os"], answer: 0 },
    { q: "Which keyword is used to throw exceptions?", options: ["throw","error","raise","exception"], answer: 0 },
    { q: "Which array method joins elements into a string?", options: ["join()","concat()","toString()","reduce()"], answer: 0 },
    { q: "Which Node.js module provides compression?", options: ["zlib","fs","path","os"], answer: 0 },
    { q: "Which keyword is used to import ES modules?", options: ["require","import","include","load"], answer: 1 },
    { q: "Which array method sorts elements?", options: ["sort()","order()","arrange()","sequence()"], answer: 0 },
    { q: "Which Node.js module provides debugging utilities?", options: ["util","fs","path","os"], answer: 0 },
    { q: "Which keyword is used to define a generator function?", options: ["function*","gen","yield","async"], answer: 0 },
    { q: "Which array method reverses elements?", options: ["reverse()","flip()","invert()","swap()"], answer: 0 }
  ],

  C: [
    { q: "Which Node.js module provides HTTPS support?", options: ["https","http","net","tls"], answer: 0 },
    { q: "Which array method removes the first element?", options: ["shift()","unshift()","pop()","splice()"], answer: 0 },
    { q: "Which keyword is used to declare variables globally in Node.js?", options: ["var","let","const","global"], answer: 0 },
    { q: "Which Node.js module provides child process functionality?", options: ["child_process","fs","path","os"], answer: 0 },
    { q: "Which array method flattens nested arrays?", options: ["flat()","flatten()","concat()","reduce()"], answer: 0 },
    { q: "Which keyword is used with promises to wait?", options: ["await","async","defer","yield"], answer: 0 },
    { q: "Which Node.js module provides buffer handling?", options: ["buffer","fs","path","net"], answer: 0 },
    { q: "Which array method checks if at least one element passes a test?", options: ["some()","every()","filter()","find()"], answer: 0 },
    { q: "Which Node.js module provides timers?", options: ["timers","time","clock","schedule"], answer: 0 },
    { q: "Which keyword is used to define private class fields?", options: ["#","private","_","hidden"], answer: 0 },
    { q: "Which array method returns the index of the first match?", options: ["indexOf()","findIndex()","search()","locate()"], answer: 1 },
    { q: "Which Node.js module provides DNS lookup?", options: ["dns","net","url","path"], answer: 0 },
    { q: "Which keyword is used to stop function execution?", options: ["return","break","exit","stop"], answer: 0 },
    { q: "Which array method creates a new array by applying a function?", options: ["map()","forEach()","reduce()","filter()"], answer: 0 },
    { q: "Which Node.js module provides TLS/SSL support?", options: ["tls","ssl","https","crypto"], answer: 0 },
    { q: "Which keyword is used to define default exports in ES modules?", options: ["export default","module.exports","require","include"], answer: 0 },
    { q: "Which array method tests if all elements pass a condition?", options: ["every()","some()","filter()","reduce()"], answer: 0 },
    { q: "Which Node.js module provides performance measurement?", options: ["perf_hooks","util","os","timers"], answer: 0 },
    { q: "Which keyword is used to pause generator functions?", options: ["yield","await","pause","stop"], answer: 0 },
    { q: "Which array method concatenates arrays?", options: ["concat()","join()","merge()","append()"], answer: 0 }
  ]
};

// Shuffle helper
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Ask user to pick a set
let chosenSet = prompt("Choose a set: A, B, or C").toUpperCase();

// Default to Set A if invalid
let questions = sets[chosenSet] || sets.A;

// Shuffle questions
shuffle(questions);

let current = 0;
let score = 0;

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

    document.getElementById("result").textContent =
      `🎉 Quiz finished! Your score: ${score}/${questions.length}`;
  }
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

// Start quiz
showQuestion();