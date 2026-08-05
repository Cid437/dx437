/**
 * quiz-engine.js
 * ---------------------------------------------------------------------
 * Generic quiz runner shared by EVERY quiz topic.
 *
 * A topic page only needs to:
 *   1. Load its own data file (e.g. quizzes/nodejs/data.js), which
 *      defines `window.QUIZ_DATA` — see any data.js for the shape.
 *   2. Load this file after it.
 *   3. Have these elements in the page:
 *        #set-selection   -> container where set buttons render
 *        #quiz            -> container where questions render
 *        #quiz-title      -> (optional) element to receive the quiz title
 *
 * Nothing in this file is specific to any one subject. To add a new
 * quiz topic you never need to edit this file — just add a new data.js
 * and a thin index.html that loads it (see /quizzes/README.md).
 * ---------------------------------------------------------------------
 */

(function () {
  "use strict";

  const data = window.QUIZ_DATA;

  if (!data) {
    console.error("quiz-engine: window.QUIZ_DATA was not found. Make sure the topic's data.js is loaded before quiz-engine.js.");
    return;
  }

  const els = {
    setSelection: document.getElementById("set-selection"),
    quiz: document.getElementById("quiz"),
    title: document.getElementById("quiz-title"),
  };

  let activeSetKey = null;
  let questions = [];
  let current = 0;
  let score = 0;
  let answered = false;

  if (els.title) {
    els.title.textContent = data.title;
  }
  document.title = data.title + " Quiz";

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function renderSetSelection() {
    if (!els.setSelection) return;

    const setKeys = Object.keys(data.sets);

    els.setSelection.innerHTML = `
      <p class="page-subtitle">Choose a set to begin. Questions are shuffled every attempt.</p>
      <div class="set-grid">
        ${setKeys
          .map((key) => {
            const set = data.sets[key];
            return `
              <button class="set-card" data-set="${key}">
                <div class="set-card__label">${set.label}</div>
                <div class="set-card__count">${set.questions.length} questions</div>
              </button>
            `;
          })
          .join("")}
      </div>
    `;

    els.setSelection.querySelectorAll("[data-set]").forEach((btn) => {
      btn.addEventListener("click", () => startQuiz(btn.getAttribute("data-set")));
    });
  }

  function startQuiz(setKey) {
    const set = data.sets[setKey];
    if (!set) return;

    activeSetKey = setKey;
    questions = shuffle([...set.questions]);
    current = 0;
    score = 0;

    els.setSelection.style.display = "none";
    els.quiz.style.display = "block";

    showQuestion();
  }

  function showSetSelection() {
    els.quiz.innerHTML = "";
    els.quiz.style.display = "none";
    els.setSelection.style.display = "block";
    activeSetKey = null;
    questions = [];
    current = 0;
    score = 0;
  }

  function showQuestion() {
    answered = false;

    if (current >= questions.length) {
      renderResult();
      return;
    }

    const q = questions[current];
    const percent = Math.round((current / questions.length) * 100);

    els.quiz.innerHTML = `
      <div class="quiz-shell">
        <div class="quiz-progress">Question ${current + 1} of ${questions.length} — ${data.sets[activeSetKey].label}</div>
        <div class="progress-bar"><div class="progress-bar__fill" style="width:${percent}%"></div></div>
        <div class="question-text"></div>
        <div class="options"></div>
        <div class="quiz-feedback"></div>
      </div>
    `;

    // Set question text via textContent to avoid any HTML injection from data.
    els.quiz.querySelector(".question-text").textContent = q.q;

    const optionsEl = els.quiz.querySelector(".options");
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.type = "button";
      btn.textContent = opt;
      btn.addEventListener("click", () => checkAnswer(i, btn));
      optionsEl.appendChild(btn);
    });
  }

  function checkAnswer(selected, btnEl) {
    if (answered) return;
    answered = true;

    const q = questions[current];
    const optionButtons = els.quiz.querySelectorAll(".option-btn");
    const feedback = els.quiz.querySelector(".quiz-feedback");

    optionButtons.forEach((b) => (b.disabled = true));

    if (selected === q.answer) {
      score++;
      btnEl.classList.add("is-correct");
      feedback.textContent = "✅ Correct!";
      feedback.className = "quiz-feedback correct";
    } else {
      btnEl.classList.add("is-wrong");
      optionButtons[q.answer].classList.add("is-correct");
      feedback.textContent = "❌ Correct answer: " + q.options[q.answer];
      feedback.className = "quiz-feedback wrong";
    }

    const actions = document.createElement("div");
    actions.className = "quiz-actions";
    const nextBtn = document.createElement("button");
    nextBtn.className = "btn";
    nextBtn.type = "button";
    nextBtn.textContent = current + 1 < questions.length ? "Next question" : "See results";
    nextBtn.addEventListener("click", () => {
      current++;
      showQuestion();
    });
    actions.appendChild(nextBtn);
    els.quiz.querySelector(".quiz-shell").appendChild(actions);
  }

  function renderResult() {
    const pct = Math.round((score / questions.length) * 100);
    let emoji = "🎉";
    if (pct < 50) emoji = "📚";
    else if (pct < 80) emoji = "👍";

    els.quiz.innerHTML = `
      <div class="quiz-shell">
        <div class="result-panel">
          <div class="result-panel__emoji">${emoji}</div>
          <h2 class="page-title" style="margin-bottom:0;">Quiz complete</h2>
          <div class="result-panel__score">${score} / ${questions.length}</div>
          <p class="result-panel__note">${pct}% on ${data.sets[activeSetKey].label}</p>
          <div class="result-actions">
            <button class="btn" id="retry-set">Retry this set</button>
            <button class="btn btn-ghost" id="choose-another">Choose another set</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById("retry-set").addEventListener("click", () => startQuiz(activeSetKey));
    document.getElementById("choose-another").addEventListener("click", showSetSelection);
  }

  // Expose only what other inline scripts might reasonably need.
  window.QuizEngine = { showSetSelection };

  renderSetSelection();
})();
