function merniEd(input) {
    let chislo = Number(input[0]);
    let vhodMernaEdinica = input[1];
    let izhodMernaEdinica = input[2];

    if (vhodMernaEdinica === "mm") {
        chislo = chislo / 1000;

    } else if (vhodMernaEdinica === "cm") {
        chislo = chislo / 100;

    } else {
        chislo = chislo;
    }


    if (izhodMernaEdinica === "mm") {
        console.log((chislo * 1000).toFixed(3));

    } else if (izhodMernaEdinica === "cm") {
        console.log((chislo * 100).toFixed(3));

    } else if (izhodMernaEdinica === "m") {
        console.log(chislo.toFixed(3));

    }

}

merniEd(["12", "mm", "m"])