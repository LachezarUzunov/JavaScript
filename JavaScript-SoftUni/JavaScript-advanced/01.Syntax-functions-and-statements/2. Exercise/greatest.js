function greatest(num1, num2) {

    while (num2 != 0) {
        let newLeft = num2;
        num2 = num1 % num2;
        num1 = newLeft;
    }
    console.log(num1);
};

greatest(2154, 458);