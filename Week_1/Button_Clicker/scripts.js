function loginBtn (element) {
    element.innerText = "Logout";
}

function removeBtn (element) {
    element.remove();
}

function countLikes (element) {
    var count = 13

    onclick = count++; 
    element.innerText = count + ' Likes';
}