(function () {

    const modalClass = 'modal'

    const getModals = () => document.getElementsByClassName(modalClass)

    const modals = getModals()

    for (let i = 0; i < modals.length; i++) {
        const modal = modals[i]
        if (!modal.dataset.init) {
            const closeButton = modal.querySelector('.modal__close-button')

            const closeModal = () => {
                modal.classList.remove('modal--open')
            }

            modal.addEventListener('click', (e) => {
                if (modal === e.target) {
                    closeModal()
                }
            })
            modal.addEventListener('touchstart', (e) => {
                if (modal === e.target) {
                    closeModal()
                }
            })

            closeButton.addEventListener('click', closeModal)
            closeButton.addEventListener('touchstart', closeModal)

            modal.dataset.init = true
        }
    }

})()