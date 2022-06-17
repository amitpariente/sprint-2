'use strict'

var gElCanvas;
var gCtx;


function init() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    renderGallery()
}


function toggleMenu(elBtn) {
    document.body.classList.toggle('menu-open');
    document.body.classList.contains('menu-open') ? elBtn.innerText = 'X' : elBtn.innerText = '☰';

}


function onImgSelect(el) {
    var imgEl = el.querySelector('img')
    const selectedImgId = imgEl.dataset.id
    console.log(selectedImgId);
    closeModal()
    setImg(selectedImgId)


}

function renderMeme(givenLine = {}) {
    const { selectedImgId, selectedLineIdx, lines } = getMeme()
    drawImg(selectedImgId, lines, givenLine)
}




function drawImg(selectedImgId, lines, givenLine = {}) {
    var img = new Image()
    const images = getImg()
    var chosenImg = images.filter(image => {
        return image.id == selectedImgId
    })[0]
    img.src = chosenImg.url


    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        lines.map((line, index) => {
            drawText(line.size, line.txt, index, line.color)

        })
        if (givenLine.txt) {
            drawText(givenLine.size, givenLine.txt, lines.length, givenLine.color)
        }
    }
}


function drawText(size, text, idx, color = 'red') {
    gCtx.lineWidth = 2;
    gCtx.fillStyle = color;
    console.log(text);
    gCtx.font = `${size}px Montserrat`;
    if (idx === 0) {
        gCtx.fillText(text, 0, size)
    }
    if (idx === 1) {
        gCtx.fillText(text, 0, gElCanvas.height)
    }
    if (idx === 2) {
        gCtx.fillText(text, 0, gElCanvas.height / 2)
    }
    if (idx > 2 && idx <= 6) {
        gCtx.fillText(text, 0, gElCanvas.height / idx)
    }
    if (idx > 6) {
        gCtx.fillText(text, 0, gElCanvas.height / (idx-5) +gElCanvas.height/2)
    }
}

