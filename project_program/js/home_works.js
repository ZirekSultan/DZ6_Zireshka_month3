const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /[0-9a-z]@gmail.com$/

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'valid mail'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'wrong mail'
        gmailResult.style.color = 'red'
    }
}

//Домашнее задание 2, задание номер 1

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0
const parentSize = 449

const moveChildBlock = () => {
    setTimeout(() => {

        if (positionX < parentSize && positionY <= 0) {

            positionX += 1
            childBlock.style.left = `${positionX}px`
            childBlock.style.top = `${positionY}px`
            moveChildBlock()

        } else if (positionX >= parentSize && positionY < parentSize) {

            positionY += 1
            childBlock.style.left = `${positionX}px`
            childBlock.style.top = `${positionY}px`
            moveChildBlock()

        } else if (positionX >= 0 && positionY >= parentSize) {

            positionX -= 1
            childBlock.style.left = `${positionX}px`
            moveChildBlock()

        } else if(positionY >= 0 && positionX <= 0) {

            positionY -= 1
            childBlock.style.top = `${positionY}px`
            moveChildBlock()

        }
    }, 5)
}

moveChildBlock()

//Домашнее задание 2, задание номер 2

const intervalCount = document.querySelector(".interval")
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn = document.querySelector("#reset")

let interval;

let count = 0

startBtn.onclick=() => {
    clearInterval(interval)
   interval = setInterval(()=>{
        count++
        intervalCount.innerText= count

    } , 1000)
}

stopBtn.onclick=() => {
    clearInterval(interval)
}

resetBtn.onclick=() => {
    count = 0
    clearInterval(interval)
    intervalCount.innerText= count
}

