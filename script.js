const display = document.getElementById('display');
const history = document.getElementById('history');

let currentInput = '0';
let calculationHistory = '';

function updateDisplay() {
    display.innerText = currentInput;
    history.innerText = calculationHistory;
}

function appendValue(val) {
    if (currentInput === '0' && val !== '.') {
        currentInput = val;
    } else {
        currentInput += val;
    }
    updateDisplay();
}

function clearAll() {
    currentInput = '0';
    calculationHistory = '';
    updateDisplay();
}

function deleteChar() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function calculateResult() {
    try {
        calculationHistory = currentInput + ' =';
        let formattedInput = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        let evalResult = eval(formattedInput);
        
        if (!Number.isInteger(evalResult)) {
            evalResult = parseFloat(evalResult.toFixed(6));
        }
        
        currentInput = evalResult.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'ত্রুটি';
        updateDisplay();
        setTimeout(() => {
            currentInput = '0';
            updateDisplay();
        }, 1200);
    }
}

// স্ক্রিনের যেকোনো জায়গায় ক্লিক করলেই রেইনবো অ্যানিমেশন চালু হবে
document.addEventListener('click', function() {
    const card = document.getElementById('mainCard');
    card.classList.add('clicked-rainbow');
    
    setTimeout(() => {
        card.classList.remove('clicked-rainbow');
    }, 1500);
});