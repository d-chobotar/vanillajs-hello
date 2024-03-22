document.addEventListener("DOMContentLoaded", function(event) {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let generateExcuse = function() {
    return `${who[randomInRange(0, who.length)]} ${
      action[randomInRange(0, action.length)]
    } ${what[randomInRange(0, what.length)]} ${
      when[randomInRange(0, when.length)]
    }`;
  };

  let randomInRange = function(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
  };

  let excuse = document.getElementById("excuse");

  excuse.textContent = generateExcuse();
});
