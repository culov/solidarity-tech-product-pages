
(function () {
    const buttonClasses = [
        'menu-item__sub-name',
        'menu-button'
    ]

    const subMenuClass = 'sub-menu'

    const getButtons = () => buttonClasses.map(button => document.getElementsByClassName(button)[0])
    const getSubMenu = () => document.getElementsByClassName(subMenuClass)[0]

    const subMenu = getSubMenu()
    const buttons = getButtons()

    if (!subMenu.dataset.init && buttons.length > 0 && subMenu) {

        const toggleSubMenu = () => {
            subMenu.classList.toggle('active')
            buttons.forEach(button => {
                button.classList.toggle('active')
            })
        }
        const openSubMenu = () => {
            subMenu.classList.add('active')
            buttons.forEach(button => {
                button.classList.add('active')
            })
        }

        const closeSubMenu = () => {
            const timer = setTimeout(() => {
                subMenu.classList.remove('active')
                buttons.forEach(button => {
                    button.classList.remove('active')
                })}, 300)

            subMenu.addEventListener('mouseenter', () => {
                clearTimeout(timer)
            }, {once: true})
            buttons.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    clearTimeout(timer)
                }, {once: true})
            })
        }

        //  Mouse events
        buttons.forEach(button => {
            button.addEventListener('mouseenter', openSubMenu)
        })
        buttons.forEach(button => {
            button.addEventListener('mouseleave', closeSubMenu)
        })
        subMenu.addEventListener('mouseleave', closeSubMenu)


        //  Touch events
        buttons.forEach(button => {
            button.addEventListener('touchstart', toggleSubMenu)
        })
        document.addEventListener('touchstart', (e) => {
            if (subMenu.classList.contains('active')) {
                const target = e.target

                const isSubMenu = target === subMenu
                const isSubMenuChild = subMenu.contains(target)
                const isButton = buttons.includes(target)
                const isButtonChild = buttons.some(button => button.contains(target))
                if (!isSubMenu && !isSubMenuChild && !isButton && !isButtonChild) {
                    toggleSubMenu()
                }
            }
        })

        subMenu.dataset.init = 1
    }
})()