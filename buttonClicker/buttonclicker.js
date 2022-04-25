function login(Element){
    Element.innerText = "Logout";
}

function like(elm){
    elm.innerText= parseInt(elm.innerText)+1;
    alert ("\n You Liked this definition!");
}

function hide(Element){
    Element.remove();
}