'use strict'


var gImgs =
    [{ id: 1 - 1, url: 'meme-imgs/1.jpg', keywords: ['funny', 'trump'] },
    { id: 2 - 1, url: 'meme-imgs/2.jpg', keywords: ['cute', 'dog'] },
    { id: 3 - 1, url: 'meme-imgs/3.jpg', keywords: ['cute', 'dog', 'baby'] },
    { id: 4 - 1, url: 'meme-imgs/4.jpg', keywords: ['cute', 'cat'] },
    { id: 5 - 1, url: 'meme-imgs/5.jpg', keywords: ['funny', 'baby'] },
    { id: 6 - 1, url: 'meme-imgs/6.jpg', keywords: ['funny'] },
    { id: 7 - 1, url: 'meme-imgs/7.jpg', keywords: ['funny', 'baby'] },
    { id: 8 - 1, url: 'meme-imgs/8.jpg', keywords: ['funny', 'magician'] },
    { id: 9 - 1, url: 'meme-imgs/9.jpg', keywords: ['funny', 'baby'] },
    { id: 10 - 1, url: 'meme-imgs/10.jpg', keywords: ['funny', 'obama', 'laughing'] },
    { id: 11 - 1, url: 'meme-imgs/11.jpg', keywords: ['funny', 'kiss'] },
    { id: 12 - 1, url: 'meme-imgs/12.jpg', keywords: ['man'] },
    { id: 13 - 1, url: 'meme-imgs/13.jpg', keywords: ['leonardo dicaprio', 'cheers'] },
    { id: 14 - 1, url: 'meme-imgs/14.jpg', keywords: ['funny', 'shocked'] },
    { id: 15 - 1, url: 'meme-imgs/15.jpg', keywords: ['man', 'little'] },
    { id: 16 - 1, url: 'meme-imgs/16.jpg', keywords: ['funny', 'man', 'laughing'] },
    { id: 17 - 1, url: 'meme-imgs/17.jpg', keywords: ['putin', 'man', 'two'] },
    { id: 18 - 1, url: 'meme-imgs/18.jpg', keywords: ['look', 'toy'] }
    ]


const memesSentences = [
    'I never eat falafel',
    'DOMS DOMS EVERYWHERE',
    'Stop Using i in for loops',
    'Armed in knowledge',
    'Js error "Unexpected String"',
    'One does not simply write js',
    'I`m a simple man i see vanilla JS, i click like!',
    'JS, HTML,CSS?? Even my momma can do that',
    'May the force be with you',
    'I know JS',
    'JS Where everything is made up and the rules dont matter',
    'Not sure if im good at programming or good at googling',
    'But if we could',
    'JS what is this?',
    'Write hello world , add to cv 7 years experienced',
]

function sortImgByTxt(val) {
    var searchedImgs = gImgs.filter(img => {
        if (img.keywords.includes(val)) {
            return true
        }
        else {
            return false
        }
    })
    renderSortedGallery(searchedImgs)

}


function getImg() {
    return gImgs
}

function getRandomMeme() {
    const imgIdx = getRandomInt(0, gImgs.length - 1)
    const color = getRandomColor()
    const meme = getMeme()
    const linesNum = Math.random() < 0.5 ? 1 : 2;
    const lines = []
    meme.selectedImgId = imgIdx
    if (linesNum === 1) {
        var lineIdx = getRandomInt(0, memesSentences.length - 1)
        var line = {}
        line.txt = memesSentences[lineIdx]
        line.color = color
        line.size = 40
        lines.push(line)

    } else {
        for (let i = 0; i < 2; i++) {
            var lineIdx = getRandomInt(0, memesSentences.length - 1)
            var line = {}
            line.txt = memesSentences[lineIdx]
            line.color = color
            line.size = 40
            lines.push(line)
        }


    }
    meme.lines = lines
    closeModal()
    renderMeme()
}

function renderGallery() {
    var strHTML = ''
    var elImgsContainer = document.querySelector('.grid-container')
    for (var i = 0; i < gImgs.length; i++) {
        strHTML += `<a href="#" onclick="onImgSelect(this)"><img data-id=${i} class="img" src="${gImgs[i].url}"></a>`
    }
    elImgsContainer.innerHTML = strHTML
}


function openModal() {
    var elModalContainer = document.querySelector('.modal')
    elModalContainer.classList.toggle('modal-open')

    var elEditorContainer = document.querySelector('.editor-container')
    elEditorContainer.classList.toggle('editor-container-close')
    document.querySelector('.share-container').innerHTML = ''
    var elGalleryBtn = document.querySelector('.gallery')
    elGalleryBtn.classList.toggle('clicked')
}

function closeModal() {
    var elModalContainer = document.querySelector('.modal')
    elModalContainer.classList.toggle('modal-open')

    var elEditorContainer = document.querySelector('.editor-container')
    elEditorContainer.classList.toggle('editor-container-close')
    var elGalleryBtn = document.querySelector('.gallery')
    elGalleryBtn.classList.remove('clicked')
}
function renderSortedGallery(imgs) {
    var strHTML = ''
    var elImgsContainer = document.querySelector('.grid-container')
    if (imgs.length === 0) {
        renderGallery()
    }
    else {
        for (var i = 0; i < imgs.length; i++) {
            var img = imgs[i]
            strHTML += `<a href="#" onclick="onImgSelect(this)"><img data-id=${img.id} class="img" src="${img.url}"></a>`
            elImgsContainer.innerHTML = strHTML
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function getRandomColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`
}