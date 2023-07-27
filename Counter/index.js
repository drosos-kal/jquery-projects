// app state - The only source of truth
const DEFAULT = 0
let counter = DEFAULT

const counterDOM = $('#counter')
const btns = $('.btn')

/**
 * Listener
 */
// btns.each(function(btn) {
    btns.on('click', function(e) {
        if (e.currentTarget.id === 'btnDecr') {  // currentTarget is the button clicked
            onDecreaseClicked()
        } else if (e.currentTarget.id === 'btnIncr') {
            onIncreaseClicked()
        } else {
            onResetClicked()
        }
    })
// })

// Controllers

/**
 * Actions taken after 'Decrease' button clicked.
 * Actions include decreasing the counter.
 */
function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actions taken after 'Increase' button clicked.
 * Actions include increasing the counter.
 */
function onIncreaseClicked() {
    increaseCounter()
}

/**
 * Actions taken after 'Reset' button clicked.
 * Actions include resetting the counter.
 */
function onResetClicked() {
    resetCounter()
}

/**
 * Decreases the counter and syncs the UI.
 */
function decreaseCounter() {
    counter--
    showCounter(counter)
}

/**
 * Increases the counter and syncs the UI.
 */
function increaseCounter() {
    counter++
    showCounter(counter)
}

/**
 * Resets the counter and syncs the UI.
 */
function resetCounter() {
    counter = DEFAULT
    showCounter(counter)
}

/**
 * Assigns the counter to the corresponding UI Element
 * and styles accordingly.
 * @param {Number|String} counter - the counter value
 */
function showCounter(counter) {
    counterDOM.html(counter);
    styleCounter(counter)
}

/**
 * Assigns a specific color to the counter.
 * Green when positive, red when negative, black when zero.
 * @param {Number} counter - the counter value
 */
function styleCounter(counter) {
    if (counter > 0) {
        counterDOM.css('color', 'green')
    } else if (counter < 0) {
        counterDOM.css('color', 'red')
    } else {
        counterDOM.css('color', 'black')
    }
}
