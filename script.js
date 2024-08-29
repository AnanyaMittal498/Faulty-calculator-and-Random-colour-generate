if(Math.random() < 0.1){
    function sum(a,b){
        return a-b
    }
    function product(a,b){
        return a+b
    }
    function minus(a,b){
        return a/b
    }
    function divide(a,b){
        return a**b
    }
}
else{
    function sum(a,b){
        return a+b
    }
    function product(a,b){
        return a*b
    }
    function minus(a,b){
        return a-b
    }
    function divide(a,b){
        return a/b
    }
}
let s=sum(78,2)
let p=product(7,2)
let m=minus(78,2)
let d=divide(8,2)

console.log("output of operation " +s)
console.log("output of operation " +p)
console.log("output of operation " +m)
console.log("output of operation " +d)

let adjectives=
{
    key1:"Crazy",
    key2:"Amazing",
    key3:"Fire"
};
let ShopName=
{
    key1:"Engine",
    key2:"Foods",
    key3:"Garments"
};
let Another =
{
    key1:"Bros",
    key2:"Limited",
    key3:"Hub"
};
function random(obj)
{
  let values = Object.values(obj);
  let randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

let str1 = random(adjectives);
let str2 = random(ShopName);
let str3 = random(Another);
  
console.log(str1 + str2 + str3);