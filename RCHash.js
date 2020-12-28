let fs = require('fs');
let arg = process.argv;


fs.readFile(arg[2], (err, text) => {
    if (err) {
        console.error(err);
        return;
    }

    fs.readFile(arg[3], (error, substring) => {
        if (error) {
            console.error(error);
            return;
        }

        text = text.toString();
        substring = substring.toString();

        if (text === '' || substring === ''){
            console.log('Пустой файл');
            return;
        }

        if (text.length < substring.length){
            console.log('Подстрока не может быть больше строки');
            return;
        }

        let substringHash = 0;
        let textHash = 0;

        for (let i = 0; i < substring.length; i++){
            textHash += text.charCodeAt(i) * Math.pow(2, substring.length - i - 1);
            substringHash += substring.charCodeAt(i) * Math.pow(2, substring.length - i - 1);
        }

        for (let i = 0; i < text.length - substring.length + 1; i++){
            if (textHash === substringHash){
                for (let j = 0; j < substring.length; j++){
                    if (text[i + j] !== substring[j])
                        break;

                    if (j === substring.length - 1)
                        console.log(i);
                }
            }

            textHash = 2 * (textHash - text.charCodeAt(i) * Math.pow(2, substring.length- 1)) + text.charCodeAt(i + substring.length);
        }
    });
});
