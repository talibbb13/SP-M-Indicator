
document.querySelector("#menue-button").addEventListener("click", function() {
    document.querySelector("#sideBar").style.transform = `translateX(0%)`;
    console.log("click hua");
})

document.querySelector("#sideBar").addEventListener("click", function() {
    document.querySelector("#sideBar").style.transform = `translateX(-100%)`;
    console.log("click hua");
})