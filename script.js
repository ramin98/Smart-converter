let bleft = document.querySelectorAll('#left')
let bright = document.querySelectorAll('#right')
let leftinput = document.querySelector('#left-input')
let rightinput = document.querySelector('#right-input')
 
let input = 'RUB';
let output = 'USD';
 
   leftinput.addEventListener('keyup', function (){
  getvalue()
})

bleft.forEach((item) =>{
   item.addEventListener('click', function (){
   input = this.innerText
  getvalue()
})
})
 
bright.forEach((item) =>{
   item.addEventListener('click', function (){
   output = this.innerText
   getvalue()
})
})
 
const getvalue = async () => {
   let out;
   await fetch(`https://api.exchangerate.host/latest?base=${input}&symbols=${output}`)
   .then(result => result.json())
   .then((data) => {
   out = Object.values(data.rates)[0];
   rightinput.value = leftinput.value *out
   })

}
 
bleft.forEach((item) =>{
item.addEventListener('click', function() {
   bleft.forEach((item) =>{
                   item.classList.remove('active');
                   this.classList.add('active');
               });
})
})
 
bright.forEach((item) =>{
item.addEventListener('click', function() {
   bright.forEach((item) =>{
                   item.classList.remove('active');
                   this.classList.add('active');
               });
})
})
