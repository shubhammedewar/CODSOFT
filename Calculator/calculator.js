let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');
let screenValue = '';

for (let item of button) {
    item.addEventListener('click', function(e) {
        let buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.innerText = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.innerText = screenValue;
        }
        else if (buttonText == '=') {
            screen.innerText = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.innerText = screenValue;
        }

    })
}