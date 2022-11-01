let box = document.getElementById('box-class');
let arrNumber = [1,2,3,4,5,6,7,8,9];

//To display Initial Box with Numbers  
arrNumber.map((number) => {
    box.innerHTML += '<li data-item=' + number + '>' + number + '</li>'
})

//Generic Method to add list
const showListOfNumbers=(data)=>{
  box.innerHTML = ''
  for(let i=0;i<arrNumber.length;i++){
      let listItem = document.createElement("li");
      listItem.innerHTML = arrNumber[i]
      listItem.setAttribute('data-item', arrNumber[i])
      box.appendChild(listItem)
  }
}
//Shuffle Array Method
const getShuffledNumbers=(numbersArrayItems) => {
  arrNumber = numbersArrayItems;
  for (let i = arrNumber.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrNumber[i], arrNumber[j]] = [arrNumber[j], arrNumber[i]];
  }
}

//To Shuffle Numbers onClick of Shuffle Button 
const handleShuffle = () => {
  getShuffledNumbers(arrNumber);
  showListOfNumbers(arrNumber);
}

//To Shuffle Numbers onClick of Sort Button 
const handleSort = () => {
arrNumber = arrNumber.sort((a, b) => { return a - b });
showListOfNumbers(arrNumber);
}

