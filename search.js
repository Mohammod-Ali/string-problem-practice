const lyric = 'tumi bondhu kala pakhi ami jeno ki, bosonto kale tomai bolte parini';

const searchString = 'Pakhi'
const lyricLowerCase = lyric.toLocaleLowerCase()
const searchStringLowerCare = searchString.toLocaleLowerCase()
const doesExist =  lyricLowerCase.includes(searchStringLowerCare)

console.log(doesExist)

// ------------------------------------
// indexOf

if(lyric.indexOf('sada') !== -1){
    console.log('exist inside the string')
}
else{
    console.log('cannot find it')
}

// startsWith
console.log(lyric.startsWith('tumi'))

// endswith

const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png'
const existFile = fileName.endsWith('.pdf')
console.log(existFile)