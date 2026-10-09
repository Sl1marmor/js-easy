// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  const digits = "0123456789";
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (!digits.includes(str[i])) {
      result += str[i];
    }
  }

  return result;
}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;