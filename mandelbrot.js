c = document.querySelector("#universe").getContext("2d");
const delay = ms => new Promise(res => setTimeout(res, ms));

size = 3;
var a,b,d,t,rule,dx,dy;
t = 0;
w = 1000;
h = 1000;

function atom(x,y,f) {
    c.fillStyle = f;
    c.fillRect(x,y,size, size);
}

function update() {
    t+=1;
    console.log(t);
    for (y = 1; y < h; y += 1) {
        for (x = 1; x < w; x += 1) {
            dx = (x-500)/500-0.5;
            dy = (y-500)/500;
            a = dx;
            b = dy;

            for (i = 0; i < t; i += 1) {
                d = (a*a)-(b*b)+dx;
                b = 2*a*b+dy;
                a = d;
                rule = d > 50;
                if(rule) atom(y,x,`rgb(${(t*5-r*4)*.4*(a*b*100)}, ${(t*5-r*3)*.3*(a*b*100)}, ${(t*5-r*3)*.3*(a*b*100)})`);
            }
        }
    }
}
 
async function loop() {
    r = 1;
    while (r < 25) {
        while (t <= 50 - r) {
            requestAnimationFrame(update);
            await delay(100);
            if(t == 50) {
                t = 0;
                r += 15;
            }
        }
    }
}

loop();