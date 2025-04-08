const form = document.getElementById("mortgage-form");
const inputAmount = document.getElementById("amount");
const inputRate = document.getElementById("rate");
const inputYears =  document.getElementById("years");
const result =  document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const amount = parseFloat(inputAmount.value);
    const rate = parseFloat(inputRate.value);
    const years = parseFloat(inputYears.value);

    const interest = (rate / 100) / 12;
    const totalPayments = years * 12;

    if (rate === 0){
        let monthlyPayment;
        monthlyPayment = amount / totalPayments;
    } else {
        const factor = Math.pow(1 + interest, totalPayments);
        monthlyPayment = amount * (interest * factor) / (factor - 1);
    }
    result.textContent = "Monthly Payment: $" + monthlyPayment.toFixed(2);

});
