(function () {
  "use strict";

  var NEW_CARD_PROBABILITY = 0.9; // 90% new cards, 10% review of previously-seen cards
  var LETTERS = ["A", "B", "C"];
  var ACTIVE_DECK_KEY = "flashcards:activeDeck";
  // Preferred left-to-right order when multiple decks are registered.
  var DECK_ORDER = ["reinforcement-learning-beginner", "reinforcement-learning-advanced"];

  var els = {
    deckTitle: document.getElementById("deckTitle"),
    stats: document.getElementById("stats"),
    deckSwitcher: document.getElementById("deckSwitcher"),
    question: document.getElementById("question"),
    options: document.getElementById("options"),
    feedback: document.getElementById("feedback"),
    explanations: document.getElementById("explanations"),
    nextBtn: document.getElementById("nextBtn"),
    resetBtn: document.getElementById("resetBtn")
  };

  var deckIds = getDeckIds();
  var deckId = null;
  var deck = null;
  var storageKey = null;
  var progress = null;
  var currentIndex = null;
  var answered = false;

  function getDeckIds() {
    var registered = Object.keys(window.FLASHCARD_DECKS || {});
    var ordered = DECK_ORDER.filter(function (id) { return registered.indexOf(id) !== -1; });
    var rest = registered.filter(function (id) { return ordered.indexOf(id) === -1; });
    return ordered.concat(rest);
  }

  function getPreferredDeckId() {
    var saved = null;
    try { saved = localStorage.getItem(ACTIVE_DECK_KEY); } catch (e) {}
    if (saved && deckIds.indexOf(saved) !== -1) return saved;
    return deckIds[0];
  }

  function loadProgress(key) {
    try {
      var raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { seen: {}, sessionCorrect: 0, sessionAnswered: 0 };
  }

  function saveProgress() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch (e) {}
  }

  function allIndices() {
    var arr = [];
    for (var i = 0; i < deck.cards.length; i++) arr.push(i);
    return arr;
  }

  function pickNextIndex() {
    var all = allIndices();
    var seenIndices = Object.keys(progress.seen).map(Number);
    var seenSet = {};
    seenIndices.forEach(function (i) { seenSet[i] = true; });
    var unseen = all.filter(function (i) { return !seenSet[i]; });

    var pool;
    if (unseen.length === 0) {
      // Whole deck learned at least once: keep it fresh by weighting toward
      // cards that haven't been reviewed in the longest time.
      var sorted = all.slice().sort(function (a, b) {
        var la = (progress.seen[a] && progress.seen[a].lastSeen) || 0;
        var lb = (progress.seen[b] && progress.seen[b].lastSeen) || 0;
        return la - lb;
      });
      var cut = Math.max(3, Math.ceil(sorted.length * 0.3));
      pool = sorted.slice(0, cut);
    } else if (seenIndices.length === 0) {
      pool = unseen; // nothing reviewed yet, must show something new
    } else {
      pool = Math.random() < NEW_CARD_PROBABILITY ? unseen : seenIndices;
    }

    var filtered = pool.filter(function (i) { return i !== currentIndex; });
    if (filtered.length === 0) filtered = pool;
    return filtered[Math.floor(Math.random() * filtered.length)];
  }

  function renderDeckSwitcher() {
    if (deckIds.length < 2) {
      els.deckSwitcher.hidden = true;
      return;
    }
    els.deckSwitcher.innerHTML = "";
    deckIds.forEach(function (id) {
      var d = window.FLASHCARD_DECKS[id];
      var btn = document.createElement("button");
      btn.className = "deck-pill" + (id === deckId ? " active" : "");
      btn.textContent = d.shortLabel || d.title;
      btn.addEventListener("click", function () { switchDeck(id); });
      els.deckSwitcher.appendChild(btn);
    });
  }

  function renderStats() {
    var total = deck.cards.length;
    var learned = Object.keys(progress.seen).length;
    var acc = progress.sessionAnswered
      ? Math.round((100 * progress.sessionCorrect) / progress.sessionAnswered)
      : null;
    var text = learned + "/" + total + " seen";
    if (acc !== null) text += "  ·  " + acc + "% today";
    els.stats.textContent = text;
  }

  function renderCard(index) {
    currentIndex = index;
    answered = false;
    var card = deck.cards[index];

    els.question.textContent = card.q;
    els.options.innerHTML = "";
    els.explanations.innerHTML = "";
    els.feedback.hidden = true;

    card.options.forEach(function (opt, i) {
      var btn = document.createElement("button");
      btn.className = "option-btn";
      btn.setAttribute("data-index", i);
      btn.innerHTML = '<span class="option-letter">' + LETTERS[i] + "</span>" + escapeHtml(opt);
      btn.addEventListener("click", function () { selectOption(i); });
      els.options.appendChild(btn);
    });

    renderStats();
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function selectOption(chosenIndex) {
    if (answered) return;
    answered = true;

    var card = deck.cards[currentIndex];
    var isCorrect = chosenIndex === card.correct;

    // Update progress
    var entry = progress.seen[currentIndex] || { timesSeen: 0, timesCorrect: 0, lastSeen: 0 };
    entry.timesSeen += 1;
    if (isCorrect) entry.timesCorrect += 1;
    entry.lastSeen = Date.now();
    progress.seen[currentIndex] = entry;
    progress.sessionAnswered = (progress.sessionAnswered || 0) + 1;
    if (isCorrect) progress.sessionCorrect = (progress.sessionCorrect || 0) + 1;
    saveProgress();

    // Style buttons
    var buttons = els.options.querySelectorAll(".option-btn");
    buttons.forEach(function (btn) {
      var i = Number(btn.getAttribute("data-index"));
      btn.disabled = true;
      if (i === card.correct) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("incorrect");
      }
    });

    // Explanations, correct one first
    var order = [card.correct].concat(
      card.options.map(function (_, i) { return i; }).filter(function (i) { return i !== card.correct; })
    );
    order.forEach(function (i) {
      var div = document.createElement("div");
      var isRight = i === card.correct;
      div.className = "explanation " + (isRight ? "correct" : "incorrect");
      div.innerHTML =
        '<span class="tag">' + (isRight ? "Correct — " + LETTERS[i] : "Wrong — " + LETTERS[i]) + "</span>" +
        escapeHtml(card.why[i]);
      els.explanations.appendChild(div);
    });

    els.feedback.hidden = false;
    renderStats();
  }

  function nextCard() {
    renderCard(pickNextIndex());
  }

  function resetProgress() {
    if (!window.confirm("Reset progress for the " + (deck.shortLabel || deck.title) + " deck?")) return;
    progress = { seen: {}, sessionCorrect: 0, sessionAnswered: 0 };
    saveProgress();
    nextCard();
  }

  function switchDeck(id) {
    if (id === deckId) return;
    loadDeck(id);
    try { localStorage.setItem(ACTIVE_DECK_KEY, id); } catch (e) {}
    renderDeckSwitcher();
    nextCard();
  }

  function loadDeck(id) {
    deckId = id;
    deck = window.FLASHCARD_DECKS[id];
    storageKey = "flashcards:" + deckId + ":progress:v1";
    progress = loadProgress(storageKey);
    currentIndex = null;
    els.deckTitle.textContent = deck.title;
  }

  function init() {
    if (!deckIds.length) {
      els.question.textContent = "No flashcard deck found.";
      els.deckSwitcher.hidden = true;
      return;
    }
    loadDeck(getPreferredDeckId());
    renderDeckSwitcher();
    els.nextBtn.addEventListener("click", nextCard);
    els.resetBtn.addEventListener("click", resetProgress);
    nextCard();
  }

  init();
})();
