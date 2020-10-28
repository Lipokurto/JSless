function zad01() {
    // напсиать функцию которая сравнивает длину 2 слов и возвращает самоедлинное из них
    //задача 2: создать 2 переменные вне функции которые принимают слова с полей страницы html
    //добавить два атрибута в функцию, сравнить длину атрибутов по аналогии со словами
    //добавить третий параметр функции и дописать таким образом что б находилось самое длинное слово из трех
    let slovo1 = prompt('Vvedite slovo 1',)
    let slovo2 = prompt('Vvedite slovo 2',)
    if (slovo1.length > slovo2.length) {
        console.log('Slovo 1 dlinee: ' + slovo1)  
    } else if (slovo1.length < slovo2.length) {
        console.log('Slovo 2 dlinee: ' + slovo2)  
    } else {
        console.log('Slova ravni') 
    }

}
function zad02() {
let firstWord = document.getElementById('firstWord').value
let secondWord = document.getElementById('secondWord').value
let thirdWord = document.getElementById('thirdWord').value
let fur = ''
let maxSec = ''
if (firstWord.length > secondWord.length) {
    sum = 'Slovo 1 dlinee: ' + firstWord
    maxSec = firstWord
    document.getElementById('result').innerHTML = '<label>'+ firstWord +'</label>'
    
} else if (firstWord.length < secondWord.length) {
    sum = 'Slovo 2 dlinee: ' + secondWord
    maxSec = secondWord
    document.getElementById('result').innerHTML = '<label>'+ secondWord +'</label>'
    
} else if (maxSec.length > thirdWord.length) {
    sum = 'Slovo 3 dlinee: ' + thirdWord
    document.getElementById('result').innerHTML = '<label>'+ thirdWord +'</label>'
    }
    else {
        sum = 'KTOTO_RAVEN'
    document.getElementById('result').innerHTML = '<label>KTOTO_RAVEN</label>'  
    }
    return console.log(sum)
}


