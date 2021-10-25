function textCount(input) {
    let text = input[0];

    let messageLength = text.length;
    let spaceCount = 0;

    for(let i = 0; i < messageLength; i++) {
        if(text[i] === " ") {
            spaceCount++;
        }

    }

    let wordsCount = spaceCount + 1;

    if (wordsCount <= 10) {
        console.log(`The message was sent successfully!`);
    } else {
        console.log(`The message is too long to be send! Has ${wordsCount} words.`)

    }

}

textCount(["This message has exactly eleven words. One more as it's allowed!"]);