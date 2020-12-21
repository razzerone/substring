let fs = require('fs');
let arg = process.argv;


fs.readFile(arg[2], (err, text) => {
    if (err) {
        console.error(err);
        return;
    }

    fs.readFile(arg[3], (err, substring) => {
        if (err) {
            console.error(err);
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

        for (let i = 0; i <= text.length - substring.length + 1; i++) {
            let j = 0;

            while (text[i + j - 1] === substring[j]) {
                j++;
                if (j === substring.length) {
                    console.log(i);
                    break;
                }
            }
        }
    });
});
