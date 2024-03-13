 // getelementbyid
 const title = document.getElementById('main-heading');
 console.log(title);
 //GetElementByClassName
 const listClassItem = document.getElementsByClassName('list-items');
 console.log(listClassItem);
 //GetElementByTagName
 const listClassItems = document.getElementsByTagName('li');
 console.log(listClassItems);
 //querySelector
 const listItem = document.querySelector('li');
 console.log(listItem);
 //querySelectorAll
 const listItems = document.querySelectorAll('li');
 console.log(listItems);

 //styling elements
 const title1 = document.querySelector("#main-heading");

 title.style.color = "red";

 const listItems1 = document.querySelectorAll(".list-items");
 for (i = 0; i < listItems.length; i++) {
   listItems[i].style.color = "green";
 }

 //creating elements
 const ul1 = document.querySelector('ul');
 const li = document.createElement('li');

 //adding elements
 ul.append(li);

 //modifying text
 li.innerText = 'X-men';

 //modifying attributes and classes
 li.setAttribute('id', 'main-heading');
 li.removeAttribute('id');

 const title = document.querySelector('#main-heading');
 console.log(title.getAttribute('id'));

 li.classList.add('list-items');
 li.classList.remove('list-items');

 //removing elements
 li.remove();

