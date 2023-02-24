const container = document.querySelector('.cont');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const upBtn = document.querySelector('.up');
const downBtn = document.querySelector('.down');

const car = document.querySelector('.car');

const lifeElem = document.querySelector('.life');

let life = 100;

lifeElem.style.width = life + '%';

upBtn.addEventListener('click', () => {
  let die =  life - 20;
  life = die;
  console.log(life)
  lifeElem.style.width = die + '%';
  if (life <= 0) {
    alert('You died')
    location.reload();
  }
})

if(touching(car, one)){
  console.log('Touching!');
}

function touching(car, one) {
  var carr = car.getBoundingClientRect();
  var onee = one.getBoundingClientRect();
  
  if (carr.right == onee.left) {
    return true;
  }
}


