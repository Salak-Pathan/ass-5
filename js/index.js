const calculateButton = document.getElementById("noakhalibtn");
calculateButton.addEventListener('click', function () {
    
    const donate1 = parseFloat(document.getElementById("noakhali").value);
    console.log(donate1);
});


const calculateButton2 = document.getElementById("fenibtn");
calculateButton2.addEventListener('click', function () {
    
    const donate2 = parseFloat(document.getElementById("feni").value);
    console.log(donate2);
});

const calculateButton3 = document.getElementById("quotabtn");
calculateButton3.addEventListener('click', function () {
    
    const donate3 = parseFloat(document.getElementById("quota").value);
    console.log(donate3);
    
});
const calculateButton4 = document.getElementById("total");
calculateButton4.addEventListener('click' , function(){
    const total = parseFloat(document.getElementById("total").value);
    const totalDonate = donate1 + donate2 + donate3;
    const totalDonateElement = document.getElementById("total");
    totalDonateElement.innerText = totalDonate;
})