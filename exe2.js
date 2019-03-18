let result = 0;
tab = process.argv;

for (let index = 2; index < tab.length; index++) {
    result += Number(tab[index]);
}

console.log(result);