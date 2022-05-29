const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];


window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});


const mouse = {
    x: undefined, //null sets to 0,0
    y: undefined, // adding other value will just draw a circle in coords
};


canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    //drawCircle();
});

canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    //drawCircle();
});


class Particle {
    constructor(){
        //this.x = mouse.x;
        //this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5+1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(){
        ctx.fillStyle = '#9bc4bc';
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.size, 0, Math.PI *2);
        ctx.fill();
    }
}

function init(){ // create an array of 100 particles
    for (let i = 0; i < 100; i++){
        particlesArray.push(new Particle());
    }
}

function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

init();


function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
};

animate();


console.log(ctx);

