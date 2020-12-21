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

        for (let i = 0; i <= text.length - substring.length + 1; i++)
            for (let j = 0; j < substring.length; j++){
                if (text[i + j] !== substring[j])
                    break;

                if (j === substring.length - 1)
                    console.log(i);
            }
    });
});
