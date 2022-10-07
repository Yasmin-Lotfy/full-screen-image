var imgOverlay = document.getElementById("overlay");
var close = document.getElementById("close-btn");
var right = document.getElementById("right");
var fixedOverlay= document.getElementById("fixed-overlay");
var img = document.querySelectorAll(".item img");
var left = document.getElementById("left");
var currentIndexOfImage;

for(var i =0; i< img.length; i++){
    img[i].addEventListener("click",function(e){
         imgOverlay.src = e.target.src;
         currentIndexOfImage = (Array.from(img)).indexOf(e.target);
         fixedOverlay.classList.replace("d-none", "d-flex");
        //  fixedOverlay.classList.add("d-flex");
   })
}

fixedOverlay.addEventListener("click", function(e){
        if(e.target == fixedOverlay || e.target == close){
            closeSlide();          
    }
})
right.addEventListener("click", getNextSlide);
left.addEventListener("click", getLastSlide);

function getLastSlide(){
    currentIndexOfImage--; //-1
    if(currentIndexOfImage <0){ //3==6
        currentIndexOfImage =img.length-1;
    }
    imgOverlay.src=img[currentIndexOfImage].src;
}
function getNextSlide(){
    currentIndexOfImage++;
    if(currentIndexOfImage > img.length-1){ 
        currentIndexOfImage = 0;
    }
    imgOverlay.src=img[currentIndexOfImage].src;
}
function closeSlide(){
            fixedOverlay.classList.replace("d-flex", "d-none");
}

document.addEventListener("keydown", function(e){
    if(fixedOverlay.classList.contains("d-flex")){
        if(e.code == 'ArrowRight'){
            getNextSlide();
        }else if (e.code == 'ArrowLeft'){
            getLastSlide();
        }else if (e.code == "Escape"){
            closeSlide();  
        }
    }

})

   

