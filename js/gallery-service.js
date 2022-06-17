'use strict'


var gImgs =
    [{ id: 1 - 1, url: 'meme-imgs/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2 - 1, url: 'meme-imgs/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3 - 1, url: 'meme-imgs/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4 - 1, url: 'meme-imgs/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5 - 1, url: 'meme-imgs/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6 - 1, url: 'meme-imgs/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7 - 1, url: 'meme-imgs/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8 - 1, url: 'meme-imgs/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9 - 1, url: 'meme-imgs/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10 - 1, url: 'meme-imgs/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11 - 1, url: 'meme-imgs/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12 - 1, url: 'meme-imgs/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13 - 1, url: 'meme-imgs/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14 - 1, url: 'meme-imgs/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15 - 1, url: 'meme-imgs/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16 - 1, url: 'meme-imgs/16.jpg', keywords: ['funny', 'cat'] },
    { id: 17 - 1, url: 'meme-imgs/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18 - 1, url: 'meme-imgs/18.jpg', keywords: ['funny', 'cat'] }]


function sortImgByTxt(el) {
    gImgs.find
    console.log(el.value);

}


function getImg() {
    return gImgs
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
}

function closeModal() {
    var elModalContainer = document.querySelector('.modal')
    elModalContainer.classList.toggle('modal-open')

    var elEditorContainer = document.querySelector('.editor-container')
    elEditorContainer.classList.toggle('editor-container-close')
}