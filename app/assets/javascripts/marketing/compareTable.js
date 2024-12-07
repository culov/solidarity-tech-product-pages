
(function () {

    const categoryClass = 'compare-table__category'

    const getCategories = () => document.getElementsByClassName(categoryClass)

    const categories = getCategories()

    for(let i = 0; i < categories.length; i++) {
        const category = categories[i]
        if(!category.dataset.init) {
            const button = category.querySelector('.compare-table__category-name')

            const toggle = () => {
                category.classList.toggle('compare-table__category--open')
            }

            button.addEventListener('click', toggle)

            category.dataset.init = true
        }
    }

})()