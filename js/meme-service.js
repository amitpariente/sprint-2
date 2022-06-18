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
            color: 'red',
            pos: false,
            width: 0
        },
    ]
   
}
function getMeme() {
    return gMeme
}

function setLineTxt(el) {
    const elColorInput = document.querySelector('input[type=color]')
    const color = elColorInput.value
    if (gMeme.selectedLineIdx == -1) {
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
    const elColorInput = document.querySelector('input[type=color]')
    const color = elColorInput.value
    const elTxtInput = document.querySelector('.memeTxt')
    const txt = elTxtInput.value
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
    wantedLine.size -= 4
    renderMeme()
}

function getTextClicked(pos) {
    var clickedX = pos.x
    var clickedY = pos.y
    console.log(clickedX)
    console.log(clickedY)




    var clickedLines = gMeme.lines.filter((line, index) => {
        console.log(line.pos.x)
        console.log(line.pos.y)
        console.log(line.width)



        if ((clickedX >= line.pos.x && clickedX <= line.pos.x + line.width) && (clickedY <= line.pos.y && clickedY >= line.pos.y - line.size)) {
            gMeme.selectedLineIdx = index
            changeInputText(line.txt)
            return true
        }
        else {
            return false
        }
    })
    if (clickedLines.length == 0) return false
    return true
}
function changeInputText(txt) {
    var elMemeTxt = document.querySelector('.memeTxt')
    elMemeTxt.value = txt
}
