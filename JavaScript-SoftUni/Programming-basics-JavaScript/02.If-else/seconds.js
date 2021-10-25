function seconds(input) {
    let competitor1 = Number(input[0]);    
    let competitor2 = Number(input[1]); 
    let competitor3 = Number(input[2]); 

    let allResult = competitor1 + competitor2 + competitor3;

    if(allResult <=9)   {
        console.log(`0:0${allResult}`)

    }   else if(allResult <= 59) {
        console.log(`0:${allResult}`);

    }   else if(allResult % 60 <= 9)    {
        let min = Math.floor(allResult / 60);
        let sec = allResult % 60;

        console.log(`${min}:0${sec}`);

     } else {
        let min = Math.floor(allResult / 60);
        let sec = allResult % 60;

        console.log(`${min}:${sec}`);

        }

  
}

seconds(["55", "55", "55"])



  