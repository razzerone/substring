let fs = require('fs');
let argcmd = process.argv;

let text = fs.readFileSync(argcmd[2]);
let substring = fs.readFileSync(argcmd[3]);

let alph = new Array();

for (let i = 0; i < substring.length; i++)
    alph[substring[i]] = 0;

let delta = new Array(substring.length + 1);

for (let i = 0; i < delta.length; i++)
    delta[i] = new Array(alph.length);

for (i in alph)
    delta[0][i] = 0;

for (let i = 0; i < substring.length; i++){
    let prev = delta[i][substring[i]];
    delta[i][substring[i]] = i + 1;
    for (j in alph)
        delta[i + 1][j] = delta[prev][j];
}

let point = 0;

for (let i = 0; i < text.length; i++){
    if (delta[point][text[i]]){
        point = delta[point][text[i]];
        if (point === substring.length)
            console.log(i - substring.length + 1);
    }
    else
        point = 0;
}

