let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

  if(window.scrollY > 0){
     header.classList.add('active');
  }else{
     header.classList.remove('active');
  }

}

const counters = document.querySelectorAll('.counter');
const speed = 200;


counters.forEach(counter => {
   const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText

      const inc = target / speed;

      if(count < target){
         counter.innerText =count + inc;
         setTimeout(updateCount, 1);

      }else {
         count.innerText = target;
      }
   }

   updateCount();

});