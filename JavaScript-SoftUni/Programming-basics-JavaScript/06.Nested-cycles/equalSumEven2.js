function equalSumEven2(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    let str = "";

    for (let i = a; i <= b; i++) {
        let currentNum = i + "";
        let oddSum = 0;
        let evenSum = 0;

        for(let j = 0; j < currentNum.length; j++) {

            let num = Number(currentNum[j]);
            if (j % 2 == 0) {
                evenSum += num;
            } else {
                oddSum += num;
            }
        }
        
        if (oddSum == evenSum) {
            str += currentNum + " ";
        }
    }

    if (str.length > 0) {
        console.log(str);
    }
}

equalSumEven2(["100000",
"100050"]);