let textArea = document.getElementById("input-textarea");
let wordCount = document.getElementById("word-count");
let characterCount = document.getElementById("character-count");

textArea.addEventListener("input", () => {
    characterCount.textContent = textArea.value.length;

    let txt = textArea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});