let header1 = document.querySelector(".bamboozle")
let header2 = document.querySelector(".hillHands")
let header3 = document.querySelector(".chucky")
function handleSectionClick (event) {
    console.log(event)
}
let allNames = [header1, header2, header3]

for (let i=0; i<allNames.length; i++) {
    allNames[i].addEventListener("click", handleSectionClick)
    function handleSectionClick (event) {
    console.log(allNames[i].textContent)
    }
}

for (let i=0; i<header1.clientHeight; i++) {
    header1.addEventListener("click", handleSectionClick)
}

for (let i=0; i<header2.clientHeight; i++) {
    header2.addEventListener("mouseover", handleSectionClick)
}

function mouseOverLog (event) {
    console.log("you moused over me!")
}

for (let i=0; i<header3.clientHeight; i++) {
    header3.addEventListener("mouseover", mouseOverLog)
}