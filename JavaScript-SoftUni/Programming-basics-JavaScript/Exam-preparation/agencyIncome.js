function agencyIncome(input) {
    let avioCompany = input[0];
    let standardTickets = Number(input[1]);
    let kidsTickets = Number(input[2]);
    let netTicketPrice = Number(input[3]);
    let serviceTax = Number(input[4]);

    let kidsTicketsPrice = netTicketPrice * 0.3 + serviceTax;
    let standardTicketsEndPrice = netTicketPrice + serviceTax;

    let finalWinnings = ((kidsTicketsPrice * kidsTickets) + (standardTicketsEndPrice * standardTickets)) * 0.20;


    console.log(`The profit of your agency from ${avioCompany} tickets is ${(finalWinnings).toFixed(2)} lv.`);
}

agencyIncome(["WizzAir", "15", "5", "120", "40"]);