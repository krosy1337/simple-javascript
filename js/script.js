const block = document.querySelector('.block')
const areaRow = document.querySelector('.color__row')

areaRow.addEventListener('click', event => {
    const target = event.target
    if (target.classList.contains('color__button')) {
        const color = window.getComputedStyle(target).backgroundColor
        block.style.backgroundColor = color
    }
})