var count = 3;
function likes(){
    count += 1;
    console.log(count);
    var like = document.querySelector("#likes");
    like.innerText = count;
}
