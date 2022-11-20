// let list=document.querySelector('.list-group-item:nth-child(2)');
// let list1=document.querySelector('.list-group-item:nth-child(3)');
// list.style.backgroundColor='green';
// list1.style.visibility='hidden';

var itemsList=document.querySelectorAll('li');
console.log(itemsList[1].innerHTML);
itemsList[1].style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for (let i = 0; i <odd.length; i++) {
    odd[i].style.backgroundColor='green';
    
}