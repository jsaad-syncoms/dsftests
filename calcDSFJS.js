var pressno12 = document.getElementById('pressno12');
pressno12.addEventListener("click", multiplyNumbers, false);

function multiplyNumbers() {
    var no1 = document.getElementById('no1').value;
    var no2 = document.getElementById('no2').value;
    var no12 = document.getElementById('no12');
    
    no12.innerHTML = no1*no2;
}