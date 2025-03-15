

for (let i = 1; i <= 10; i++) {  
  console.log (i);
};

let b = 0;

while (b < 20) {
b++;
 console.log (b)
};


 let p = 10;
 do {    
    p--;
    console.log (p);
  }
  while (p > 1);


  const numbers = [4, 9, 16, 25];
  const newArr = numbers.map(num=> num * num)
    console.log (numbers);
    console.log (newArr);

const mylist = [65, 44, 12, 4];
const filteredLIST = mylist.filter(num=> num>10)

console.log (mylist);
console.log (filteredLIST);

const myTimeout = setTimeout(DisplayMeassageFun, 5000);

function DisplayMeassageFun() {
   console.log("Dive Africa is the best!");
}
