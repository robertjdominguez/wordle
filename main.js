// import La from word List
import { La } from "./wordList.js";

// og date
const OG = new Date(2021, 5, 19, 0, 0, 0, 0);

// add one day to the OG date
const date = new Date(OG.getTime() + 86400000);
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

// for each item int the list, create an <li>
La.map((word, index) => {
  const placeholder = new Date(OG.getTime() + 86400000 * index);
  const wordPair = document.createElement("div");
  wordPair.id = String(index);
  wordPair.classList.add("word-pair");

  //   create a second div for the letters
  const wordPairLetters = document.createElement("div");
  wordPairLetters.classList.add("letters");
  word.split("").map((letter) => {
    const letterDiv = document.createElement("div");
    letterDiv.classList.add("letter");
    letterDiv.innerHTML = letter;
    wordPairLetters.appendChild(letterDiv);
  });

  wordPair.innerHTML = `
  <p>${placeholder.toLocaleDateString("en-US", options)}</p>
  `;

  wordPair.appendChild(wordPairLetters);
  document.querySelector(".word-list").appendChild(wordPair);
});
