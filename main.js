const btn = document.querySelector('.btn');
const card = document.querySelector('.cardCont');
const card2 = document.querySelector('.cardCont2');

//const hr = document.querySelectorAll('hr')
const closebtn = document.querySelectorAll('.flex button');
//console.log(closebtn)
let boolean = true;

//let originalValue = 100;
/*   hr.forEach((hr) => {
  hr.style.width = originalValue + '%';
})

*/
function call() {
 // alert(`this ${btn} has been clicked`)
 //card.style.right = '3%';
 
 //let removeValue = originalValue - 20;

//originalValue = removeValue;


 /*setInterval(() => {
   hr.forEach((hr) =>{
     hr.style.width = removeValue + '%';
   })
 },1000);*/

boolean ? card.style.right = '3%' : card2.style.right = '3%'

}

//let elem = Array.from(closebtn);
closebtn.forEach((x) => {
  x.addEventListener( 'click', () => {
    boolean ? card.style.right = '100%' :
      card2.style.right = '100%';
  })
})


/*function go() {
  boolean ? card.style.right = '100%' :
    card2.style.right = '100%';
}*/
