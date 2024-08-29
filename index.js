let box = document.querySelectorAll(".box")
function getrandomcolor() {
    let r= Math.floor (Math.random ()*256);
    let g= Math.floor (Math.random ()*256);
    let b= Math.floor (Math.random ()*256);
    return `rgb(${r},${g},${b})`;
}
box.forEach( element => {
 element.style.color = getrandomcolor()
});
box.forEach( element => {
    element.style.backgroundColor = getrandomcolor()
   });