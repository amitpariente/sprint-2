'use strict'

var gUserTxtClr
var gSelectedImgId
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 40,
            align: 'left',
            color: 'red'
        },
    ]
}
function getMeme() {
    return gMeme
}

function setLineTxt(el) {
    var elColorInput = document.querySelector('input[type=color]')
    var color = elColorInput.value
    if (gMeme.selectedLineIdx == -1) {
        console.log(el.value);
        var text = el.value
        var line = {
            txt: text,
            size: 40,
            align: 'left',
            color
        }
        renderMeme(line)
    } else {
        var line = gMeme.lines[gMeme.selectedLineIdx]
        line.txt = el.value
        renderMeme()
    }
}

function addLineTxt() {
    var elColorInput = document.querySelector('input[type=color]')
    var color = elColorInput.value
    var elTxtInput = document.querySelector('.memeTxt')
    var txt = elTxtInput.value
    if (txt === '') return
    var line = {
        txt,
        size: 40,
        align: 'left',
        color
    }
    if (gMeme.selectedLineIdx === -1) {
        gMeme.lines.push(line)
        var newIdx = gMeme.lines.length - 1
        gMeme.selectedLineIdx = newIdx
        console.log(newIdx);
    } else return
    renderMeme()
}

function addLineClr(val) {
    if (gMeme.selectedLineIdx === -1) {
        var elTxtInput = document.querySelector('.memeTxt')
        var text = elTxtInput.value
        var line = {
            txt: text,
            size: 40,
            align: 'left',
            color: val
        }
        renderMeme(line)
    } else {
        gMeme.lines[gMeme.selectedLineIdx].color = val
        renderMeme()
    }
    var elIcon = document.querySelector('.icon-color')
    elIcon.style.color = val
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
    renderMeme()
}


function changeColor() {
    var elInput = document.querySelector('input[type=color]')
    elInput.click()
    console.log(elInput);

}

function onSwitchLine() {
    console.log(gMeme.selectedLineIdx);
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
    }
    var elTxtInput = document.querySelector('.memeTxt')
    elTxtInput.value = gMeme.lines[gMeme.selectedLineIdx].txt
}


function plusBtnClicked() {
    gMeme.selectedLineIdx = -1


}

function increaseByClick() {
    var wantedLine = gMeme.lines[gMeme.selectedLineIdx]
    console.log(gMeme.lines[gMeme.selectedLineIdx]);
    wantedLine.size += 4
    renderMeme()

}

function decreaseByClick() {
    var wantedLine = gMeme.lines[gMeme.selectedLineIdx]
    console.log(gMeme.lines[gMeme.selectedLineIdx]);
    console.log(wantedLine.size);    
    wantedLine.size -=4
    renderMeme()
}