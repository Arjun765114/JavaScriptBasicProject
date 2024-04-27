//1) Make aRectangle and when we move mouse on yhat rectangle on the left side we want graduakky change the colour
// of the rechtangle to red and when we move mouse to the right side we want to change the colour to blue.

var rect=document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
    var rectanglelocation = rect.getBoundingClientRect();
  var insiderectval= details.clientX - rectanglelocation.left;
 
   if(insiderectval<rectanglelocation.width/2){
   
    var redcolor = gsap.utils.mapRange(0, rectanglelocation.width/2, 255, 0, insiderectval);
    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor}, 0, 0)`,
      ease:Power4,
    })
   }else{
    
    var bluecolor = gsap.utils.mapRange(rectanglelocation.width/2, rectanglelocation.width, 0,255, insiderectval);
    gsap.to(rect, {
      backgroundColor: `rgb(0, 0, ${bluecolor})`,
      ease:Power4,
    })
   }
});


rect.addEventListener("mouseleave", function(){
    
    gsap.to(rect, {
      backgroundColor: "white",
    })
})