 //parent node tranversal
 let ul2 = document.querySelector('ul');
 console.log(ul.parentNode.parentNode);
 console.log(ul.parentElement.parentElement);

 //child node tranversal
 let ul = document.querySelector('ul');
 console.log(ul.childNodes);
 console.log(ul.firstChild);
 console.log(ul.lastChild);

 ul.childNodes[1].style.backgroundColor = "blue";
 console.log(ul.children);

 //sibling node traversal
 console.log(ul.previousElementSibling);
 console.log(ul.nextElementSibling);