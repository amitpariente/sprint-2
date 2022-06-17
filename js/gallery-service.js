'use strict'


var gImgs =
    [{ id: 1 - 1, url: 'meme-imgs/1.jpg', keywords: ['funny', 'trump'] },
    { id: 2 - 1, url: 'meme-imgs/2.jpg', keywords: ['cute', 'dog'] },
    { id: 3 - 1, url: 'meme-imgs/3.jpg', keywords: ['cute', 'dog','baby'] },
    { id: 4 - 1, url: 'meme-imgs/4.jpg', keywords: ['cute', 'cat'] },
    { id: 5 - 1, url: 'meme-imgs/5.jpg', keywords: ['funny', 'baby'] },
    { id: 6 - 1, url: 'meme-imgs/6.jpg', keywords: ['funny'] },
    { id: 7 - 1, url: 'meme-imgs/7.jpg', keywords: ['funny', 'baby'] },
    { id: 8 - 1, url: 'meme-imgs/8.jpg', keywords: ['funny', 'magician'] },
    { id: 9 - 1, url: 'meme-imgs/9.jpg', keywords: ['funny', 'baby'] },
    { id: 10 - 1, url: 'meme-imgs/10.jpg', keywords: ['funny', 'obama','laughing'] },
    { id: 11 - 1, url: 'meme-imgs/11.jpg', keywords: ['funny', 'kiss'] },
    { id: 12 - 1, url: 'meme-imgs/12.jpg', keywords: [ 'man'] },
    { id: 13 - 1, url: 'meme-imgs/13.jpg', keywords: ['leonardo dicaprio', 'cheers'] },
    { id: 14 - 1, url: 'meme-imgs/14.jpg', keywords: ['funny', 'shocked'] },
    { id: 15 - 1, url: 'meme-imgs/15.jpg', keywords: ['man', 'little'] },
    { id: 16 - 1, url: 'meme-imgs/16.jpg', keywords: ['funny', 'man','laughing'] },
    { id: 17 - 1, url: 'meme-imgs/17.jpg', keywords: ['putin', 'man','two'] },
    { id: 18 - 1, url: 'meme-imgs/18.jpg', keywords: ['look', 'toy'] }]


function sortImgByTxt(el) {
    var searchedImgs=gImgs.filter(img=>{
       if( img.keywords.includes(el))return img
    })
    console.log(searchedImgs);
    renderSortedGallery(searchedImgs)

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
    document.querySelector('.share-container').innerHTML = ''
 

}

function closeModal() {
    var elModalContainer = document.querySelector('.modal')
    elModalContainer.classList.toggle('modal-open')

    var elEditorContainer = document.querySelector('.editor-container')
    elEditorContainer.classList.toggle('editor-container-close')
}
function renderSortedGallery(imgs) {
    var strHTML = ''
    var elImgsContainer = document.querySelector('.grid-container')
    if(img.length===0){
        renderGallery()
    }
    for (var i = 0; i < imgs.length; i++) {
        var img= imgs[i]
        strHTML += `<a href="#" onclick="onImgSelect(this)"><img data-id=${img.id} class="img" src="${img.url}"></a>`
    }
    elImgsContainer.innerHTML = strHTML
}