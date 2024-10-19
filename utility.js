function AddElementById(hiddenClassAddKorbo) {
    const element = document.getElementById(hiddenClassAddKorbo);
    element.classList.add('hidden');
}
function removeElementById(removeClassAddKorbo) {
    const element = document.getElementById(removeClassAddKorbo);
    element.classList.remove('hidden');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText =value;
}


