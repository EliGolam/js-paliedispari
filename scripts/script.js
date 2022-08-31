// Initial Handshake
console.log('DEBUG - script.js: OK!');

// Initialise form
const palForm = document.getElementById('isPalindrome');
const numForm = document.getElementById('odd-even');


// palForm
palForm.addEventListener ('submit', (e) => {
    e.preventDefault();

    const word = document.getElementById('wordInp').value;
    const halfString = Math.floor(word.length / 2);
    console.log(word, halfString);

    let firstHalf = word.slice(0, halfString); 
    let secondHalf = word.slice(word.length - halfString, word.length);
    secondHalf = secondHalf.split('').reverse().join('');
    console.log(firstHalf, secondHalf);

    let message = '';

    if (firstHalf === secondHalf) {
        console.log('The Word is palindrome');
        message = `${word} is a Palindrome word!`
    } else {
        console.log("It's not a palindrome word");
        message = `${word} ain't a Palindrome word muh dude...`
    }

    const result = document.querySelector('.resultPalindrome .result');
    result.innerHTML = message;

    palForm.reset();
})


// Odd even form
numForm.addEventListener ('submit', (e) => {
    e.preventDefault();

    const userInp = parseInt(document.getElementById('numInp').value);
    const choice = document.getElementById('choice').value;
    const choiceVal = choice === 'odd' ? 1 : 0;
    console.log('DEBUG - user inputs', userInp, choice);

    const num = Math.ceil( Math.random() * 5) + userInp;
    console.log('DEBUG - num', num);

    let message = '';

    if (num % 2 === choiceVal) {
        console.log(num % 2, 'Win!');
        message = `You Win! The final number is ${choice}`;
    } else {
        console.log(num % 2, 'Lost');
        message = `You lost! The final number is not ${choice}. Try Again`;
    }

    const result = document.querySelector('.resultNum .result');
    result.innerHTML = message;
})