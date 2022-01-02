var fullimg = document.getElementById("fullimg");
var fullim = document.getElementById("fullim");
function openfullimg(pic){
    fullimg.style.display = "flex";
    fullim.src = pic;
}
function closefullimg(){
    fullimg.style.display = "none";
}