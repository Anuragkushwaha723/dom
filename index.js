var item=document.querySelector('#items');
// console.log(item.parentElement);
// item.parentElement.style.backgroundColor='grey';

// console.log(item.lastElementChild);
// item.lastElementChild.textContent="hello 4321";

// console.log(item.lastChild);

// console.log(item.firstElementChild.textContent='Hello 1');

// console.log(item.firstChild);

// console.log(item.nextSibling);

// console.log(item.nextElementSibling);

// console.log(item.previousSibling);
// console.log(item.previousElementSibling);

var div=document.createElement('div');
div.className='mine';
div.id='mera';
div.setAttribute('title','I am there for u');

var divText=document.createTextNode("Hello");
div.appendChild(divText);
console.log(div);
div.style.fontSize='20px';
// var head=document.querySelector('header h1');
// var container=document.querySelector('header .container');
// container.insertBefore(div,head);
var ul=document.querySelector('ul');
var li=document.querySelector('li');
ul.insertBefore(div,li);