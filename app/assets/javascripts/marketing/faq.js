
(function () {

    const questionClass = 'faq__question'

    const getQuestions = () => document.getElementsByClassName(questionClass)

    const questions = getQuestions()

    for(let i = 0; i < questions.length; i++) {
        const question = questions[i]
        if(!question.dataset.init) {
            const button = question.querySelector('.faq__question-header')

            const toggle = () => {
                question.classList.toggle('faq__question--open')
            }

            button.addEventListener('click', toggle)

            question.dataset.init = true
        }
    }

})()