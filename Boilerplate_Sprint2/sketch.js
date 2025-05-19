let s = function (sketch){
    sketch.setup = function(){
        //document.body.style.userSelect="none";
        let h = document.body.clientHeight;

        let page_height = document.body.getBoundingClientRect();
        console.log(page_height);
        
        let c = sketch.createCanvas(sketch.windowWidth, page_height.height);
        sketch.pixelDensity(1);
        c.position(0, 0);
        const canvas = c.canvas;
        console.log(canvas);
        canvas.style.position = "fixed"
        canvas.style.pointerEvents = "none"
        canvas.style.zIndex = 5000;
        
        
    }

    sketch.draw = function(){
        // use this to have transparent background
        sketch.clear();

        let a = sketch.map(scrollPercent, 0, 100, 0, 255);
        console.log(a);
        sketch.fill(255,a);
        sketch.noStroke();
        sketch.rect(0, 0, sketch.windowWidth, sketch.windowHeight);

        if(scrollPercent >= 100){
            sketch.fill(0);
            sketch.textSize(100);
            sketch.textAlign(sketch.CENTER);
            sketch.text('Take a Break!', sketch.windowWidth/2, sketch.windowHeight/2);
        }
        
       
    }
}

function getRandomColor() {
    const colors = [
        '#F5F5F2', '#F0E2D5', '#5F7783',
        '#E0DBD1', '#B9B8A6', '#EBE9DC', 
        '#C1D0CA', '#C38774', '#7B8480'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

const elements = document.querySelectorAll('body *');

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    console.log(element)
    element.style.backgroundColor = getRandomColor();
}

let myp5 = new p5(s);

var scrollPercent=0;

window.addEventListener('scroll', function() {
   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
   var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || window.innerHeight;
    scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
});