// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u, y) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  const vowels = "aeiouy";
  let result = "";

  for (const char of str) {
    result += vowels.includes(char.toLowerCase()) ? "*" : char;
  }

  return result;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;