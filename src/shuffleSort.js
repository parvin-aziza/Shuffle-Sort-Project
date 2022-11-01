let box = document.getElementById('box-class');
let arrNumber = [1,2,3,4,5,6,7,8,9];

//To display Initial Box with Numbers  
arrNumber.map((number) => {
    box.innerHTML += '<li data-item=' + number + '>' + number + '</li>'
})