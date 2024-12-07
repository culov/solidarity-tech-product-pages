
(function () {
    const dropdownClass = 'dropdown'

    const getDropdowns = () => document.getElementsByClassName(dropdownClass)

    const dropdowns = getDropdowns()

    for(let i = 0; i < dropdowns.length; i++) {
        const dropdown = dropdowns[i]
        if(!dropdown.dataset.init) {
            const button = dropdown.querySelector('.dropdown__button')
            const options = dropdown.querySelectorAll('.dropdown__option')

            const toggleDropdown = () => {
                dropdown.classList.toggle('dropdown--active')
            }

            const closeDropdown = () => {
                dropdown.classList.remove('dropdown--active')
            }

            const selectOption = (option) => {
                const selectedOption = dropdown.querySelector('.dropdown__option--selected')
                if (selectedOption) {
                    selectedOption.classList.remove('dropdown__option--selected')
                }
                option.classList.add('dropdown__option--selected')
                button.innerHTML = option.innerHTML
                button.classList.remove('input__field--placeholder')
                closeDropdown()
            }

            button.addEventListener('click', toggleDropdown)
            button.addEventListener('touchstart', toggleDropdown)

            document.addEventListener('click', (event) => {
                if (!dropdown.contains(event.target)) {
                    closeDropdown()
                }
            })
            document.addEventListener('touchstart', (event) => {
                if (!dropdown.contains(event.target)) {
                    closeDropdown()
                }
            })

            for(let i = 0; i < options.length; i++) {
                options[i].addEventListener('click', () => selectOption(options[i]))
            }

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    closeDropdown();
                }
            })

            dropdown.dataset.init = true
        }
    }

})()