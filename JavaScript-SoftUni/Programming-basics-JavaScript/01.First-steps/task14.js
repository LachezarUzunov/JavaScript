function party(input)    {
    let naem = Number(input[0]);
    let torta = naem * 20/100;
    let napitki = torta * 55/100;
    let animator = naem / 3;
    let pariNeeded = naem + torta + napitki + animator;

    console.log(pariNeeded);

}

party(["3720"])