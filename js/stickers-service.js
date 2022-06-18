
const PAGE_SIZE = 3
var gPageIdx = 0
var gStickersCount
var gStickers = [
    '<img src="/stickers/sticker-1.png">',
    '<img src="/stickers/sticker-2.png">',
    '<img src="/stickers/sticker-3.png">',
    '<img src="/stickers/sticker-4.png">',
    '<img src="/stickers/sticker-5.png">',
    '<img src="/stickers/sticker-6.png">',
    '<img src="/stickers/sticker-7.png">',
    '<img src="/stickers/sticker-8.png">',
    '<img src="/stickers/sticker-9.png">',
    '<img src="/stickers/sticker-10.png">',
    '<img src="/stickers/sticker-11.png">',
    '<img src="/stickers/sticker-12.png">',
    '<img src="/stickers/sticker-13.png">',
    '<img src="/stickers/sticker-14.png">',
    '<img src="/stickers/sticker-15.png">',
]

function onMoveToPage(page) {
    moveToPage(page)
    renderStickers()
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
        <a onclick="onStickerSelect(this)" href="#">${sticker}</a>`
    )
    document.querySelector('.stickers-container').innerHTML = strHTMLs.join('')

}



function moveToPage(page) {
    if (page === '+') gPageIdx++
    if (page === '-') gPageIdx--
}