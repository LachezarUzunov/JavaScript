function radian(input) {
    let radian = Number(input[0]);
    let degrees = radian * 180 / Math.PI

    console.log(degrees.toFixed(0));
}

radian(["6.282"])