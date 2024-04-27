//window means we will work on hole screen



window.addEventListener("mousemove", function(details){


    // find out Width of rectangle
    var react = this.document.querySelector("#rect");
//     console.log(details.clientX);
   var xal=gsap.utils.mapRange(0, window.innerWidth, 200+react.getBoundingClientRect().width/2,
    window.innerWidth-(200+react.getBoundingClientRect().width/2), details.clientX)


   // details.clientX  --> Position Of Mouse
gsap.to('#rect',{

    // left: details.clientX+ "px",
    left: xal + "px",
    ease: Power3

});


});