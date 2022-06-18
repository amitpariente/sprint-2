var gIsDrag = false
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
    //Get the ev pos from mouse or touch
    const pos = getEvPos(ev)
    var isLineClicked = getTextClicked(pos)
    if (!isLineClicked) return
    gIsDrag = true
    console.log(1);
    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    const meme = getMeme();
    if (gIsDrag) {
        const pos = getEvPos(ev)
        //Calc the delta , the diff we moved
        meme.lines[gMeme.selectedLineIdx].pos = pos
        //The canvas is render again after every move
        renderMeme()
    }
}

function onUp() {
    gIsDrag = false
    document.body.style.cursor = 'auto'
}

function getEvPos(ev) {
    //Gets the offset pos , the default pos
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    // Check if its a touch ev
    if (gTouchEvs.includes(ev.type)) {
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}