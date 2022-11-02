import Tooltip from "./tooltip";

console.log('app.js is bunled');

const btn = document.querySelector('.btn');

const tooltipFactory = new Tooltip();
const actualMessages = {};

const showTooltip = (el) => {
    actualMessages.id = tooltipFactory.showTooltip("And here's some amazing content. it`s very engaging. right?", el)
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(actualMessages.id) {
        tooltipFactory.removeTooltip(actualMessages.id)
        delete actualMessages.id
    } else {
        showTooltip(btn)
    }
})