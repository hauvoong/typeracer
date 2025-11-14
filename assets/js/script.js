// Typing test: difficulty-based sample text loader and basic start behavior
document.addEventListener('DOMContentLoaded', () => {
	const testTextEl = document.getElementById('test-text');
	const textarea = document.getElementById('input-area');
	const startBtn = document.getElementById('start-btn');
	const difficultySelect = document.getElementById('difficulty-select');

	const samples = {
		easy: [
			'The quick brown fox jumps over the lazy dog.',
			'Pack my box with five dozen liquor jugs.',
			'She sells seashells by the seashore.'
		],
		medium: [
			'Typing well takes practice; try to keep consistent finger placement while you build speed.',
			'A good typist keeps eyes on the screen and lets the fingers find the keys automatically.',
			'Practice daily with short passages to steadily improve accuracy and speed.'
		],
		hard: [
			'When you are typing advanced passages, watch punctuation and capitalization closely — errors there cost accuracy.',
			'This paragraph contains multiple clauses, commas, and a parenthetical (which should be typed correctly) to increase difficulty.',
			'Challenging texts include varied vocabulary, longer words, and punctuation: hyphens, colons, and semicolons.'
		]
	};

	function getRandomSample(difficulty) {
		const list = samples[difficulty] || samples.medium;
		return list[Math.floor(Math.random() * list.length)];
	}

	function setSampleText(difficulty) {
		const sample = getRandomSample(difficulty);
		testTextEl.textContent = sample;
	}

	// Initialize sample based on default select value
	setSampleText(difficultySelect.value);

	// Update sample when difficulty changes
	difficultySelect.addEventListener('change', (e) => {
		setSampleText(e.target.value);
	});

	// Start button: pick a sample for current difficulty, enable textarea and focus
	startBtn.addEventListener('click', () => {
		setSampleText(difficultySelect.value);
		textarea.value = '';
		textarea.disabled = false;
		textarea.focus();
		// Small UX: move caret to start
		textarea.setSelectionRange(0, 0);
		// For future: start timer / reset results here
	});
});
