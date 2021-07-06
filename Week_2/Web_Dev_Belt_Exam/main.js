function disapear (element) {
    // SELECT THE DIV FOR ALERT
    var element = document.querySelector(".alert")
    // REMOVE THE DIV
    element.remove()
}

function hover (pic) {
    // SELECT THE IMAGE CLASS
    var pic = document.querySelector(".mainPic")
    // REPLACE IMAGE WITH A NEW ONE
    pic.src = "assets/succulents-1.jpg"
}

function changeBack (img) {
    var img = document.querySelector(".mainPic")
    // RETURN STARTING/PREVIOUS IMAGE BACK
    img.src = "assets/succulents-2.jpg"
}

function cart () {
    // CART EMPTY ALERT
    alert("Your Cart is empty!")
}