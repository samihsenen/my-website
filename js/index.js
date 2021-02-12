// welcome print
let welcomeStr = 'Welcome to my website.';
let i = 0;
let welcomeTag = document.getElementById('welcome');
setInterval(() => {
    if (i === welcomeStr.length) return false;
    welcomeTag.innerHTML += welcomeStr[i];
    i++;
}, 150);

// senen blink
let j = 0;
let colors = ['pink', 'magenta', 'purple', 'red'];
let senenTag = document.getElementById('senen');
setInterval(() => {
    senenTag.style.textShadow = `5px 5px 20px ${colors[j]}`;
    j++;
    if (j === colors.length) j = 0;
}, 200);

