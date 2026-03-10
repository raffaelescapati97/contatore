let counter = 0;

        const counterElement = document.getElementById('counter');
        const incrementButton = document.getElementById('increment');
        const decrementButton = document.getElementById('decrement');
        const resetButton = document.getElementById('reset');

        const increment = () => {
            counter++;
            counterElement.textContent = counter;
        };

        const decrement = () => {
            counter--;
            counterElement.textContent = counter;
        };

        const reset = () => {
            counter = 0;
            counterElement.textContent = counter;
        };

        incrementButton.addEventListener('click', increment);

        decrementButton.addEventListener('click', decrement);

        resetButton.addEventListener('click', reset);