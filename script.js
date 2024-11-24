let slideindex = 0

function slideshow(){
    let i;
    let slideshowimage = document.querySelectorAll(".slideimage")
    slideindex++
    if(slideindex > slideshowimage.length){
        slideindex = 1
    }
   for(i = 0; i < slideshowimage.length;i++){
    slideshowimage[i].style.display = "none"
   }
   slideshowimage[slideindex-1].style.display = "block"
   setTimeout(slideshow, 3000)
}
slideshow()

