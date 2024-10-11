const calculateButton = document.getElementById("noakhalibtn");
calculateButton.addEventListener('click', function () {

    let donate1 = parseFloat(document.getElementById("noakhali").value) || 0;
    let donate2 = parseFloat(document.getElementById("feni").value) || 0;
    let donate3 = parseFloat(document.getElementById("quota").value) || 0;
    if (donate1 < 0) {
        alert("Donation amount tk cannot be negative!!!");
        donate1 = 0;
    }
    if (donate2 < 0) {
        alert("Donation amount tk cannot be negative!!!");
        donate2 = 0;
    }
    if (donate3 < 0) {
        alert("Donation amount tk cannot be negative!!!");
        donate3 = 0;
    }
    const totalDonate = 5500 + donate1 + donate2 + donate3
    const totalDonateElement = document.getElementById("total");
    totalDonateElement.innerText = totalDonate.toFixed(2);


});


const calculateButton2 = document.getElementById("fenibtn");
calculateButton2.addEventListener('click', function () {
    
    let donate1 = parseFloat(document.getElementById("noakhali").value) || 0;
    let donate2 = parseFloat(document.getElementById("feni").value) || 0;
    let donate3 = parseFloat(document.getElementById("quota").value) || 0;

    if (donate1 < 0) {
        alert("Donation amount tk cannot be negative!!!");
        donate1 = 0;
    }
    if (donate2 < 0) {
        alert("Donation amount tk cannot be negative!!!");
        donate2 = 0;
    }
    if (donate3 < 0) {
        alert("Donation amount tk cannot be negative!!!");
        donate3 = 0;
    }

    const totalDonate = 5500 + donate1 + donate2 + donate3;
    const totalDonateElement = document.getElementById("total");
    totalDonateElement.innerText = totalDonate.toFixed(2);
});

const calculateButton3 = document.getElementById("quotabtn");
calculateButton3.addEventListener('click', function () {
    
    let donate1 = parseFloat(document.getElementById("noakhali").value) || 0;
    let donate2 = parseFloat(document.getElementById("feni").value) || 0;
    let donate3 = parseFloat(document.getElementById("quota").value) || 0;

    if (donate1 < 0) {
        alert("Donation amount tk cannot be negative!!!");
        donate1 = 0;
    }
    if (donate2 < 0) {
        alert("Donation amount tk cannot be negative!!!");
        donate2 = 0;
    }
    if (donate3 < 0) {
        alert("Donation amount tk cannot be negative!!!");
        donate3 = 0;
    }
    const totalDonate = 5500 + donate1 + donate2 + donate3;
    const totalDonateElement = document.getElementById("total");
    totalDonateElement.innerText = totalDonate.toFixed(2);
});
