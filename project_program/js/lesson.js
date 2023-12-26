//PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [25793]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color= 'green'
    } else {
        phoneResult.innerHTML = ' not ok'
        phoneResult.style.color= 'red'
    }
}

//Tab Slider ( и 3 дз первая часть)

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')


const hideTabContent = () => {
    tabContentBlocks.forEach(tabCard => {
        tabCard.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex = 0) => {
    tabContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab,tabIndex) => {
            if(event.target === tab){
                hideTabContent()
                showTabContent(tabIndex)
            }

        })
    }
}
const autoTabContent = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabs.length - 1){
            i = 0
        }
        hideTabContent()
        showTabContent(i)
        },6000)
}
autoTabContent()

//CONVERTOR (дз 5)



const usd = document.querySelector('#usd')
const som = document.querySelector('#som')
const zireksPositiveCoin = document.querySelector('#zireksPositiveCoin')
const converter = (element, targetElement, target2, current) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET' , '../data/converter.json')
        xhr.setRequestHeader('Content-type' , 'application/json')
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)

            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    target2.value = (element.value / data.zireksPositiveCoin).toFixed(2)
                    break
                case 'usd' :
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    target2.value = (element.value * data.zireksPositiveCoin / data.usd).toFixed(2)
                    break
                case 'zireksPositiveCoin' :
                    targetElement.value = (element.value * data.zireksPositiveCoin).toFixed(2)
                    target2.value = (element.value * (data.usd / data.zireksPositiveCoin)).toFixed(2)
                    break
                default:
                    break
            }
           if (element.value === '' || targetElement.value === ''){
                targetElement.value = ''
                target2.value = ''
            }
            }
        }
}

converter(som, usd, zireksPositiveCoin,'som')
converter(usd, som, zireksPositiveCoin,'usd')
converter(zireksPositiveCoin, usd, som, 'zireksPositiveCoin')

// CARD SWITCHER

const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let countCard = 1
btnNext.addEventListener('click', () =>{
    countCard++

    if(countCard > 200) countCard = 1

    getData(countCard)
})
btnPrev.addEventListener('click', () =>{
    countCard--

    if(countCard < 1) countCard = 200

    getData(countCard)
})

const getData = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
            `
        })
}

getData(countCard)

//2

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(data =>
        console.log(data)
    )



