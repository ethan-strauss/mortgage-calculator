const form = document.getElementById("mortgage-form");
const inputAmount = document.getElementById("amount");
const inputRate = document.getElementById("rate");
const inputYears =  document.getElementById("years");
const inputUtilities =  document.getElementById("utilities");
const inputTaxes = document.getElementById("taxes")
const inputHOA =  document.getElementById("hoa");
const result =  document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const amount = parseFloat(inputAmount.value);
    const rate = parseFloat(inputRate.value);
    const years = parseFloat(inputYears.value);
    let taxes = parseFloat(inputTaxes.value);
    if(NaN(taxes)){
        taxes = 0
    };

    let utilities = parseFloat(inputUtilities.value);
    if( isNaN(utilities) ){
        utilities = 0;
    };

    let hoa = parseFloat(inputHOA.value);
    if (isNaN(hoa)){
        hoa = 0
    };

    const interest = (rate / 100) / 12;
    const totalPayments = years * 12;
    let monthlyPayment;

    if (rate === 0){
        monthlyPayment =( amount / totalPayments) + utilities + hoa;
    } else {
        const factor = Math.pow(1 + interest, totalPayments);
        monthlyPayment = amount * (interest * factor) / (factor - 1) + utilities + hoa + taxes;
    }
    result.textContent = "Monthly Payment: $" + monthlyPayment.toFixed(2);

});
