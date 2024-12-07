(function () {

    const textTransformer = (element, texts) => {
    const duration = 300
    const interval = 5000
    const hideClass = 'text-transformer--hide'
    const startClass = 'text-transformer--start'

        const changeText = (text) => {
            element.classList.add(hideClass)
            setTimeout(() => {
                element.innerText = text + '.'
                element.classList.add(startClass)
                setTimeout(() => {
                    element.classList.remove(hideClass)
                    element.classList.remove(startClass)
                }, 10)

            }, duration)
        }

        element.innerText = texts[0] + '.' // initial text
        let i = 1
        setInterval(() => {
            changeText(texts[i])
            i = (i + 1) % texts.length
        }, interval)
    }
    
    const getTransformer = () => document.getElementsByClassName('text-transformer')[0];
    const transformer = getTransformer();
    if(transformer){
        const textTransform = textTransformer(transformer, transformer.dataset.texts.split('/'))
    }

})()

