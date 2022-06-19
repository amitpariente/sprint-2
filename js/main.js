'use strict'

var gElCanvas;
var gCtx;


function init() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    renderGallery()
    renderStickers()
    addListeners()

}

function getCanvas() {
    return gElCanvas
}


function toggleMenu(elBtn) {
    document.body.classList.toggle('menu-open');
    document.body.classList.contains('menu-open') ? elBtn.innerText = 'X' : elBtn.innerText = '☰';

}



function onStickerSelect(el) {
    const meme = getMeme()
    const stickers = _getStickers()
    const id = el.dataset.id
    var selectedSticker = stickers.filter(sticker => {
        if (sticker.id == id) {
            return true
        }
    })[0]
    console.log(selectedSticker);
    const stickerIdx = selectedSticker.id
    const sticker = {
        id: stickerIdx,
        size: 100,
        width: 70,
        pos: { x: 0, y: 100 }
    }
    meme.selectedStickerIdx = stickerIdx
    meme.stickers.push(sticker)
    console.log(meme);
    drawSticker(stickerIdx, sticker)
    
    
}

function drawSticker(stickerIdx, sticker) {
    const meme = getMeme()
    const stickers = _getStickers()
    const chosenSticker = meme.stickers.find(sticker => (stickerIdx == sticker.id))
    var img = new Image()
    img.src = stickers[stickerIdx].src
    img.onload = () => {
        if (chosenSticker.pos.x === 0 && chosenSticker.pos.y === 100) {
            gCtx.drawImage(img, 0, 100, sticker.size, sticker.width);
        } else {
            gCtx.drawImage(img, chosenSticker.pos.x, chosenSticker.pos.y, sticker.size, sticker.width);
        }
    }
}



function onImgSelect(el) {
    var imgEl = el.querySelector('img')
    const selectedImgId = imgEl.dataset.id
    closeModal()
    setImg(selectedImgId)


}



function shareMeme() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg")
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a class=" btn btn-icon btn-facebook" href=""https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false"><i
        class="fa fa-facebook"></i><span>Share</span></a>`
    }
    doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {
    const formData = new FormData();
    formData.append('img', imgDataUrl)
    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}
function renderMeme(givenLine = {}) {
    const { selectedImgId, selectedLineIdx, lines, stickers } = getMeme()
    drawImg(selectedImgId, lines, stickers, givenLine)

}

function drawImg(selectedImgId, lines, stickers, givenLine = {}) {
    var img = new Image()
    const images = getImg()
    var chosenImg = images.filter(image => {
        return image.id == selectedImgId
    })[0]
    img.src = chosenImg.url


    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        lines.map((line, index) => {
            gCtx.font = `${line.size}px Montserrat`;
            line.width = gCtx.measureText(line.txt).width
            drawText(line.size, line.txt, index, line, line.pos, line.color)

        })
        if (givenLine.txt) {
            drawText(givenLine.size, givenLine.txt, lines.length, givenLine, givenLine.pos, givenLine.color)
        }

        stickers.map(sticker => {
            drawSticker(sticker.id, sticker)
        })


    }
}


function drawText(size, text, idx, line, pos = false, color = 'red') {
    gCtx.lineWidth = 2;
    gCtx.fillStyle = color;
    if (pos == false) {
        if (idx === 0) {
            line.pos = { x: 0, y: size }
            gCtx.fillText(text, 0, size)
        }
        if (idx === 1) {
            line.pos = { x: 0, y: gElCanvas.height }
            gCtx.fillText(text, 0, gElCanvas.height)
        }
        if (idx === 2) {
            line.pos = { x: 0, y: gElCanvas.height / 2 }
            gCtx.fillText(text, 0, gElCanvas.height / 2)
        }
        if (idx > 2 && idx <= 6) {
            line.pos = { x: 0, y: gElCanvas.height / idx }
            gCtx.fillText(text, 0, gElCanvas.height / idx)
        }
        if (idx > 6) {
            line.pos = { x: 0, y: gElCanvas.height / (idx - 5) + gElCanvas.height / 2 }
            gCtx.fillText(text, 0, gElCanvas.height / (idx - 5) + gElCanvas.height / 2)
        }
    }
    else {
        gCtx.fillText(text, pos.x, pos.y)
    }
}

