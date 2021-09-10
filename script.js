const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const display = document.querySelector('[data-display]');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.innerHTML.includes('ANS')) display.innerHTML ='';
        if (button.innerText === '.' && display.innerHTML.includes('.') && !display.innerHTML.includes('+') && !display.innerHTML.includes('-') && !display.innerHTML.includes('/') && !display.innerHTML.includes('*')) return
        display.innerHTML += button.innerText
    })
})

deleteButton.addEventListener('click', () => {
    if (display.innerHTML.includes('ANS')) display.innerHTML = ''
    display.innerHTML = display.innerHTML.replace(display.innerHTML.charAt(display.innerHTML.length-1),'')
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.innerHTML.includes('/')) {
            var equation = display.innerHTML.split('/')
            var result = equation[0]/equation[1]
            display.innerHTML = result + button.innerText
        } else if (display.innerHTML.includes('*')) {
            var equation = display.innerHTML.split('*')
            var result = equation[0]*equation[1]
            display.innerHTML = result + button.innerText
        } else if (display.innerHTML.includes('+')) {
            var equation = display.innerHTML.split('+')
            var result = +equation[0] + +equation[1]
            display.innerHTML = result + button.innerText
        } else if (display.innerHTML.includes('-')) {
            var equation = display.innerHTML.split('-')
            var result = equation[0]-equation[1]
            display.innerHTML = result + button.innerText
        } else {
            display.innerHTML += button.innerText
        }
    })
})

equalsButton.addEventListener('click', () => {
    if (display.innerHTML.indexOf('*') > -1) {
        var equation = display.innerHTML.split('*')
        var result = equation[0]*equation[1]
        display.innerHTML = 'ANS = '+result
    } else if (display.innerHTML.indexOf('/') > -1) {
        var equation = display.innerHTML.split('/')
        var result = equation[0]/equation[1]
        display.innerHTML = 'ANS = '+result
    } else if (display.innerHTML.indexOf('+') > -1) {
        var equation = display.innerHTML.split('+')
        var result = +equation[0] + +equation[1]
        display.innerHTML = 'ANS = '+result
    } else {
        var equation = display.innerHTML.split('-')
        var result = equation[0]-equation[1]
        display.innerHTML = 'ANS = '+result
    }
})

window.addEventListener('keydown',(e) => {
    if (display.innerHTML.includes('ANS') && (e.keyCode >= 48 && e.keyCode <= 57 || e.key == '.')) display.innerHTML ='';
    if (e.key === '.' && display.innerHTML.includes('.') && !display.innerHTML.includes('+') && !display.innerHTML.includes('-') && !display.innerHTML.includes('/') && !display.innerHTML.includes('*')) return
    if (e.keyCode >= 48 && e.keyCode <= 57 || e.key == '.' ) display.innerHTML += e.key
    if (e.keyCode == 8) deleteButton.click();
    if (e.keyCode == 187) equalsButton.click();
    if (e.keyCode == 106) multiply.click();
    if (e.keyCode == 107) add.click();
    if (e.keyCode == 109) subtract.click();
    if (e.keyCode == 111) divide.click()
})