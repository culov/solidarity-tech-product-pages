
(function () {

    const numberClass = 'number'

    const getNumbers = () => document.getElementsByClassName(numberClass)

    const numbers = getNumbers()

    for(let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        if(!number.dataset.init) {
            const field = number.querySelector('.number__field')
            const buttonUp = number.querySelector('.number__button--up')
            const buttonDown = number.querySelector('.number__button--down')

            const increment = () => {
                field.value = (parseInt(field.value) || 0) + 1
            }
            const decrement = () => {
                field.value = (parseInt(field.value) || 0) - 1
            }

            buttonUp.addEventListener('click', increment)
            buttonUp.addEventListener('touchstart', increment)
            buttonDown.addEventListener('click', decrement)
            buttonDown.addEventListener('touchstart', decrement)

            number.dataset.init = true
        }
    }

})()