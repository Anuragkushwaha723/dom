
let items=document.getElementsByClassName('list-group-item');
items[1].textContent="Hello";
items[1].style.fontWeight="bold";
items[1].style.backgroundColor='yellow';
items[2].style.backgroundColor='green';
for (let i = 0; i <items.length; i++) {
    items[i].style.fontWeight = "bold";
    items[i].style.color = "blue";
}