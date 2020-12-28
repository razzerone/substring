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
            textHash += text.charCodeAt(i) * text.charCodeAt(i);
            substringHash += substring.charCodeAt(i) * substring.charCodeAt(i);
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

            textHash += text.charCodeAt(i + substring.length) * text.charCodeAt(i + substring.length)
                - text.charCodeAt(i) * text.charCodeAt(i);
        }
    });
});
