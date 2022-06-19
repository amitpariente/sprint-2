
const PAGE_SIZE = 3
var gPageIdx = 0
var gStickersCount

var gStickers = [
    { id: 0, src: 'stickers-imgs/sticker-1.png' },
    { id: 1, src: 'stickers-imgs/sticker-2.png' },
    { id: 2, src: 'stickers-imgs/sticker-3.png' },
    { id: 3, src: 'stickers-imgs/sticker-4.png' },
    { id: 4, src: 'stickers-imgs/sticker-5.png' },
    { id: 5, src: 'stickers-imgs/sticker-6.png' },
    { id: 6, src: 'stickers-imgs/sticker-7.png' },
    { id: 7, src: 'stickers-imgs/sticker-8.png' },
    { id: 8, src: 'stickers-imgs/sticker-9.png' },
    { id: 9, src: 'stickers-imgs/sticker-10.png' },
    { id: 10, src: 'stickers-imgs/sticker-11.png' },
    { id: 11, src: 'stickers-imgs/sticker-12.png' },
    { id: 12, src: 'stickers-imgs/sticker-13.png' },
    { id: 13, src: 'stickers-imgs/sticker-14.png' },
    { id: 14, src: 'stickers-imgs/sticker-15.png' },
]

function _getStickers() {
    return gStickers
}

function onMoveToPage(page) {
    moveToPage(page)
    renderStickers()
}

function GetStickerClicked(pos) {
    const meme = getMeme()
    var clickedX = pos.x
    var clickedY = pos.y
    console.log(clickedX);
    console.log(clickedY);

    var clickedstickers = meme.stickers.filter((sticker, index) => {
        console.log(clickedY ,sticker.pos.y);
        console.log(clickedX , sticker.pos.x);
        if ((clickedX >= sticker.pos.x && clickedX <= sticker.pos.x + sticker.width) &&
            (clickedY >= sticker.pos.y && clickedY >= sticker.pos.y - sticker.size)) {
            gMeme.selectedStickerIdx = index
            return true
        }
        else {
            console.log('yo');
            return false
        }
    })
    if (clickedstickers.length == 0) return false
    return true
}

function getStickersForDisplay() {
    var stickers = gStickers
    gStickersCount = stickers.length
    if (gPageIdx >= gStickersCount / PAGE_SIZE) {
        gPageIdx = 0
    }
    if (gPageIdx < 0) {
        gPageIdx = gStickersCount / PAGE_SIZE - 1
    }
    const startIdx = gPageIdx * PAGE_SIZE
    stickers = stickers.slice(startIdx, startIdx + PAGE_SIZE)
    return stickers
}

function getPageCount() {
    return Math.ceil(gStickersCount / PAGE_SIZE)
}

function renderStickers() {
    const stickers = getStickersForDisplay()
    const strHTMLs = stickers.map(
        (sticker) => `
        <a data-id=${sticker.id} onclick="onStickerSelect(this)" href="#"><img src="${sticker.src}"></a>`
    )
    document.querySelector('.stickers-container').innerHTML = strHTMLs.join('')

}



function moveToPage(page) {
    if (page === '+') gPageIdx++
    if (page === '-') gPageIdx--
}