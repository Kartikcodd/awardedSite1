const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// cursor 


var circle = document.querySelector("#circle")

function chaptacircle(){
    
        var xsacle =1;
        var yscale =1;
        
        var xprev= 0;
        var yprev= 0;
        
        window.addEventListener("mousemove",function(delts){

            var xdiff = delts.clientX - xprev
            var ydiff = delts.clientY - yprev
        
            xprev = delts.clientX
            yprev = delts.clientY

            // console.log(xdiff,ydiff);

            xsacle = gsap.utils.clamp(.8,1.2,xdiff),
            yscale = gsap.utils.clamp(.8,1.2,ydiff);

            movingcircle(xsacle,yscale);
        })
}

chaptacircle();

function movingcircle(xsacle,yscale) {

    window.addEventListener("mousemove",function (delts) {
        // console.log(delts);
 
        circle.style.transform = `translate(${delts.clientX}px,${delts.clientY}px) scale(${xsacle},${yscale})`
 
    })
    
}


function firstPageAdmin(){
    var tl = gsap.timeline();
    
    tl.from(".nav",{
        y:"-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        // scrub:2 
    })
    tl.to(".boundingelem",{
        y:"0",
        ease:Expo.easeInOut,
        duration: 1,
        stagger:.2,
        delay:-0.5
    })
    tl.from("#herofooter",{
        y:"-10",
        opacity:0,
        ease:Expo.easeInOut,
        duration: 1,
        delay:-.5,
        // stagger:.2
    })
}

movingcircle();
firstPageAdmin();


// // phle teno element ko select karo fir uske baad , uske badd teeno element pe querySelector lagooo , uske baad uski x and y postion ko find out karoo, ab x and y position ke badle use div ki img ko show karoo 
document.querySelectorAll(".elem").forEach(function (elem) {
   
    var rotate = 0;
    var diffrot = 0;
   
   
    elem.addEventListener("mousemove",function(details){

       var diff = details.clientY - elem.getBoundingClientRect().top;
       diffrot = details.clientX -rotate
       rotate = details.clientX;

        gsap.to(elem.querySelector("img"),{
            opacity : 1,
            ease: Power3,
            top : diff,
            left : details.clientX,
            rotate : gsap.utils.clamp(-20 , 20 , diffrot)
        })
    })

    elem.addEventListener("mouseleave",function(details){

        gsap.to(elem.querySelector("img"),{
            opacity : 0,
            ease: Power3,
            duration : .5,
        })
    })
    
})