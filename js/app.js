function generatePin() {
    let random = Math.floor(Math.random() * 10000);
    return random;
}

function getPin() {
    let pin = generatePin() + '';
    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    let pinNumber = getPin();

    let displayPin = document.getElementById('display-pin');
    displayPin.value = pinNumber;
});

document.getElementById('calculator').addEventListener('click', function (e) {
    let characters = e.target.innerText;
    let typedField = document.getElementById('typed-numbers');

    if (isNaN(characters)) {
        if (characters == 'C') {
            typedField.value = '';
        } else if (characters == '<') {
            let char = typedField.value.split('');
            char.pop();
            typedField.value = char.join('');
        }
    } else {
        typedField.value += characters;
    }
});

document.getElementById('verify-pin').addEventListener('click', function () {
    let displayPin = document.getElementById('display-pin');
    let typedField = document.getElementById('typed-numbers');
    let success = document.getElementById('pin-success');
    let failure = document.getElementById('pin-fail');

    if (displayPin.value === typedField.value) {
        success.style.display = 'block';
        failure.style.display = 'none';
        typedField.value = '';
        displayPin.value = '';
    } else {
        success.style.display = 'none';
        failure.style.display = 'block';
        typedField.value = '';
        displayPin.value = '';
    }
});
