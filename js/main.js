function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}
function calculateEngravingPrice(messsage, pricePerWord) {
    const words = messsage.split(' ');
    const wordCount = words.length;
    return wordCount * pricePerWord;
}
const messsage = 'Корова Свиня Баран Змія'
const pricePerWord = 20
const totalPrice = calculateEngravingPrice(messsage, pricePerWord);
console.log(`Загальна вартість гравіювання: ${totalPrice}`);
const items = ['Окунь', 'Карась', 'Щука'];
logItems(items);
function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = ''
    for (let i = 0; i < words.length; i++) {
        if (words[i] > longestWord) {
            longestWord = words[i]
        }
    }
    return longestWord
}
const string = "Корова Свиня Баран Змія"
const longestWord = findLongestWord(string)
console.log(`Найдовше слово це ${longestWord}`)
function formatString(mesage) {
    const symbols = mesage.split(' ')
    if (mesage.length < 40)
        return mesage
    else {
        return mesage.slice(0, 40) + '...';
    }
}
const mesage = 'собака корова свиня кінь змія баран вовк ведмідь'
const mesageString = formatString(mesage)
console.log(` ${mesageString}`)
function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
        return true;
    }
    return false;
}
console.log(checkForSpam('Get your free SPAM now'));
console.log(checkForSpam('Huge SALE on all items!'));
console.log(checkForSpam('No promotions here'));
const numbers = [];
let total = 0;

while (true) {
    const input = prompt("Будь ласка, введіть число:");
    if (input === null) {
        break;
    }

    const number = Number(input);
    if (isNaN(number)) {
        alert("Було введено не число, спробуйте ще раз");
    } else {
        numbers.push(number);
    }
}
if (numbers.length > 0) {
    for (const num of numbers) {
        total += num;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Масив чисел порожній");
}