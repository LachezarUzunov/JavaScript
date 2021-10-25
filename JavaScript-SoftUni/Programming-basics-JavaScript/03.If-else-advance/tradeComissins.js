function tradeComissions(input) {
    let town = input[0];
    let salesVolume = Number(input[1]);
    

    if (salesVolume < 0) {
        console.log("error");
    } else if (town === "Sofia" && salesVolume <= 500){
        console.log((salesVolume * 0.05).toFixed(2));
    } else if (town === "Sofia" && salesVolume <= 1000) {
        console.log((salesVolume * 0.07).toFixed(2));
    } else if (town === "Sofia" && salesVolume <= 10000) {
        console.log((salesVolume * 0.08).toFixed(2));
    } else if (town === "Sofia" && salesVolume > 10000) {
        console.log((salesVolume * 0.12).toFixed(2));

    } else if (town === "Varna" && salesVolume <= 500) {
        console.log((salesVolume * 0.045).toFixed(2));
    } else if (town === "Varna" && salesVolume <= 1000) {
        console.log((salesVolume * 0.075).toFixed(2));
    } else if (town === "Varna" && salesVolume <= 10000) {
        console.log((salesVolume * 0.10).toFixed(2));
    } else if (town === "Varna" && salesVolume) {
        console.log((salesVolume * 0.13).toFixed(2));

    } else if (town === "Plovdiv" && salesVolume <= 500) {
        console.log((salesVolume * 0.055).toFixed(2));
    } else if (town === "Plovdiv" && salesVolume <= 1000) {
        console.log((salesVolume * 0.08).toFixed(2));
    } else if (town === "Plovdiv" && salesVolume <= 10000) {
        console.log((salesVolume * 0.12).toFixed(2));
    } else if (town === "Plovdiv" && salesVolume > 10000) {
        console.log((salesVolume * 0.145).toFixed(2));
    } else {
        console.log("error");
    }

}

tradeComissions(["Varna",
"1000"]);