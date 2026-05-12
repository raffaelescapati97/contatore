const createButton = (id, text) => {
    const button = document.createElement('button');
    button.id = id;
    button.textContent = text;
    return button;
};

const createCounterApp = () => {
    const container = document.createElement('div');
    container.className = 'container';

    const section = document.createElement('div');
    section.className = 'section';

    const decrementButton = createButton('decrement', '-');
    const counterElement = document.createElement('p');
    counterElement.id = 'counter';
    counterElement.textContent = '0';
    const incrementButton = createButton('increment', '+');
    const resetButton = createButton('reset', 'Reset');

    section.appendChild(decrementButton);
    section.appendChild(counterElement);
    section.appendChild(incrementButton);
    section.appendChild(resetButton);
    container.appendChild(section);

    document.body.appendChild(container);

    return {
        counterElement,
        incrementButton,
        decrementButton,
        resetButton,
    };
};

let counter = 0;

document.addEventListener('DOMContentLoaded', () => {
    const { counterElement, incrementButton, decrementButton, resetButton } = createCounterApp();

    const updateDisplay = () => {
        counterElement.textContent = counter;
    };

    const increment = () => {
        counter++;
        updateDisplay();
    };

    const decrement = () => {
        counter--;
        updateDisplay();
    };

    const reset = () => {
        counter = 0;
        updateDisplay();
    };

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    resetButton.addEventListener('click', reset);
});