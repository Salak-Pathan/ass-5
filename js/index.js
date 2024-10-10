const calculateButton = document.getElementById("noakhalibtn");
calculateButton.addEventListener('click', function () {
    
    const donate1 = parseFloat(document.getElementById("noakhali").value);
    console.log(donate1);
    const totalDonate = donate1
    const totalDonateElement = document.getElementById("total");
    totalDonateElement.innerText = totalDonate.toFixed(2);


});


const calculateButton2 = document.getElementById("fenibtn");
calculateButton2.addEventListener('click', function () {
    
    const donate2 = parseFloat(document.getElementById("feni").value);
    console.log(donate2);
    const totalDonate = donate2
    const totalDonateElement = document.getElementById("total");
    totalDonateElement.innerText = totalDonate.toFixed(2);
});

const calculateButton3 = document.getElementById("quotabtn");
calculateButton3.addEventListener('click', function () {
    
    const donate3 = parseFloat(document.getElementById("quota").value);
    console.log(donate3);
    const totalDonate = donate3
    const totalDonateElement = document.getElementById("total");
    totalDonateElement.innerText = totalDonate.toFixed(2);
});
