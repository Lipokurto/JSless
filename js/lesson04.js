function searchMain() {
    let userText = document.getElementById('userData').value
    let yandexCode = 'https://yandex.ru/search/?lr=146&text='
    let fullTextSearch = yandexCode + userText
    console.log(fullTextSearch)
    // document.location.href = fullTextSearch
    window.open(fullTextSearch,'_blank')
}
function color(bgc) {
    document.body.style.background = bgc
}
function imageBg(source1) {
    document.body.style.backgroundImage = "url('"+source1+"')"
}

