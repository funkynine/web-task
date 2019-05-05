// створити функцію яка буде переводити код morse в "людську" мову


const MORSE_LIST = {

    ".-":"A",
    "-...":"B",
    "-.-.":"C",
    "-..":"D",
    ".":"E",
    "..-.":"F",
    "--.":"G",
    "....":"H",
    "..":"I",
    ".---":"J",
    "-.-":"K",
    ".-..":"L",
    "--":"M",
    "-.":"N",
    "---":"O",
    ".--.":"P",
    "--.-":"Q",
    ".-.":"R",
    "...":"S",
    "-":"T",
    "..-":"U",
    "...-":"V",
    ".--":"W",
    "-..-":"X",
    "-.--":"Y",
    "--..":"Z",
    "/":" ",

    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",

    "...---...": "SOS",

    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":","

}

function morseDecoder(morseMessage) {

    let words = morseMessage.trim().split("   ");
    let decodedMessage = "";

    for (let word of words) {
        word = word.trim().split(" ");
        for (let letter of word) {
            letter = letter.trim();
            decodedMessage += MORSE_LIST[letter];
        }
        decodedMessage += " ";
    }
    decodedMessage = decodedMessage.replace("undefined".trim(), "").trim();

    return decodedMessage;
}

try{
    console.log(morseDecoder('.... . .-.. .-.. ---      .. --. --- .-.'));
}
catch (error){
    console.log(error);
}

