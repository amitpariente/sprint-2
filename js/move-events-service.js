var gIsDrag = false
var gIsStickerDrag = false
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    const pos = getEvPos(ev)
    var isLineClicked = getTextClicked(pos)
    var isStickerClicked = GetStickerClicked(pos)
    if (isLineClicked) {
        gIsDrag = true
    }
    else if (isStickerClicked) {
        gIsStickerDrag = true
    }
    document.body.style.cursor = 'grabbing'

}

function onMove(ev) {
    const meme = getMeme();
    const pos = getEvPos(ev)
    if (gIsDrag) {
        meme.lines[gMeme.selectedLineIdx].pos = pos
        renderMeme()
    }
    if (gIsStickerDrag) {
        meme.stickers[meme.selectedStickerIdx].pos = pos
        console.log( meme.stickers[meme.selectedStickerIdx].pos);
        renderMeme()
    }
}

function onUp() {
    gIsDrag = false
    gIsStickerDrag=false
    document.body.style.cursor = 'auto'
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}